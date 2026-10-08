---
title: 货币类（Currency Asset）
translation:
  source: npcs/currency-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 货币类（Currency Asset）

一组拥有不同数值的 Item 可以关联为一个 **Currency Asset**。

NPC 可以自动在这些 Item 之间换算，Vendor Menu 也能显示关联 Currency 信息。它不只适合现实货币，也适合“以弹药作为交换媒介”等 Barter System。

![Vendor 货币显示示例](/img/VendorCurrency.jpg)

*Vendor 菜单中使用 Currency Asset 的示例。*

## Asset 设置

官方示例：`Bundles/Items/Supplies/CanadianCurrency.asset`。

- **`Type`** `string`：`SDG.Unturned.ItemCurrencyAsset`。
- **`ValueFormat`** `string`：显示数字的 Format String。例如加拿大货币格式为 `${0:N0} CAD`。
- **`DefaultConditionFormat`** `string`：NPC Currency Condition 未指定 Format 时使用。`{0}` 是玩家 Inventory 当前总值，`{1}` 是 Condition Target。例如 `${0:N0}/{1:N0} CAD`。
- **`Entries`**：Currency Item 数组。每项有 `Item` GUID 和 `Value` int；可选 `Is_Visible_In_Vendor_Menu false` 隐藏该面额。

$10 / $20 示例：

```text
{
    "Item"
    {
        "GUID" "b6b87dfad5f342dc91bbb2de950f56ee"
    }
    "Value" "10"
}
{
    "Item"
    {
        "GUID" "3b9847bb328d445495b64be9e5ea9400"
    }
    "Value" "20"
}
```

Vendor 的 **`Currency`** 填该 Asset GUID 即可关联。Vendor 会按 Value 从低到高显示 Currency Item。

## NPC Logic

[Conditions](/npcs/conditions.html) 的 `Currency` 类型可以要求玩家 Inventory 中拥有指定总额。

[Rewards](/npcs/rewards.html) 的 `Currency` 类型可以直接授予指定金额。

## 测试

内置 `give` 命令接受 Currency GUID 代替 Item ID。

例如给本地玩家 1,000 CAD：

```text
/give 5150ca8f765d4a68bfe54912146da410/1000
```

> 上游原文：[npcs/currency-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/npcs/currency-asset.rst)
