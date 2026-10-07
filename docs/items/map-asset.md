---
title: 地图与指南针资源（Map Asset）
translation:
  source: items/map-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 地图与指南针资源（Map Asset）

Map / Compass 由 `ItemMapAsset` 创建。只要位于玩家 Inventory 中就提供额外 UI 信息；不能手持或装备。继承 ItemAsset。

- `GUID`
- `Type Map` 或 `Compass`
- `ID`

## 专属属性

- **`Enables_Map`** Flag：启用 Satellite Map Display。
- **`Enables_Chart`** Flag：启用 Chart Map Display。
- **`Enables_Compass`** Flag：启用 Compass HUD，并允许在地图上设置可见 Waypoint。

> 上游原文：[items/map-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/map-asset.rst)
