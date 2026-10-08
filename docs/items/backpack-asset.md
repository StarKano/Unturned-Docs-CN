---
title: 背包类（Backpack Asset）
translation:
  source: items/backpack-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 背包类（Backpack Asset）

`ItemBackpackAsset` 用于 Backpack Slot，可由玩家和 Zombie 穿戴。继承 [ItemBagAsset](/items/bag-asset.html)。

- `GUID`
- `ID`
- `Type Backpack`
- `Useable Clothing`

没有独有属性，但以下继承字段行为不同：

1. **`Armor`**（来自 ClothingAsset）：Backpack 不覆盖任何身体部位，因此该属性无效果。
2. **`InventoryAudio`**（来自 ItemAsset）：默认值依据 `Width` / `Height`：
   - 任一小于 3：`Sounds/Inventory/LightMetalEquipment.asset`
   - 任一小于 6：`Sounds/Inventory/MediumMetalEquipment.asset`
   - 否则：`Sounds/Inventory/HeavyMetalEquipment.asset`。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/backpack-asset.html)
