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

![Unity 中的物品配置示例](/img/UnityExampleItem.png)

*在 Unity Editor 中配置 Item 的示例。*

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

### 皮肤基础纹理

物品支持纹理遮罩。普通自制物品很少需要用到，但制作皮肤时较重要。资源包中可选放入 `Albedo_Base.png`、`Metallic_Base.png` 和 `Emission_Base.png`。使用某些皮肤时，这些部分会被遮罩，从而保留物品原本的材质。

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
| `Backward` | flag | 已弃用，改用 `EquipableModelParent` |
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
| `Fishing_Catchable` | FishingCatchableProperties | 被钓起时的属性覆盖 |
| `GUID` | GUID | 必需 |
| `ID` | uint16 | 必需 |
| `Ignore_TexRW` | flag | 隐藏此资源的纹理读写错误日志 |
| `InspectAudioDef` | Master Bundle Pointer | 检视音效 |
| `Instantiated_Item_Name_Override` | string | 覆盖 Item Prefab 实例名 |
| `InventoryAudio` | Master Bundle Pointer | 拾取/移动/丢弃音效 |
| `Left_Handed_Characters_Mirror_Equipable` | bool | `true` |
| `Override_Show_Quality` | bool | 覆盖是否显示品质 |
| `Pro` | flag | Steam Economy 物品 |
| `Procedurally_Animate_Inertia` | bool | `true` |
| `Quality_Min` / `Quality_Max` | uint8 | 默认 `10` / `90` |
| `Rarity` | EItemRarity | `Common` |
| `Shared_Skin_Lookup_ID` | uint16 | 默认使用本物品 `ID` |
| `Shared_Skin_Apply_Visuals` | bool | `true` |
| `Should_Delete_At_Zero_Quality` | bool | `false` |
| `Should_Drop_On_Death` | bool | `true` |
| `Size_X` / `Size_Y` | uint8 | 背包格尺寸 |
| `Size_Z` / `Size2_Z` | float32 | 图标/模型尺寸相关 |
| `Slot` | ESlotType | `None` |
| `Type` | EItemType | 必需 |
| `Use_Auto_Icon_Measurements` | bool | `true` |
| `Use_Auto_Stat_Descriptions` | bool | `true` |
| `Useable` | EUseableType | `None` |

## 通用字段详解

### 操作、装备与使用

- **`Add_Default_Actions`**：为补充弹药、维修和拆解蓝图自动生成操作。如果没有配置 `Actions`，默认是 `true`。
- **`Allow_Manual_Drop`**：玩家能否手动丢弃物品，默认 `true`。
- **`Can_Player_Equip`**：玩家能否装备此物品。`Useable` 非 `None` 时默认 `true`，否则默认 `false`。这可以用于制作只能由哨戒炮使用、玩家无法装备的枪械。
- **`Can_Use_Underwater`**：能否在水下使用。`Slot` 不是 `Primary` 时默认 `true`，否则默认 `false`。
- **`Equipable_Movement_Speed_Multiplier`**：持在手中时的移动速度倍率；枪械附件的倍率也会一起叠加。
- **`EquipableModelParent`**：覆盖装备模型要挂接到的 Transform。模型在双手间移动的动画可能更适合使用 `Spine`。通常默认 `RightHook`；旧版 `Backward` 标志会令默认值变为 `LeftHook`。
- **`EquipablePrefab`**：覆盖装备后生成的模型。例如装备模型可使用带动画的 Skinned Mesh，而地面上的 `Item` Prefab 只使用静态网格。
- **`EquipAudioClip`**：装备时播放的 AudioClip，默认 `Equip`。
- **`InspectAudioDef`**：检视时播放的 AudioClip 或 OneShotAudioDefinition。
- **`Left_Handed_Characters_Mirror_Equipable`**：默认 `true`；设为 `false` 时，装备模型会镜像，以抵消左撇子角色自身的镜像。
- **`Procedurally_Animate_Inertia`**：视角模型是否从动画中累积角速度。旧的低质量动画可能需要它；较新的高质量动画通常应关闭。
- **`Slot`**：仅在设置 `Useable` 时决定可装备位置。`None` 仅允许快捷键；`Primary` 仅主槽；`Secondary` 可主槽或副槽；`Tertiary` 在此资源中未实现；`Any` 不限制槽位和快捷键。
- **`Useable`**：附加对应 Useable 类的功能。除非 `Can_Player_Equip` 另有配置，这至少会使物品可装备；通常与 `Slot` 配合使用。

### 容量、品质与背包尺寸

- **`Amount`**：弹药箱等容器式物品的最大容量，通常与 `Count_Min`、`Count_Max` 一起使用。
- **`Count_Min` / `Count_Max`**：容器式物品生成时的最小和最大数量，默认都为 `1`。官方原文在这两个字段的详解锚点处互换了标题，本处按字段实际含义整理。
- **`Quality_Min` / `Quality_Max`**：生成物品时的最低与最高品质，默认 `10` 和 `90`。
- **`Rarity`**：决定菜单显示的稀有度文字和高亮颜色。
- **`Override_Show_Quality`**：强制显示物品品质。
- **`Should_Delete_At_Zero_Quality`**：品质降为 0% 时删除物品，默认 `false`。
- **`Deleted_At_Zero_Quality_Effect` / `Deleted_At_Zero_Quality_Rewards`**：启用上述删除行为后，物品损坏时播放的[特效](/assets/effect-asset.html)和给予玩家的[奖励](/npcs/rewards.html)。
- **`Size_X` / `Size_Y`**：背包占用的列数与行数，默认各为 `1`。
- **`Size_Z`**：手动指定物品图标正交相机的 Size，与 Unity Camera 的同名属性对应，默认 `-1`。
- **`Size2_Z`**：Steam Economy 图标的正交相机尺寸，默认 `-1`。
- **`Use_Auto_Icon_Measurements`**：根据模型边界自动计算轴对齐的图标相机尺寸，默认 `true`。
- **`Use_Auto_Stat_Descriptions`**：自动在描述中附加伤害、储物空间、生命值等属性，默认 `true`。

### 标识、模型与其他行为

- **`GUID`**：物品资源必需。若资源文件没有提供 GUID，游戏成功加载时会尝试自动分配一个唯一的随机 GUID；详见 [GUID](/data/guid.html)。
- **`ID`**：必需的唯一旧版 ID。`Bypass_ID_Limit` 可允许使用官方内容预留的 ID 范围。
- **`Type`**：物品所属类别，必需；取值见 [EItemType](/data/enum/eitemtype.html)。
- **`Bypass_Hash_Verification`**：关闭哈希校验，允许文件不匹配，默认 `false`。
- **`Destroy_Item_Colliders`**：默认 `true`，角色装备 `Item` Prefab 时销毁碰撞体。设为 `false` 可保留子对象碰撞体，例如某些防暴盾牌 Mod 所需的碰撞体。
- **`Fishing_Catchable`**：覆盖物品被鱼竿钓起时的设置，详见[可钓取物属性](/items/fishing-catchable-properties.html)。
- **`Ignore_TexRW`**：不在错误日志中显示此资源的纹理读写错误。
- **`Instantiated_Item_Name_Override`**：实例化 `Item` Prefab 时使用的名称，默认是 `ID`。Unity 内置 Animation 组件通过 GameObject 名称引用对象，因此该字段有助于多种物品共用动画。
- **`InventoryAudio`**：拾取、在背包中移动和丢弃时的 AudioClip 或 OneShotAudioDefinition；默认值由具体子资源决定。
- **`Pro`**：表示 Steam Economy 物品。
- **`Shared_Skin_Lookup_ID`**：与另一物品共享皮肤，默认使用本物品的 `ID`。
- **`Shared_Skin_Apply_Visuals`**：当使用 `Shared_Skin_Lookup_ID` 时，是否应用皮肤材质和网格。设为 `false` 可只继承原版皮肤的击杀计数器、布娃娃特效等，而保留自定义斧头的外观。
- **`Should_Drop_On_Death`**：玩家死亡时是否在地面生成此物品，默认 `true`。设为 `false` 也**不会**让玩家重生后保留该物品。

## EEquipableModelParent

- `RightHook`：挂到 Right_Hook。
- `LeftHook`：挂到 Left_Hook。
- `Spine`：挂到 Spine。
- `SpineHook`：挂到可选的 Spine_Hook。

## EUseableType

常见值包括：

`None`、`Clothing`、`Gun`、`Consumeable`、`Melee`、`Fuel`、`Carjack`、`Barricade`、`Structure`、`Throwable`、`Grower`、`Optic`、`Refill`、`Fisher`、`Cloud`、`Arrest_Start`、`Arrest_End`、`Detonator`、`Filter`、`Carlockpick`。

`None` 不对应任何 Useable 类型；其余值分别对应同名类型。枚举值应保持拼写原样，包括 `Consumeable`。

## 蓝图、操作与本地化

除了上述字段，物品还能配置[合成蓝图](/items/blueprints.html)和[上下文菜单操作](/items/actions.html)。本地化文件中的 `Name` 是界面显示的物品名称，`Description` 是界面显示的物品描述，可使用[富文本](/data/rich-text.html)。

::: tip
字段名、枚举值、Prefab 名称和 GameObject 名称都应保持英文原样。只翻译说明文字。
:::

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/introduction.html)
