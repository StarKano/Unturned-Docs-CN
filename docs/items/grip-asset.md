---
title: 握把配件资源（Grip Asset）
translation:
  source: items/grip-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 握把配件资源（Grip Asset）

Grip 由 `ItemGripAsset` 创建，是可安装到 Ranged Weapon 的 Inventory Item。继承 [CaliberAsset](/items/caliber-asset.html)，而 CaliberAsset 再继承 ItemAsset。

必需字段：

- `GUID`
- `ID`
- `Type Grip`

## 专属属性

- **`Bipod`** Flag：配置后，所有改变 Stat 的属性只在玩家 Prone 时生效。

> 上游原文：[items/grip-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/grip-asset.rst)
