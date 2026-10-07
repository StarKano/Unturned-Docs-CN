---
title: 物品上下文操作（Actions）
translation:
  source: items/actions.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 物品上下文操作（Actions）

玩家在背包中右键物品时会显示上下文操作。部分操作由游戏自动生成，同时也可以给任意物品添加额外操作。

当前自定义操作主要用于关联[合成蓝图](/items/blueprints.html)。

## 字段

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Actions` | uint8 | `0` |
| `Action_#_Type` | EActionType | — |
| `Action_#_Source` | uint16 | 当前物品 |
| `Action_#_Text` | string | — |
| `Action_#_Tooltip` | string | — |
| `Action_#_Key` | string | — |
| `Action_#_Blueprints` | uint8 | `0` |
| `Action_#_Blueprint_#_Index` | uint8 | `0` |
| `Action_#_Blueprint_#_Name` | string | `""` |
| `Action_#_Blueprint_#_Link` | flag | — |

### EActionType

目前只有：

- `Blueprint`：操作关联一个合成蓝图。

## 字段说明

- **`Actions`**：上下文操作总数。
- **`Action_#_Type`**：要执行的操作类型，目前只有 `Blueprint`。
- **`Action_#_Source`**：从哪个物品 ID 获取操作；默认是当前物品。
- **`Action_#_Text`**：按钮文字。若物品本地化文件中存在同名键，则优先显示本地化文本。
- **`Action_#_Tooltip`**：按钮提示文本，同样支持从物品本地化文件读取。
- **`Action_#_Key`**：使用游戏预置翻译键代替自定义文字和提示。可用值包括 `Attachments`、`Craft_Bandage`、`Craft_Dressing`、`Craft_Rag`、`Craft_Seed`、`Dequip`、`Drop`、`Equip`、`Pickup`、`Refill`、`Repair`、`Salvage`、`Stack`、`Store`、`Take`、`Unstack`。该字段会覆盖自定义 Text/Tooltip；完整的键及本地化文本见 `PlayerDashboardInventory.dat`。
- **`Action_#_Blueprints`**：该操作关联的蓝图数量。
- **`Action_#_Blueprint_#_Index`**：蓝图索引。官方更推荐使用 Name，因为重排蓝图后索引可能变化。
- **`Action_#_Blueprint_#_Name`**：蓝图名称，需要对应蓝图配置 `Name`。
- **`Action_#_Blueprint_#_Link`**：不立即合成，而是跳转到合成菜单里的对应蓝图。

## 自动生成的操作

某些蓝图会自动为物品生成上下文操作：

- 只有一个 Supply，并且 Supply ID 是物品自身：生成 `Salvage`。
- 蓝图类型是 `Repair`：生成 `Repair`。
- 蓝图类型是 `Refill`：生成 `Refill`。

> 上游原文：[items/actions.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/actions.rst)
