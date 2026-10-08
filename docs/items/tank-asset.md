---
title: 液体储罐类（Tank Asset）
translation:
  source: items/tank-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 液体储罐类（Tank Asset）

Tank（Liquid Storage）由 `ItemTankAsset` 创建，是可放置的 Water/Fuel 容器。玩家可用 Fuel Canister 或 Water Canister 抽取/注入。继承 BarricadeAsset。

- `GUID`
- `Type Tank`
- `Useable Barricade`
- `Build Tank`
- `ID`

## 专属属性

- **`Resource`** `uint16`：最大液体单位数。1 单位 Water 等价于 Water Canister 的一次 Usage。默认 0。
- **`Source`** enum（`Fuel`、`None`、`Water`）：可存储的液体类型。

> 上游原文：[items/tank-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/tank-asset.rst)
