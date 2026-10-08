---
title: 口径基础类（Caliber Asset）
translation:
  source: items/caliber-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 口径基础类（Caliber Asset）

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
- `Calibers` + `Caliber_#`：定义附件兼容口径的旧版 ID 列表。`Calibers` 应等于 `Caliber_#` 项数；未设置的 `Caliber_#` 默认 `0`。当 `Magazine_Calibers` 不大于 `0` 时，默认改用 `Caliber` 的值。
- `Damage`：自 3.27.0.0 起弃用，仅为兼容旧资源保留。若同时设置了 `Damage` 和 `Ballistic_Damage_Multiplier`，后者优先。
- `Destroy_Attachment_Colliders=false`：枪械销毁附件 Collider 时保留它们。官方不推荐，复杂 Collider 常导致性能问题。
- `Firerate`：从枪械 `Firerate` 中减去该值；减得越多，射击越频繁。
- `Instantiated_Attachment_Name_Override`：覆盖附件实例 GameObject 名称，默认使用 `GUID`，可用于复用 Unity Animation。例如 GUID 为 `dbfb1d0d11ca438e9dffb95f76e61274` 的弹匣默认生成在 `(Gun)/Magazine/dbfb1d0d11ca438e9dffb95f76e61274`；设为 `Example` 后变为 `(Gun)/Magazine/Example`。
- `Invulnerable`：允许枪械伤害标记为 Invulnerable 的实体。
- `Paintable`：附件可受支持附件换肤的 Steam Economy Skin 影响。
- `Recoil_X` / `Recoil_Y`：水平/垂直后坐力倍率。
- `Shake`：镜头震动倍率。
- `Spread`：子弹散布倍率。
- `Sway`：瞄准镜摇晃倍率。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/caliber-asset.html)
