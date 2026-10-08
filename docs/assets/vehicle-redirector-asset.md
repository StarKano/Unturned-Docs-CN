---
title: 载具重定向器类
translation:
  source: assets/vehicle-redirector-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 载具重定向器类

Vehicle Redirector Asset 用于把旧版“仅颜色不同”的多个载具变体合并到一个可喷漆 Vehicle Asset，同时保持旧存档和旧内容兼容。

在可喷漆载具出现前，经常需要复制整个 Vehicle Asset 只改颜色，这会让物理参数等修改很难在所有变体之间保持同步。

`TargetVehicle` 是必填字段。

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| `TargetVehicle` | Asset Pointer | — |
| `LoadPaintColor` | Color | — |
| `SpawnPaintColor` | Color | — |

## TargetVehicle

尝试加载或生成这个 Redirector 时，实际使用的 Vehicle Asset。

## LoadPaintColor

如果设置，从存档加载载具时覆盖默认随机 Paint Color，用于保留已有存档中的旧颜色。

## SpawnPaintColor

如果设置，生成新载具时覆盖默认随机 Paint Color，可用于在 Spawn Table 中保留旧颜色。

> 上游原文：[assets/vehicle-redirector-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/vehicle-redirector-asset.rst)
