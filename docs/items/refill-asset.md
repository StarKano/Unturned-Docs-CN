---
title: 水容器类（Refill Asset）
translation:
  source: items/refill-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 水容器类（Refill Asset）

Refill / Water Canister 由 `ItemRefillAsset` 创建，可抽取、储存和倒出 Water，也可以直接饮用恢复状态。Water Canister 有四种状态：Empty、Salty、Dirty、Clean。继承 ItemAsset。

必需字段：

- `GUID`
- `Type Refill`
- `Useable Refill`
- `ID`

## 专属属性

- **`ConsumeAudioClip`** Master Bundle Pointer：饮用时播放的 AudioClip。

Clean Water 基础效果：

- `Clean_Food`
- `Clean_Health`
- `Clean_Oxygen`
- `Clean_Stamina`
- `Clean_Virus`：对 Immunity 的影响。
- `Clean_Water`

Dirty Water 默认基于 Clean 值：

- `Dirty_Food` = `Clean_Food × 0.6`
- `Dirty_Health` = `Clean_Health × 0.6`
- `Dirty_Oxygen` = `Clean_Oxygen × 0.6`
- `Dirty_Stamina` = `Clean_Stamina × 0.6`
- `Dirty_Virus` = `Clean_Virus × -0.399999976`
- `Dirty_Water` = `Clean_Water × 0.6`

Salty Water 默认：

- `Salty_Food` = `Clean_Food × 0.25`
- `Salty_Health` = `Clean_Health × 0.25`
- `Salty_Oxygen` = `Clean_Oxygen × 0.25`
- `Salty_Stamina` = `Clean_Stamina × 0.25`
- `Salty_Virus` = `Clean_Virus × -0.75`
- `Salty_Water` = `Clean_Water × 0.25`

::: warning 已弃用
`Water` `byte` 自 3.20.9.0 起弃用，改用 `Clean_Water`。旧字段会被赋值到 `Clean_Water`。
:::

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/refill-asset.html)
