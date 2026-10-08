---
title: 可放置物基类（Placeable Asset）
translation:
  source: items/placeable-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 可放置物基类（Placeable Asset）

`ItemPlaceableAsset` 是其他可放置物的 Base Class，继承 ItemAsset。

## 属性

- **`ExplosionEffect_CopyModelPosition`** `bool`：true 时 Explosion Effect 精确生成在 Model Position，不加 Offset。默认 false。
- **`ExplosionEffect_CopyModelRotation`** `bool`：true 时 Effect 使用 Model 相同 Rotation。默认 false。
- **`Item_Dropped_On_Destroy`** Asset Pointer：被摧毁时掉落的 Item 或 Spawn Table。可写 `this` 使用当前 Item GUID。
- **`Min_Items_Dropped_On_Destroy`** `int`：摧毁时最少掉落数量，默认 0。
- **`Max_Items_Dropped_On_Destroy`** `int`：摧毁时最多掉落数量，默认 0。
- **`Items_Dropped_On_Destroy`** `int`：同时设置上面 Min / Max 的简写。
- **`Min_Items_Recovered_On_Salvage`** `int`：低于 100% Health 时 Salvage 获得最少数量，默认 1。
- **`Max_Items_Recovered_On_Salvage`** `int`：低于 100% Health 时 Salvage 获得最多数量，默认 1。
- **`Items_Recovered_On_Salvage`** `int`：同时设置上面 Min / Max。
- **`Min_Items_Recovered_On_Salvage_Full_Health`** `int`：满 Health 时拾取获得最少数量，默认 1。
- **`Max_Items_Recovered_On_Salvage_Full_Health`** `int`：满 Health 时拾取获得最多数量，默认 1。
- **`Items_Recovered_On_Salvage_Full_Health`** `int`：同时设置上面 Full Health Min / Max。
- **`PlaceableProvidesCraftingTags`**：Tag Asset Pointer List，附近玩家可把这些 Tag 用于 Blueprint Requirement；Item Description 会把它们显示为 “crafting capabilities”。

Vanilla Brick Oven 示例：

```text
PlaceableProvidesCraftingTags
[
    // Heat Source
    20f30322bbcc4b01a4f116d22b24c21a
    // Enclosed Heat Source
    d2cc65b749e5477f95103601df89cdbc
]
```

- **`SalvageItem`** Asset Pointer：Placeable 低于 100% Health 时 Salvage 获得的 Item / Spawn Table。默认会从该 Placeable Blueprint 使用的 Item 中随机选择。
- **`SalvageItem_FullHealth`** Asset Pointer：满 Health Salvage/拾取时获得的 Item / Spawn Table，默认自身；可写 `this`。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/placeable-asset.html)
