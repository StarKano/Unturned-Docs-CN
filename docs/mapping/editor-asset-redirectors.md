---
title: 编辑器资源重定向
translation:
  source: mapping/editor-asset-redirectors.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 编辑器资源重定向

**Editor Asset Redirector** 可以在 Level Editor 中批量替换 Object、Resource、Material 或 Foliage Asset。

Redirect 会在 Level Editor 加载地图时应用，并在保存地图后永久写入结果。

在 Unturned 游戏目录创建：

```text
EditorAssetRedirectors.txt
```

规则：

- 空行忽略。
- 以 `//` 或 `#` 开头的行忽略。
- 每条 Redirect 由两个 [GUID](/data/guid.html) 组成，中间使用 `->`。

示例：

```text
// 用 Boulder_01 替换 Boulder_00
6125b4de591b44359237f6d7191dd919 -> ee402fc9debe4f03bffb31a49eb04fb7

// 用 Maple_3 替换 Maple_0
63cb368c94b14000aabc5325b048cfa3 -> 011d1369cd56497488827b44509b0b4b
```

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/mapping/editor-asset-redirectors.html)
