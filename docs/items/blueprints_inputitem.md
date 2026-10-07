---
title: 蓝图输入物品
translation:
  source: items/blueprints_inputitem.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 蓝图输入物品

本页说明[合成蓝图](/items/blueprints.html)中一个所需材料（Input Item）的配置。

## 简写格式

简单情况可以直接写一行：

~~~text
{ID}
{ID} x {Amount}
this
this x {Amount}
~~~

例如：

~~~text
78fefdd23def4ab6ac8301adfcc3b2d4
13
13 x 2
this
this x 2
~~~

## 字典格式

复杂配置使用字典：

~~~text
InputItems
[
    {
        // 第一个输入物品
    }
    {
        // 第二个输入物品
    }
]
~~~

## 属性

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Amount` | uint8 | `1` |
| `AllowEmpty` | bool | `false` |
| `AllowFull` | bool | `true` |
| `AllowMaxQuality` | bool | `true` |
| `CountEmptyAsOne` | bool | `false` |
| `CountingMethod` | ECraftingInputCountingMethod | 见说明 |
| `Critical` | bool | `false` |
| `Delete` | bool | `true` |
| `ID` | Asset Pointer | — |
| `Prioritization` | ECraftingInputPrioritization | 见说明 |

### Prioritization

- `LowestAmount`：优先使用 Amount 最低的。
- `HighestAmount`：优先使用 Amount 最高的。
- `LowestQuality`：优先使用品质最低的。
- `HighestQuality`：优先使用品质最高的。

### CountingMethod

- `TotalItems`：按物品个数统计，不考虑 Amount。
- `TotalAmount`：累计每件物品的 Amount，可配合 `CountEmptyAsOne`。

## 说明

- `Amount`：蓝图需要的数量，最小为 1。
- `AllowEmpty`：是否允许 Amount=0 的物品参与匹配；`CountEmptyAsOne=true` 时默认会启用。
- `AllowFull`：是否允许已经达到最大 Amount 的物品参与。
- `AllowMaxQuality`：是否允许 100% 品质物品参与，维修类蓝图常用。
- `CountEmptyAsOne`：把 Amount=0 的物品按 1 计算；原版用于拆解空弹匣。
- `Critical`：缺少该输入物品时，蓝图是否直接从合成菜单隐藏。
- `Delete`：合成时是否消耗该物品。设为 `false` 时，它会在合成界面显示为 Tool，例如锯子。
- `ID`：物品 Asset Pointer，也可以写 `this` 引用拥有该蓝图的资源自身。
- `Prioritization`：控制有多个候选物品时先使用哪一个。

> 上游原文：[items/blueprints_inputitem.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/blueprints_inputitem.rst)
