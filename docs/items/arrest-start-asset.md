---
title: 拘捕类（Arrest Start Asset）
translation:
  source: items/arrest-start-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 拘捕类（Arrest Start Asset）

`ItemArrestStartAsset` 用于“Catcher”物品，可束缚玩家；对应的 Releaser 可解除束缚。Vanilla 示例包括 Handcuffs、Cable Tie。

继承 ItemAsset：

- `GUID`
- `ID`
- `Type Arrest_Start`
- `Useable Arrest_Start`

## 专属属性

- **`Strength`** `uint16`：被束缚玩家需要 Lean 多少次才能挣脱，默认 0。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://unturned.wiki.gg/wiki/Handcuffs>
- <https://unturned.wiki.gg/wiki/Cable_Tie>

> 上游原文：[items/arrest-start-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/arrest-start-asset.rst)
