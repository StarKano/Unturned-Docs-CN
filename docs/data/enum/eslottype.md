---
title: ESlotType
translation:
  source: data/enum/eslottype.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# ESlotType

`ESlotType` 用于 Display / Character 上的 Item Placement，并决定可装备 Item 能进入哪些 Slot。部分 Asset 只支持其中一部分值。

| 值 | 说明 |
| --- | --- |
| `None` | 不对应任何装备槽；Equippable 可以 Hotkey。 |
| `Primary` | Primary 槽，只能从主武器槽使用。 |
| `Secondary` | Secondary 槽；可以从 Primary 或 Secondary 槽使用。 |
| `Tertiary` | Tertiary 槽，仅 NPC 使用。 |
| `Any` | 任意/全部 Item Slot；既可放槽位，也可 Hotkey。 |

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/enum/eslottype.html)
