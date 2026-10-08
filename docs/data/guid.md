---
title: GUID
translation:
  source: data/guid.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# GUID

**GUID（Globally Unique Identifier）**是识别资源的 32 位十六进制值。与文件名相比，文件移动后仍可保持引用，因此更适合作为资源标识。

可用 [guidgenerator.com](https://www.guidgenerator.com/) 手动生成 GUID。若[资源定义](/assets/asset-definitions.html)省略 `GUID`，成功加载时游戏会自动分配随机 GUID。

旧 Legacy ID 为 16 位，范围 `[0, 65535]`；GUID 为 128 位，空间极大，因此开发者之间无需协调或注册即可生成。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/guid.html)
