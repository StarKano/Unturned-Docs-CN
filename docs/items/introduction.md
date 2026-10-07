---
title: 物品制作入门
translation:
  source: items/introduction.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 物品制作入门

所有能被玩家放进游戏内背包的内容都属于 Item，基础类是 `ItemAsset`。所有物品共享一组通用属性，不同物品类型再增加自己的专属字段。

开始前建议先阅读：

- [资源定义](/assets/asset-definitions.html)
- [Asset Bundles](/assets/asset-bundles.html)

## Unity Asset Bundle 内容

### Item Prefab

1. 为自定义物品创建独立文件夹。
2. 在其中创建名为 **Item** 的 Prefab。
3. Tag 设置为 **4: Item**。
4. Layer 设置为 **13: Item**。
5. 给根 GameObject 添加 Collider。一般一个 Box Collider 即可，官方建议最小尺寸约为 `(0.2, 0.2, 0.2)`。
6. 单 LOD 物品可直接把 Mesh Filter / Mesh Renderer 放到根对象。
7. 多 LOD 物品应使用 LOD Group，并添加 `Model_0`、`Model_1` 等子对象。
8. 添加名为 **Icon** 的子 GameObject，用于正交相机生成背包图标。通常只需要调整其旋转方向。

### Animations Prefab

可装备物品需要名为 **Animations** 的 Prefab，并在根对象添加 Animation 组件。

- 每个可装备物品都应包含 `Equip` 动画。
- 支持检视的物品还应包含 `Inspect`。

若安装了官方 `ExampleAssets.unitypackage`，可从 `CoreMasterBundle/Items` 和 `Game/Sources/Animations` 参考原版 Prefab 和动画。

### Equip 音效

在物品目录中加入名为 `Equip` 的 Audio Clip，可在装备物品时播放。

## 通用字段

所有 Item 都要求：

- `GUID`
- `Type`
- `ID`

绝大多数物品还会设置：

- `Rarity`
- `Useable`
- `Slot`
- `Size_X`
- `Size_Y`

### 主要属性

| 字段 | 类型 | 默认值 / 用途 |
| --- | --- | --- |
| `Add_Default_Actions` | bool | 未设置 Actions 时通常为 true |
| `Allow_Manual_Drop` | bool | `true` |
| `Amount` | uint8 | `1`，容器类最大容量 |
| `Bypass_Hash_Verification` | bool | `false` |
| `Bypass_ID_Limit` | flag | 允许使用官方保留 ID 范围 |
| `Can_Player_Equip` | bool | 是否可由玩家装备 |
| `Can_Use_Underwater` | bool | 是否可在水下使用 |
| `Count_Min` / `Count_Max` | uint8 | 容器类生成 Amount 范围 |
| `Deleted_At_Zero_Quality_Effect` | Effect Pointer | 损坏消失时播放 |
| `Deleted_At_Zero_Quality_Rewards` | Rewards | 损坏消失时给予奖励 |
| `Destroy_Item_Colliders` | bool | `true` |
| `Equipable_Movement_Speed_Multiplier` | float32 | `1` |
| `EquipableModelParent` | enum | 默认 `RightHook` |
| `EquipablePrefab` | Master Bundle Pointer | 覆盖手持模型 |
| `EquipAudioClip` | Master Bundle Pointer | 默认 `Equip` |
| `GUID` | GUID | 必需 |
| `ID` | uint16 | 必需 |
| `InspectAudioDef` | Master Bundle Pointer | 检视音效 |
| `Instantiated_Item_Name_Override` | string | 覆盖 Item Prefab 实例名 |
| `InventoryAudio` | Master Bundle Pointer | 拾取/移动/丢弃音效 |
| `Left_Handed_Characters_Mirror_Equipable` | bool | `true` |
| `Override_Show_Quality` | bool | 覆盖是否显示品质 |
| `Procedurally_Animate_Inertia` | bool | `true` |
| `Quality_Min` / `Quality_Max` | uint8 | 默认 `10` / `90` |
| `Rarity` | EItemRarity | `Common` |
| `Should_Delete_At_Zero_Quality` | bool | `false` |
| `Should_Drop_On_Death` | bool | `true` |
| `Size_X` / `Size_Y` | uint8 | 背包格尺寸 |
| `Size_Z` / `Size2_Z` | float32 | 图标/模型尺寸相关 |
| `Slot` | ESlotType | `None` |
| `Type` | EItemType | 必需 |
| `Use_Auto_Icon_Measurements` | bool | `true` |
| `Use_Auto_Stat_Descriptions` | bool | `true` |
| `Useable` | EUseableType | `None` |

## EEquipableModelParent

- `RightHook`：挂到 Right_Hook。
- `LeftHook`：挂到 Left_Hook。
- `Spine`：挂到 Spine。
- `SpineHook`：挂到可选的 Spine_Hook。

## EUseableType

常见值包括：

`None`、`Clothing`、`Gun`、`Consumeable`、`Melee`、`Fuel`、`Carjack`、`Barricade`、`Structure`、`Throwable`、`Grower`、`Optic`、`Refill`、`Fisher`、`Cloud`、`Arrest_Start`、`Arrest_End`、`Detonator`、`Filter`、`Carlockpick`。

::: tip
字段名、枚举值、Prefab 名称和 GameObject 名称都应保持英文原样。只翻译说明文字。
:::

> 上游原文：[items/introduction.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/introduction.rst)
