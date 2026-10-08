---
title: 合成黑名单类
translation:
  source: assets/crafting-blacklist-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 合成黑名单类

用于禁止特定物品或蓝图参与合成。被禁止的内容不会显示在物品快捷操作菜单和配方列表中。

- **`Type`**：`SDG.Unturned.CraftingBlacklistAsset`

## Input_Items

**`Input_Items`**：Item [Asset Pointer](/data/asset-ptr.html) 数组。任何消耗这些物品的蓝图都不可合成。

```text
Input_Items
[
    // Orange Hoodie
    "GUID" "67c76cdf16024bf68b6e5d14d4c617ab"

    // 单个物品也可以放进 { }
    {
        // Eaglefire
        GUID b03d581a5c1a490f995f8deba57b0f17
    }

    // Jeans
    dab78cc4d66645bfb8169be7c15cf876
    55c69817a31448b685c7f788ec7d2d0c
    bdae9d26ca704d729b2b0f34812d2a36
    67a6ec52e4b24ffd89f75ceee0eb5179
]
```

## Output_Items

**`Output_Items`**：Item Asset Pointer 数组。任何会产出这些物品的蓝图都不可合成。

## Blueprints

**`Blueprints`**：禁止指定单个蓝图。每个条目包含 `Item` Asset Pointer，以及 `BlueprintName` 字符串或 `Blueprint` 索引之一。

例如禁止 Chef Hat 被 Salvage：

```text
Blueprints
[
    {
        Item a6099002318e4d58b8e59d431bcf1b8a
        BlueprintName Salvage
    }
]
```

::: note
条件允许时应优先使用 `BlueprintName` 而不是 `Blueprint` 索引，因为物品的 Blueprints 列表重新排序后索引可能改变。使用名称要求蓝图本身配置 `Name`。
:::

- **`Allow_Core_Blueprints`** `bool`：默认 true。设为 false 时，原版/内置物品的蓝图也不允许使用。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/assets/crafting-blacklist-asset.html)
