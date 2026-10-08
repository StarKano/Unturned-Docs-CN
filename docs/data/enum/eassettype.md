---
title: EAssetType
translation:
  source: data/enum/eassettype.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# EAssetType

`EAssetType` 用作 Legacy ID 的作用域。每个 Legacy ID 只需要在同一个 EAssetType 内唯一，因此不同类型的 Asset 可以共用同一个 Legacy ID。该机制主要存在于旧代码和向后兼容逻辑中。

| 值 | 索引 | 说明 |
| --- | ---: | --- |
| `None` | 0 | 不适用具体 Asset 类型。 |
| `Item` | 1 | 物品。 |
| `Effect` | 2 | 特效。 |
| `Object` | 3 | 对象（包括 NPC Character）。 |
| `Resource` | 4 | Resource。 |
| `Vehicle` | 5 | 载具。 |
| `Animal` | 6 | 动物。 |
| `Mythic` | 7 | Mythical 特效。 |
| `Skin` | 8 | Skin。 |
| `Spawn` | 9 | Spawn Table。 |
| `NPC` | 10 | NPC 相关 Asset，例如 Quest、Vendor、Dialogue。 |

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/enum/eassettype.html)
