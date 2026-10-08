---
title: 装备基础类（Gear Asset）
translation:
  source: items/gear-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 装备基础类（Gear Asset）

`ItemGearAsset` 是帽子、面具、眼镜等装备类服装的基础类，本身不可直接使用。它继承 [Clothing Asset](/items/clothing-asset.html)。

## 属性

| 字段 | 类型 |
| --- | --- |
| `Beard` | flag |
| `Beard_Override` | string |
| `Beard_Override_NonGoldColor` | Color |
| `Hair` | flag |
| `Hair_Override` | string |
| `Hair_Override_NonGoldColor` | Color |

## 说明

- **`Beard`**：若不包含该 flag，父类 `Beard_Visible` 会被设为 false。希望角色胡须可见时必须加入。
- **`Hair`**：同理，决定头发是否保持可见。
- **`Beard_Override`**：查找同名子 Mesh Renderer，并把其 Material 替换为角色胡须材质。适合“完全包住胡须但仍希望沿用玩家胡须颜色”的饰品。
- **`Hair_Override`**：与 Beard Override 类似，但使用角色头发材质。
- **`Beard_Override_NonGoldColor`** / **`Hair_Override_NonGoldColor`**：未拥有 Gold Upgrade 的玩家使用的默认颜色，也用于饰品预览。

::: note
Gear 类会改变父类 `Beard_Visible` 和 `Hair_Visible` 的默认行为，应优先使用本页的 `Beard` / `Hair`。
:::

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/gear-asset.html)
