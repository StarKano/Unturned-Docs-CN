---
title: Asset Pointer
translation:
  source: data/asset-ptr.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Asset Pointer

资源引用另一个资源时使用 **Asset Pointer**，目标通过 [GUID](/data/guid.html) 识别。

## `*.dat`

```text
MyAssetPtr ################################
```

GUID 不需要引号，因为 `*.dat` 把键和值作为字符串。

## `*.asset`

支持两种格式；内联格式较晚加入，因此很多官方资源仍使用旧格式：

```text
"MyAssetPtr" "################################"
"MyAssetPtr" { "GUID" "################################" }
```

## JSON

```json
"MyAssetPtr": { "GUID": "################################" }
```

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/asset-ptr.html)
