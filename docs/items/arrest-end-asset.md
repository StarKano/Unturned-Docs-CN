---
title: 解除拘捕类（Arrest End Asset）
translation:
  source: items/arrest-end-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 解除拘捕类（Arrest End Asset）

`ItemArrestEndAsset` 用于“Releaser”物品，可以移除玩家身上的对应 [Catcher](/items/arrest-start-asset.html)。Vanilla 示例是 Handcuffs Key。

继承 ItemAsset：

- `GUID`
- `ID`
- `Type Arrest_End`
- `Useable Arrest_End`

## 专属属性

- **`Recover`** `uint16`：该 Item 能解开的 Catcher Item Legacy ID，默认 0。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://unturned.wiki.gg/wiki/Handcuffs_Key>

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/arrest-end-asset.html)
