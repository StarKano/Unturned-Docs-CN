---
title: 商人类（Vendor Asset）
translation:
  source: npcs/vendor-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 商人类（Vendor Asset）

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Vendor`。
- **`ID`** `uint16`：必须唯一。

## Buying：Vendor 向玩家收购物品

Buying Entry 可以绑定 [Conditions](/npcs/conditions.html)，字段以 `Buying_#_` 开头，例如 `Buying_0_Conditions 1`。

- **`Buying`** `byte`：Vendor 收购多少种 Item。
- **`Buying_#_ID`** GUID / uint16：要从玩家处购买的 Item。
- **`Buying_#_Cost`** `uint32`：支付给玩家多少 Currency。若未设置 `Currency`，默认使用 Experience。

## Selling：Vendor 向玩家出售

Selling Entry 同样支持 Conditions，字段以 `Selling_#_` 开头，例如 `Selling_0_Conditions 1`。

- **`Selling`** `byte`：出售的 Item/Vehicle 总数。
- **`Selling_#_Type`** enum（`Item`、`Vehicle`）：出售 Asset 类型。
- **`Selling_#_ID`** GUID / uint16：出售的 Item/Vehicle。
- **`Selling_#_Cost`** `uint32`：玩家要支付多少 Currency。未配置 `Currency` 时使用 Experience。
- **`Selling_#_Spawnpoint`** `string`：购买 Vehicle 后生成位置，对应 Level Editor Spawnpoint Node ID，例如 `Liberator_Jet`。没填则生成在 NPC 上方。
- **`Selling_#_PaintColor`** Color：覆盖购买 Vehicle 的颜色；同时绕过 Vehicle Redirector 的 `SpawnPaintColor` 和 Vehicle Asset 的 `DefaultPaintColors`。
- **`Selling_#_Ammo`** `byte`：覆盖出售 Item 内 Ammo 数量。
- **`Selling_#_Barrel`** `uint16`：覆盖 Barrel Attachment。
- **`Selling_#_Grip`** `uint16`：覆盖 Grip Attachment。
- **`Selling_#_Magazine`** `uint16`：覆盖 Magazine。
- **`Selling_#_Sight`** `uint16`：覆盖 Sight。
- **`Selling_#_Tactical`** `uint16`：覆盖 Tactical Attachment。

## 其他字段

- **`Disable_Sorting`** Flag：关闭 Vendor Sorting。
- **`Currency`** GUID：使用哪个 [Currency Asset](/npcs/currency-asset.html) 替代 Experience。
- **`FaceOverride`** `byte`：打开 Vendor 时可选 Face Image Index。未设置或打开新 Message 时恢复 Character 默认 Face。

## 本地化

- **`Name`** `string`：UI 中 Vendor Name。
- **`Description`** Rich Text：Vendor Description。
- **`Buying_#_Description`** Rich Text：覆盖 Vendor Menu 中 Item 的描述，即“Vendor 如何描述物品”。
- **`Selling_#_Description`** Rich Text：同 Buying Description。

> 上游原文：[npcs/vendor-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/npcs/vendor-asset.rst)
