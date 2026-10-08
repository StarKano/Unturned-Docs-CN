---
title: 战术附件类（Tactical Asset）
translation:
  source: items/tactical-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 战术附件类（Tactical Asset）

Tactical 由 `ItemTacticalAsset` 创建，是可安装到远程武器上的战术附件。它继承 [CaliberAsset](/items/caliber-asset.html)。

## 必需字段

- `GUID`
- `ID`
- `Type Tactical`

## 属性

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Laser` | flag | — |
| `Laser_Color` | color | `#FF0000` |
| `Light` | flag | — |
| `Melee` | flag | — |
| `Rangefinder` | flag | — |

## 功能

- **`Laser`**：提供可开关激光。
- **`Laser_Color`**：覆盖默认红色激光，支持旧版颜色解析。
- **`Light`**：提供可开关手电，并允许使用 PlayerSpotLightConfig 属性。
- **`Melee`**：允许使用附件进行近战攻击。该攻击固定造成 40 点伤害，不能通过下述近战字段调整。
- **`Rangefinder`**：提供可开关测距仪。

## Melee 专用字段

以下字段只有设置 `Melee` 时才适用。官方文档注明，这一节主要照搬武器资源的近战字段，尚待整理；不要据此认为它们都能改变上面提到的固定 40 点附件攻击伤害。

- `Melee_Range`：攻击距离。
- `Melee_Player_Damage`：对玩家基础伤害。
- `Melee_Player_Leg_Multiplier`、`Melee_Player_Arm_Multiplier`、`Melee_Player_Spine_Multiplier`、`Melee_Player_Skull_Multiplier`：玩家肢体伤害倍率。
- `Melee_Player_Damage_Bleeding`：`Always` / `Default` / `Heal` / `Never`。
- `Melee_Player_Damage_Bones`：`Always` / `Heal` / `None`。
- `Melee_Zombie_Damage`、`Melee_Zombie_Leg_Multiplier`、`Melee_Zombie_Arm_Multiplier`、`Melee_Zombie_Spine_Multiplier`、`Melee_Zombie_Skull_Multiplier`：僵尸基础伤害及肢体倍率。
- `Melee_Zombie_Ragdoll_Force_Multiplier`：僵尸布娃娃受力倍率。
- `Melee_Stun_Zombie_Always` / `Melee_Stun_Zombie_Never`。
- `Melee_Animal_Damage`、`Melee_Animal_Leg_Multiplier`、`Melee_Animal_Spine_Multiplier`、`Melee_Animal_Skull_Multiplier`：动物基础伤害及肢体倍率。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/tactical-asset.html)
