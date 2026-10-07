"""Report structural differences between the pinned upstream RST and local pages.

Usage: python translation/audit_coverage.py PATH_TO_UPSTREAM_CHECKOUT
This is a triage report, not a translation-completeness score.
"""

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
UPSTREAM = Path(sys.argv[1]).resolve()
STATUS = json.loads((ROOT / "translation/status.json").read_text(encoding="utf-8"))


def rst_sections(text):
    lines = text.splitlines()
    found = []
    for i in range(len(lines) - 1):
        name, underline = lines[i].strip(), lines[i + 1].strip()
        if len(underline) >= 3 and len(set(underline)) == 1 and underline[0] in "=-~^`:":
            if name and not name.startswith(".."):
                found.append(name)
    return found


def rst_literals(text):
    # Exact inline code literals are reliable technical anchors for review.
    return set(re.findall(r"``([^`\n]+)``", text))


def rst_fields(text):
    # Bold names at the start of a property description are the actual keys.
    names = set(re.findall(r"^\*\*([A-Za-z][A-Za-z0-9_#]*)\*\*[^\n:]{0,180}:", text, re.M))
    return names - {"Colors"}  # Introductory prose in data/color.rst, not a key.


def rst_directives(text, name):
    return len(re.findall(r"^\.\. " + re.escape(name) + r"::", text, re.M))


rows = []
for source, meta in STATUS.items():
    original = (UPSTREAM / source).read_text(encoding="utf-8-sig")
    target_path = ROOT / meta["target"]
    translated = target_path.read_text(encoding="utf-8-sig")
    sections = rst_sections(original)
    literals = rst_literals(original)
    fields = rst_fields(original)
    missing_literals = [x for x in literals if x not in translated]
    missing_fields = sorted(x for x in fields if x not in translated)
    code = sum(rst_directives(original, n) for n in ("code-block", "literalinclude", "parsed-literal"))
    code_out = (translated.count("```") + translated.count("~~~")) // 2
    notes = sum(rst_directives(original, n) for n in ("note", "warning", "tip", "important", "caution"))
    admonitions = len(re.findall(r"^::: (?:note|warning|tip|important|caution)|^> ", translated, re.M))
    urls = set(re.findall(r"https?://[^\s<>`]+", original))
    missing_urls = [x for x in urls if x.rstrip(".,)\"_") not in translated]
    images = set(re.findall(r"^\.\. (?:image|figure)::\s*(\S+)", original, re.M))
    missing_images = sorted(x for x in images if x not in translated)
    rows.append({
        "source": source,
        "target": meta["target"],
        "sections": len(sections),
        "source_chars": len(original),
        "target_chars": len(translated),
        "source_code_blocks": code,
        "target_code_blocks": code_out,
        "source_admonitions": notes,
        "target_admonitions": admonitions,
        "missing_literals": missing_literals,
        "missing_fields": missing_fields,
        "missing_urls": missing_urls,
        "missing_images": missing_images,
    })

for row in sorted(rows, key=lambda x: (len(x["missing_literals"]), x["source_chars"]), reverse=True):
    print("\t".join(str(row[k]) for k in (
        "source", "source_chars", "target_chars", "sections", "source_code_blocks",
        "target_code_blocks", "source_admonitions", "target_admonitions")) +
        f"\t{len(row['missing_literals'])}\t{len(row['missing_urls'])}")

(ROOT / "translation/coverage-report.json").write_text(
    json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
)
