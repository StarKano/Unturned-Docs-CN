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

## 必需配置

所有蓝图都需要：

- `Blueprints`
- `Blueprint_#_Type`
- `Blueprint_#_Supplies`
- `Blueprint_#_Supply_#_ID`
- 至少一个输出

单一输出可以使用 `Blueprint_#_Products` + `Blueprint_#_Product`。多个不同输出使用 `Blueprint_#_Outputs`、`Blueprint_#_Output_#_ID` 和 `Blueprint_#_Output_#_Amount`。

## 常用字段

| 字段 | 说明 |
| --- | --- |
| `Blueprints` | 蓝图总数 |
| `Blueprint_#_Type` | 蓝图类型 |
| `Blueprint_#_Name` | 蓝图名称，可供 Action 按名称引用 |
| `Blueprint_#_Supplies` | 输入材料数量 |
| `Blueprint_#_Supply_#_ID` | 输入物品 Legacy ID |
| `Blueprint_#_Supply_#_Amount` | 输入数量 |
| `Blueprint_#_Supply_#_Critical` | 缺少材料时隐藏蓝图 |
| `Blueprint_#_Supply_#_AllowEmpty` | 是否允许空容器 |
| `Blueprint_#_Supply_#_Prioritization` | 输入使用优先级 |
| `Blueprint_#_Tool` | 所需工具物品 ID |
| `Blueprint_#_Tool_Critical` | 缺少工具时隐藏蓝图 |
| `Blueprint_#_Products` | 单一输出数量 |
| `Blueprint_#_Product` | 单一输出物品 ID |
| `Blueprint_#_Outputs` | 多输出数量 |
| `Blueprint_#_Output_#_ID` | 多输出物品 ID |
| `Blueprint_#_Output_#_Amount` | 多输出数量 |
| `Blueprint_#_Build` | 可关联一个放置/建造资源 |
| `Blueprint_#_Skill` | 所需技能类型 |
| `Blueprint_#_Level` | 所需技能等级 |
| `Blueprint_#_Map` | 限制地图 |
| `Blueprint_#_Searchable` | 是否可在合成菜单搜索 |
| `Blueprint_#_State_Transfer` | 是否向输出传递状态 |
| `Blueprint_#_State_Transfer_Delete_Attachments` | 状态传递时是否删除附件 |

## 输入物品新格式

较新的蓝图可以使用结构化 Input Items，详见[蓝图输入物品](/items/blueprints_inputitem.html)。新格式支持 Asset Pointer / `this`、质量与 Amount 条件、是否消耗、计数方式以及输入优先级。

## 状态传递

启用 `Blueprint_#_State_Transfer` 后，可以把输入物品的部分状态传给输出物品，适合维修、升级或改装流程。

::: tip
如果蓝图会被物品右键菜单引用，建议为蓝图设置稳定的 `Name`，并让 Action 按名称引用，而不是按索引引用。
:::

> 上游原文：[items/blueprints.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/blueprints.rst)
