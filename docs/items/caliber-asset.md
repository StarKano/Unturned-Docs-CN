---
title: 口径基础资源（Caliber Asset）
translation:
  source: items/caliber-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 口径基础资源（Caliber Asset）

`ItemCaliberAsset` 是枪械附件等资源的基础类，本身不能单独作为可用物品。它继承 [ItemAsset](/items/introduction.html)。

## 属性

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Aiming_Movement_Speed_Multiplier` | float32 | `1` |
| `Aiming_Recoil_Multiplier` | float32 | `1` |
| `Aim_Duration_Multiplier` | float32 | `1` |
| `Ballistic_Damage_Multiplier` | float32 | 见说明 |
| `Ballistic_Drop` | float32 | `1` |
| `Calibers` | uint8 | `0` |
| `Caliber_#` | uint16 | `0` |
| `Damage` | float32 | 已弃用 |
| `Destroy_Attachment_Colliders` | bool | `true` |
| `Firerate` | uint8 | `0` |
| `Instantiated_Attachment_Name_Override` | string | 见说明 |
| `Invulnerable` | bool | `false` |
| `Paintable` | flag | — |
| `Recoil_X` | float32 | `1` |
| `Recoil_Y` | float32 | `1` |
| `Shake` | float32 | `1` |
| `Spread` | float32 | `1` |
| `Sway` | float32 | `1` |

## 说明

- `Aiming_Movement_Speed_Multiplier`：瞄准时移动速度倍率。
- `Aiming_Recoil_Multiplier`：瞄准时后坐力倍率。
- `Aim_Duration_Multiplier`：乘到枪械 `Aim_In_Duration`。
- `Ballistic_Damage_Multiplier`：伤害倍率；未设置时回退到旧 `Damage`，再回退为 1。
- `Ballistic_Drop`：飞行中重力加速度倍率。
- `Calibers` + `Caliber_#`：定义附件兼容口径 Legacy ID 列表。
- `Damage`：自 3.27.0.0 起弃用，请使用 `Ballistic_Damage_Multiplier`。
- `Destroy_Attachment_Colliders=false`：枪械销毁附件 Collider 时保留它们。官方不推荐，复杂 Collider 常导致性能问题。
- `Firerate`：从枪械 `Firerate` 中减去该值；减得越多，射击越频繁。
- `Instantiated_Attachment_Name_Override`：覆盖附件实例 GameObject 名称，可用于复用 Unity Animation。
- `Invulnerable`：允许枪械伤害标记为 Invulnerable 的实体。
- `Paintable`：附件可受支持附件换肤的 Steam Economy Skin 影响。
- `Recoil_X` / `Recoil_Y`：水平/垂直后坐力倍率。
- `Shake`：镜头震动倍率。
- `Spread`：子弹散布倍率。
- `Sway`：瞄准镜摇晃倍率。

> 上游原文：[items/caliber-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/caliber-asset.rst)
