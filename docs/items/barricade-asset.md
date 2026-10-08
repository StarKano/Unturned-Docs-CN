---
title: 路障类（Barricade Asset）
translation:
  source: items/barricade-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 路障类（Barricade Asset）

Barricade 由 `ItemBarricadeAsset` 创建，可以由玩家放置，也可以在关卡编辑器中放置。

它继承 [PlaceableAsset](/items/placeable-asset.html)。

## 基础字段

- `GUID`
- `Type Barricade`（使用子类时应改用子类要求的 Type）
- `Useable Barricade`
- `ID`
- `Build`：决定放置物的行为类型。
- `InventoryAudio`：未指定时按名称和尺寸选择库存音效。名称含 `Seed` 时用 `Sounds/Inventory/Seeds.asset`；含 `Metal` 时用 `Sounds/Inventory/SmallMetal.asset`；否则 `Size_X` 或 `Size_Y` 等于 1 时用 `Sounds/Inventory/LightMetalEquipment.asset`，小于或等于 2 时用 `Sounds/Inventory/MediumMetalEquipment.asset`，其余用 `Sounds/Inventory/HeavyMetalEquipment.asset`。

常见 `Build` 值包括：

`Barrel_Rain`、`Barricade`、`Barricade_Wall`、`Beacon`、`Bed`、`Cage`、`Campfire`、`Charge`、`Claim`、`Clock`、`Door`、`Farm`、`Fortification`、`Freeform`、`Gate`、`Generator`、`Glass`、`Hatch`、`Ladder`、`Library`、`Mannequin`、`Note`、`Oil`、`Oven`、`Oxygenator`、`Safezone`、`Sentry`、`Sentry_Freeform`、`Shutter`、`Sign`、`Sign_Wall`、`Spike`、`Spot`、`Stereo`、`Storage`、`Storage_Wall`、`Tank`、`Torch`、`Vehicle`、`Wire`。

## 主要属性

| 字段 | 类型 | 默认值 / 说明 |
| --- | --- | --- |
| `Allow_Collision_While_Animating` | bool | `false`，动画期间是否保持碰撞 |
| `Allow_Placement_Inside_Clip_Volumes` | bool | 默认 `false`，`Build Charge` 例外 |
| `Allow_Placement_On_Vehicle` | bool | 默认 `true`，`Build Bed`、`Build Sentry` 和 `Build Sentry_Freeform` 例外 |
| `Armor_FalloffMaxRange` | float | `-1`，远距离伤害衰减终点 |
| `Armor_FalloffRange` | float | 衰减开始距离，默认等于 `Armor_FalloffMaxRange`，即立即衰减 |
| `Armor_FalloffMultiplier` | float | 超出最大距离后的伤害比例 |
| `Armor_Tier` | Low / High | 默认 Low；名称含 Metal 时通常 High |
| `Bypass_Claim` | bool | 是否允许在其他玩家 Claim 区域内放置；默认 `false`，`Build Charge` 例外；旧版 flag 写法仍受支持 |
| `Bypass_Pickup_Ownership` | bool | 非拥有者是否可拾取；默认 `false`，`Build Charge` 例外 |
| `Can_Be_Damaged` | bool | `true` |
| `CanVehicleHookWhileAttached` | bool | 附着该路障时载具是否仍可被吊钩拾取 |
| `Can_Zombies_Target` | bool | `true` |
| `Eligible_For_Pooling` | bool | `true`，`Build Beacon` 例外；部分路障启用对象池后可能无法正确重置 |
| `Explosion` | GUID / uint16 | 被摧毁时播放的 Effect；Build Vehicle 时表示生成载具 |
| `Has_Clip_Prefab` | bool | 默认 `true`；服务端与客户端共用预制件时设为 `false`，官方内容多数使用 `Has_Clip_Prefab false` |
| `Health` | uint16 | `0` |
| `Locked` | flag | 仅拥有者可交互 |
| `Offset` | float | 放置时离地高度 |
| `PlacementAudioClip` | Master Bundle Pointer | 放置音效 |
| `PlacementPreviewPrefab` | Master Bundle Pointer | 放置预览模型 |
| `Proof_Explosion` | flag | 免疫范围爆炸伤害 |
| `Radius` | float | 放置所需净空半径 |
| `Range` | float | 最大放置距离 |
| `RequiresHeatSourceCraftingTagConversion` | bool | `Oven`、`Torch`、`Campfire` 适用；默认 `true`，加载时转换旧版热源标签配置 |
| `Salvage_Duration_Multiplier` | float | `1` |
| `Unpickupable` | flag | 禁止拾取 |
| `Unrepairable` | flag | 禁止维修 |
| `Unsalvageable` | flag | 受损时拆解不返还部分材料 |
| `Unsaveable` | flag | 不写入存档 |
| `Use_Water_Height_Transparent_Sort` | flag | 适合玻璃等透明路障 |
| `Vulnerable` | flag | 可被低威力武器伤害 |

::: warning
`Allow_Collision_While_Animating` 可能引入基于物理的漏洞，例如门体推动/夹人问题，启用前应充分测试。
:::

::: warning
3.24.7.0 更新说明曾将 `CanVehicleHookWhileAttached` 误写为 `CanParentVehicleBePickedUp`。官方文档建议使用前者；它指出下一版本才会同时支持两个名称。
:::

`Armor_Falloff*` 属性同样适用于动物、对象、资源、结构和载具。`Armor_FalloffMultiplier` 使用 0–1 的伤害比例；默认玩法配置中，低级护甲承受 100% 伤害，高级护甲承受 50% 伤害，服务器可以修改这些倍率。

`Unrepairable` 会阻止带 `Repair` 标志的近战物品（例如喷灯）维修；`Vulnerable` 允许没有 `Invulnerable` 标志的低威力武器造成伤害。

`RequiresHeatSourceCraftingTagConversion` 启用时，如果 `PlaceableProvidesCraftingTags` 为空，加载过程会加入原版热源标签 `20f30322bbcc4b01a4f116d22b24c21a`。它还会在 Fire 子对象添加模式为 `Remove`、激活条件为 `Invert` 的 Crafting Tag Modifier，并在 Barricade 对象上添加关联的 Crafting Tag Provider；火焰熄灭后会移除热源标签。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://unturned.wiki.gg/wiki/Gameplay_config>
- <https://unturned.wiki.gg/wiki/Horde_Beacon>
- <https://unturned.wiki.gg/wiki/Blowtorch>
- <https://unturned.wiki.gg/wiki/Small_Glass_Plate>

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/barricade-asset.html)
