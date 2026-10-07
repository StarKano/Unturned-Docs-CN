#!/usr/bin/env python3
import math
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

from qcloud_cos import CosConfig, CosS3Client

SECRET_ID = os.environ["TENCENT_SECRET_ID"]
SECRET_KEY = os.environ["TENCENT_SECRET_KEY"]
BUCKET = os.environ["COS_BUCKET"]
REGION = os.environ["COS_REGION"]
ENDPOINT = os.environ.get("COS_ENDPOINT", "").strip() or None

PART_SIZE = 1024 * 1024
MAX_WORKERS = 4
MAX_RETRIES = 4

config = CosConfig(
    Region=None if ENDPOINT else REGION,
    SecretId=SECRET_ID,
    SecretKey=SECRET_KEY,
    Endpoint=ENDPOINT,
    Scheme="https",
    Timeout=30,
    KeepAlive=True,
    PoolConnections=MAX_WORKERS + 2,
    PoolMaxSize=MAX_WORKERS + 2,
    AutoSwitchDomainOnRetry=not bool(ENDPOINT),
)
client = CosS3Client(config)


def retry_call(label, fn):
    last_error = None
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            return fn()
        except Exception as exc:
            last_error = exc
            if attempt == MAX_RETRIES:
                break
            delay = attempt * 3
            print(f"[retry] {label} failed on attempt {attempt}: {exc}", file=sys.stderr)
            print(f"[retry] retrying in {delay}s...", file=sys.stderr)
            time.sleep(delay)
    raise last_error


def upload_small(local_path, key):
    size = os.path.getsize(local_path)
    print(f"Uploading {local_path} ({size} bytes) -> cos://{BUCKET}/{key}")

    with open(local_path, "rb") as fh:
        body = fh.read()

    retry_call(
        f"put_object {key}",
        lambda: client.put_object(Bucket=BUCKET, Key=key, Body=body),
    )


def upload_part(local_path, key, upload_id, part_number, offset, length):
    with open(local_path, "rb") as fh:
        fh.seek(offset)
        body = fh.read(length)

    def do_upload():
        response = client.upload_part(
            Bucket=BUCKET,
            Key=key,
            UploadId=upload_id,
            PartNumber=part_number,
            Body=body,
        )
        return {
            "PartNumber": part_number,
            "ETag": response["ETag"],
        }

    return retry_call(f"upload_part {part_number}", do_upload)


def upload_multipart(local_path, key):
    size = os.path.getsize(local_path)
    part_count = math.ceil(size / PART_SIZE)
    print(
        f"Uploading {local_path} ({size} bytes) -> cos://{BUCKET}/{key} "
        f"with {part_count} parts / {MAX_WORKERS} workers"
    )

    init = retry_call(
        f"create_multipart_upload {key}",
        lambda: client.create_multipart_upload(Bucket=BUCKET, Key=key),
    )
    upload_id = init["UploadId"]

    try:
        futures = []
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            for index in range(part_count):
                offset = index * PART_SIZE
                length = min(PART_SIZE, size - offset)
                futures.append(
                    executor.submit(
                        upload_part,
                        local_path,
                        key,
                        upload_id,
                        index + 1,
                        offset,
                        length,
                    )
                )

            parts = [future.result() for future in as_completed(futures)]

        parts.sort(key=lambda item: item["PartNumber"])

        retry_call(
            f"complete_multipart_upload {key}",
            lambda: client.complete_multipart_upload(
                Bucket=BUCKET,
                Key=key,
                UploadId=upload_id,
                MultipartUpload={"Part": parts},
            ),
        )
    except Exception:
        try:
            client.abort_multipart_upload(
                Bucket=BUCKET,
                Key=key,
                UploadId=upload_id,
            )
        except Exception as abort_error:
            print(f"[warn] failed to abort multipart upload: {abort_error}", file=sys.stderr)
        raise


def main():
    upload_multipart("site.tar.gz", "unturned-docs/site.tar.gz")
    upload_small("version.txt", "unturned-docs/version.txt")
    print("COS upload completed successfully.")


if __name__ == "__main__":
    main()
