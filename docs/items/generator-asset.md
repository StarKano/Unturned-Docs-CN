---
title: 发电机类（Generator Asset）
translation:
  source: items/generator-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 发电机类（Generator Asset）

Generator 由 `ItemGeneratorAsset` 创建，是可放置电源。玩家可用 [Fuel Canister](/items/fuel-asset.html) 加油。继承 [BarricadeAsset](/items/barricade-asset.html)。

- `GUID`
- `Type Generator`
- `Useable Barricade`
- `Build Generator`
- `ID`

## 专属属性

- **`Capacity`** `uint16`：最大 Fuel 储量，默认 0。
- **`Wirerange`** `float` [0,256]：供电半径（米）。
- **`Burn`** `float`：消耗 1 单位 Fuel 需要的秒数。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/generator-asset.html)
