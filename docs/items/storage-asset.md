---
title: 物品储物资源（Storage Asset）
translation:
  source: items/storage-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 物品储物资源（Storage Asset）

Storage 由 `ItemStorageAsset` 创建，是用于存放 Item 的可放置容器。继承 BarricadeAsset。

- `GUID`
- `Type Storage`
- `Useable Barricade`
- `Build Storage` 或 `Storage_Wall`
- `ID`

## 专属属性

- **`Can_Players_Open`** `bool`：玩家能否交互打开，默认 true。预放 Sentry 可设 false 防止偷枪。
- **`Delete_Contained_Items_On_Destroy`** `bool`：true 时摧毁后直接 Despawn 内部 Item，而不是掉落。默认 false。
- **`Display`** Flag：显示 Storage 中第一件 Item。
- **`Should_Close_When_Outside_Range`** `bool`：玩家离开交互范围后是否自动关闭，默认 false。
- **`Storage_X`** `byte`：Column 数，默认 0。
- **`Storage_Y`** `byte`：Row 数，默认 0。
- **`Default_Contained_Items`**：首次生成时自动创建的 Item List。每项：
  - `Asset`：Item 或 Spawn Table 的 [Asset Pointer](/data/asset-ptr.html)。
  - `Amount` `int`：授予次数，默认 1。
  - `Origin` [EItemOrigin](/data/enum/eitemorigin.html)：初始状态，默认 `World`。

> 上游原文：[items/storage-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/storage-asset.rst)
