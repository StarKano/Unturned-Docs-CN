---
title: 钥匙类（Key Asset）
translation:
  source: items/key-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 钥匙类（Key Asset）

Key 由 `ItemKeyAsset` 创建，主要用于 Steam Economy，而不是普通游戏内容。因此 Mod 作者无法实际使用它的大部分特殊行为。

继承 ItemAsset：

- `GUID`
- `Type Key`
- `ID`

## 专属属性

- **`Exchange_With_Target_Item`** Flag：在 UI 中加入“对另一个 Steam Economy Item 使用此 Economy Item”的元素。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/key-asset.html)
