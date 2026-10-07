---
title: Economy 箱子资源（Box Asset）
translation:
  source: items/box-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Economy 箱子资源（Box Asset）

Box 由 `ItemBoxAsset` 创建，用于显示 Steam Economy Integration 的特定信息。该类型对普通 Mod 作者基本没有用途，文档仅为完整性保留。继承 ItemAsset。

- `GUID`
- `Type Box`
- `ID`

## 专属属性

- **`Generate`** `int32`：打开 Box 后授予的 Itemdefid，用于 Unbox 后显示正确 UI。
- **`Destroy`** `int32`：打开 Box 时移除的 Itemdefid。
- **`Drops`** `int32`：Box 内 Item 总数，用于显示对应数量 UI 元素。
- **`Drop_#`** `int32`：Box 内某个 Item 的 Itemdefid。
- **`Item_Origin`** enum（`Unbox`、`Unwrap`）：Unbox/Unwrap Menu Button 使用的 Localization Key。
- **`Probability_Model`** enum（`Equalized`、`Original`）：控制是否显示与 Unbox Probability 相关 UI。
- **`Contains_Bonus_Items`** `bool`：true 时增加 Bonus Item UI。

> 上游原文：[items/box-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/box-asset.rst)
