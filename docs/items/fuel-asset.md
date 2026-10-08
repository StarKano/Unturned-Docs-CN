---
title: 燃料容器类（Fuel Asset）
translation:
  source: items/fuel-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 燃料容器类（Fuel Asset）

Fuel Canister 由 `ItemFuelAsset` 创建，可以抽取、存储和注入 Fuel。继承 ItemAsset。

- `GUID`
- `Type Fuel`
- `Useable Fuel`
- `ID`

## 专属属性

- **`Always_Spawn_Full`** `bool`：true 时总是以满容量生成。
- **`Delete_After_Filling_Target`** `bool`：true 时向目标加 Fuel 后从玩家 Inventory 删除。
- **`Fuel`** `uint16`：容器最大 Fuel 单位数。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/fuel-asset.html)
