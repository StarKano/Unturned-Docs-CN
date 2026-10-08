---
title: 轮胎工具类（Tire Asset）
translation:
  source: items/tire-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 轮胎工具类（Tire Asset）

Tire Tool 由 `ItemTireAsset` 创建，可以给 Vehicle 安装或拆卸 Tire。继承 [VehicleRepairToolAsset](/items/vehicle-repair-tool-asset.html)。

- `GUID`
- `Type Tire`
- `Useable Tire`
- `ID`

## 专属属性

- **`Mode`** enum（`Add`、`Remove`）：
  - `Add`：消耗此 Item，给 Vehicle 安装 Tire。
  - `Remove`：从 Vehicle 拆下 Tire，并把对应 Item 加到玩家 Inventory。

> 上游原文：[items/tire-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/tire-asset.rst)
