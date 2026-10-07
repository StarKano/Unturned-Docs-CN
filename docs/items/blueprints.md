---
title: 合成蓝图（Blueprints）
translation:
  source: items/blueprints.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 合成蓝图（Blueprints）

Blueprint 可以添加到物品资源中，相当于“合成配方”。它不仅可以制作其他物品，也可以修改当前物品状态，而且输入和输出完全可以是与当前物品无关的资源。

[上下文操作](/items/actions.html)可以引用蓝图；某些蓝图类型还会自动生成对应的右键操作。

## 旧版格式的必需配置

所有蓝图都需要：

- `Blueprints`
- `Blueprint_#_Type`
- `Blueprint_#_Supplies`
- `Blueprint_#_Supply_#_ID`
- 至少一个输出

单一输出可以使用 `Blueprint_#_Products` + `Blueprint_#_Product`。多个不同输出使用 `Blueprint_#_Outputs`、`Blueprint_#_Output_#_ID` 和 `Blueprint_#_Output_#_Amount`。

## 旧版格式字段

| 字段 | 说明 |
| --- | --- |
| `Blueprints` | 蓝图总数 |
| `Blueprint_#_Type` | 蓝图类型 |
| `Blueprint_#_Supplies` | 输入材料数量 |
| `Blueprint_#_Supply_#_ID` | 输入物品 Legacy ID |
| `Blueprint_#_Supply_#_Amount` | 输入数量 |
| `Blueprint_#_Supply_#_Critical` | 缺少材料时隐藏蓝图 |
| `Blueprint_#_Supply_#_AllowEmpty` | 是否允许空容器 |
| `Blueprint_#_Supply_#_Prioritization` | 输入使用优先级 |
| `Blueprint_#_Tool` | 所需工具物品 ID |
| `Blueprint_#_Tool_Critical` | 缺少工具时隐藏蓝图 |
| `Blueprint_#_Origin` | 单一输出的物品来源，默认 `Craft` |
| `Blueprint_#_Output_#_Origin` | 指定多输出项的物品来源，默认 `Craft` |
| `Blueprint_#_Products` | 单一输出数量 |
| `Blueprint_#_Product` | 单一输出物品 ID |
| `Blueprint_#_Outputs` | 多输出数量 |
| `Blueprint_#_Output_#_ID` | 多输出物品 ID |
| `Blueprint_#_Output_#_Amount` | 多输出数量 |
| `Blueprint_#_Build` | 合成时播放的音效 GUID 或旧版 ID |
| `Blueprint_#_Skill` | 所需技能类型 |
| `Blueprint_#_Level` | 所需技能等级 |
| `Blueprint_#_Map` | 限制地图 |
| `Blueprint_#_Searchable` | 是否可在合成菜单搜索 |
| `Blueprint_#_State_Transfer` | 是否向输出传递状态 |
| `Blueprint_#_State_Transfer_Delete_Attachments` | 状态传递时是否删除附件 |

## 旧版字段详解

`Blueprint_#_Type` 决定蓝图在合成界面出现的分页，是必需字段。可选值为 `Ammo`（弹药）、`Apparel`（服装）、`Barricade`（路障）、`Furniture`（家具）、`Gear`（装备）、`Repair`（维修）、`Structure`（建筑）、`Supply`（材料）、`Tool`（工具）和 `Utilities`（实用工具）。`Blueprints` 是蓝图总数，也必须配置。

`Blueprint_#_Skill` 可选 `None`、`Craft`（合成）、`Cook`（烹饪）或 `Repair`（工程师）。设置技能后，玩家的技能等级必须达到 `Blueprint_#_Level`；`Cook` 还要求玩家靠近篝火等热源。`Blueprint_#_Map` 限定蓝图只在指定地图显示。

### 输出与来源

- **`Blueprint_#_Product`**：单一输出物品的旧版 ID。未设置时默认使用蓝图所属物品的 `ID`；若需输出多种不同物品，请改用 `Blueprint_#_Outputs` 与 `Blueprint_#_Output_#_ID`。
- **`Blueprint_#_Products`**：单一输出物品的数量，默认 `1`，需配合 `Blueprint_#_Product`。
- **`Blueprint_#_Outputs`**：已配置的 `Blueprint_#_Output_#_ID` 数量，默认 `0`。
- **`Blueprint_#_Output_#_ID` / `Blueprint_#_Output_#_Amount`**：一项输出的旧版 ID 和生成数量。前者需要 `Blueprint_#_Outputs`；数量为 `2` 就生成两个该物品。
- **`Blueprint_#_Origin` / `Blueprint_#_Output_#_Origin`**：设置输出的[物品来源](/data/enum/eitemorigin.html)，默认 `Craft`。例如 `Admin` 会使物品以满品质生成；前者用于 `Product`，后者用于对应的 `Output_#_ID`。

### 输入、工具与状态

- **`Blueprint_#_Supplies`**：已配置的 `Blueprint_#_Supply_#_ID` 数量。
- **`Blueprint_#_Supply_#_ID` / `Blueprint_#_Supply_#_Amount`**：消耗材料的旧版 ID 和所需数量。`ID` 也可写成 `this`，引用蓝图所属物品的 ID，拆解配方尤其适用。
- **`Blueprint_#_Supply_#_AllowEmpty`**：默认 `false`。设为 `true` 后，空弹匣等数量为零的物品按数量一处理，原版用此方式允许拆解空弹匣。
- **`Blueprint_#_Supply_#_Critical`**：仅在玩家拥有对应材料时显示蓝图。
- **`Blueprint_#_Supply_#_Prioritization`**：决定优先消耗哪些材料。`LowestAmount` 按当前数量从少到多消耗（例如先用最空的弹匣）；`LowestQuality` 按品质从低到高消耗。`Ammo` 类型默认 `LowestAmount`，其他类型默认 `LowestQuality`。
- **`Blueprint_#_Tool`**：必需工具的旧版 ID。合成时不会消耗工具；`Blueprint_#_Tool_Critical` 可使蓝图仅在玩家持有该工具时显示。
- **`Blueprint_#_Build`**：合成时播放的音效 GUID 或旧版 ID。
- **`Blueprint_#_Searchable`**：默认 `true`，即使玩家缺少材料，搜索结果仍可显示该蓝图；可用于隐藏仅供调试、正常游戏无法取得的配方。
- **`Blueprint_#_State_Transfer`**：将输入材料当前状态尽可能传给输出，例如弹药箱中的弹数、品质、选定的射击模式或油桶中的燃油量。
- **`Blueprint_#_State_Transfer_Delete_Attachments`**：状态传递开启时，是否删除输出枪械的全部附件，默认 `false`。

蓝图也支持[任务条件](/npcs/conditions.html)与[奖励](/npcs/rewards.html)，例如只在季节活动期间开放。旧版配置的条件和奖励都以 `Blueprint_#_` 为前缀，如 `Blueprint_0_Condition_0_Type Holiday`。

## 输入物品新格式

较新的蓝图可以使用结构化 Input Items，详见[蓝图输入物品](/items/blueprints_inputitem.html)。新格式支持 Asset Pointer / `this`、质量与 Amount 条件、是否消耗、计数方式以及输入优先级。

## 新版数据文件格式（v2）

从 **3.25.5.0** 起，`Blueprints` 可写成[列表](/assets/data-file-format.html)，每一项是一个字典，不再给每个属性添加 `Blueprint_#_` 前缀。游戏可以自动转换大部分旧版蓝图；相关命令见[启动参数中的 `-ResaveAssets`](/about/launch-options.html)。**使用该参数前应备份自定义资源，最好纳入版本控制。**官方对此格式仍标注“建设中”。

```text
Blueprints
[
    {
        // 第一条蓝图的属性
    }
    {
        // 第二条蓝图的属性
    }
]
```

| 字段 | 类型 / 默认值 | 作用 |
| --- | --- | --- |
| `CategoryTag` | 标签资源指针 | 合成界面所属分类，可建立自定义分类 |
| `Conditions` | NPC 条件 | 合成前必须满足的条件 |
| `Effect` | 特效资源指针 | 合成成功时播放的特效 |
| `InputItems` | 输入物品列表 | 所需材料，详见[蓝图输入物品](/items/blueprints_inputitem.html) |
| `Map` | 字符串 / 空 | 限定显示蓝图的地图 |
| `Name` | 字符串 / 空 | 区分大小写的可选标识符 |
| `Operation` | `EBlueprintOperation` / `None` | 对输入物品的特殊操作 |
| `OutputItems` | 输出物品列表 | 生成的物品，详见[蓝图输出物品](/items/blueprints_outputitem.html) |
| `RequiresNearbyCraftingTags` | 标签资源指针列表 | 附近工作台必须提供的标签 |
| `RequiresStaticTags` | 标签资源指针列表 | 地图启动时检查的标签 |
| `Rewards` | NPC 奖励 | 合成时给予的奖励 |
| `Searchable` | bool / `true` | 缺少材料时仍在搜索结果显示 |
| `Skill` / `Skill_Level` | 技能 / `0` | 技能类型和最低等级 |
| `StateTransfer` | bool / `false` | 将第一个输入物品的状态传给输出 |
| `StateTransfer_DeleteAttachments` | bool / `false` | 状态传递时删除输出枪械附件 |
| `Type` | `EBlueprintType` | 已弃用，改用 `CategoryTag` 和 `Operation` |
| `VisibleWithUnmetConditions` | bool / `false` | 未满足 NPC 条件时仍可显示 |

### 分类、条件与操作

`CategoryTag` 决定合成界面中的分类，取代旧 `Type` 的固定分类功能；旧 `Type` 同时影响合成行为，这部分改由 `Operation` 负责。`Operation` 的取值有：

- `None`：不做特殊修改。
- `RepairTargetItem`：将目标物品恢复到满品质。
- `FillTargetItem`：把第一个输入物品的数量转移给目标物品。

`Conditions` 是合成前必须满足的 NPC 条件。默认情况下，全部条件满足之前蓝图会隐藏。若为条件配置了显示文本，可开启 `VisibleWithUnmetConditions`，让玩家提前看见蓝图；否则默认的“条件未满足”提示信息不足。`Rewards` 是合成时给予的 NPC 奖励，`Effect` 是合成成功时播放的特效。

`Name` 可供上下文菜单操作或禁止使用的蓝图列表引用，比较时区分大小写。`Map` 的地图名称不匹配时，蓝图不显示。`Searchable` 为 `true` 时，即使缺少材料，搜索结果仍会包含蓝图；仅供调试的配方可将其关闭。

### 工作台与地图标签

`RequiresNearbyCraftingTags` 要求附近工作台提供指定标签。例如同时要求 Chemical Mixing 与 Workbench：

```text
RequiresNearbyCraftingTags
[
    99896da563a748148460c67b9962874f // Chemical Mixing
    7b82c125a5a54984b8bb26576b59e977 // Workbench
]
```

`RequiresStaticTags` 与之类似，但只在地图启动时检查一次。它可检查[关卡资源](/assets/level-asset.html)的 `Tags`；与其通过地图名称限定蓝图，地图可以通过标签声明自己支持的蓝图。原版提供的标签包括：

```text
73eb818d1aa044c7bb4e61b8f9b37a3c // 允许在安全区建造
f663677b88de40ec80ff36b0c1cae544 // 非单人模式
d7bd989414644b19b3299be0c6fab5f0 // 单人模式
```

### 技能与状态传递

`Skill` 指定所需技能，玩家等级必须不低于 `Skill_Level`。`StateTransfer` 尽可能把**第一个**输入物品的状态传给产物，例如弹数、品质、射击模式或燃油量；开启它后可用 `StateTransfer_DeleteAttachments` 删除输出枪械的全部附件。

## 状态传递

启用 `Blueprint_#_State_Transfer` 后，可以把输入物品的部分状态传给输出物品，适合维修、升级或改装流程。

::: tip
如果蓝图会被物品右键菜单引用，建议为蓝图设置稳定的 `Name`，并让 Action 按名称引用，而不是按索引引用。
:::

> 上游原文：[items/blueprints.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/blueprints.rst)
