---
title: Master Bundle Pointer
translation:
  source: data/master-bundle-ptr.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Master Bundle Pointer

用于定位 Master Bundle 内的 Unity Asset，例如 Prefab、Material、Audio Clip。

- **`MasterBundle`**：Unity 导出的 Asset Bundle 文件名，应与 `MasterBundle.dat` 中 `Asset_Bundle_Name` 一致。
- **`AssetPath`**：Unity Asset 路径，例如 `*.prefab`、`*.mat`、`*.png`、`*.ogg`；相对于 `Asset_Prefix`。

```text
"MyMasterBundlePtr"
{
    "MasterBundle" "core.masterbundle"
    "AssetPath" "path/to/file.extension"
}
```

使用默认 Master Bundle 时可内联：

```text
"MyMasterBundlePtr" "path/to/file.extension"
```

也可指定 Bundle：

```text
"MyMasterBundlePtr" "core.masterbundle:path/to/file.extension"
```

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/master-bundle-ptr.html)
