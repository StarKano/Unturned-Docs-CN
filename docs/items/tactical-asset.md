---
title: 战术附件资源（Tactical Asset）
translation:
  source: items/tactical-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 战术附件资源（Tactical Asset）

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
- **`Melee`**：允许使用附件进行近战攻击。默认基础伤害 40；其他近战伤害字段可进一步控制不同实体。
- **`Rangefinder`**：提供可开关测距仪。

## Melee 专用字段

只有设置 `Melee` 时生效：

- `Melee_Range`：攻击距离。
- `Melee_Player_Damage`：对玩家基础伤害。
- `Melee_Player_Leg_Multiplier` / `Arm` / `Spine` / `Skull`：玩家肢体伤害倍率。
- `Melee_Player_Damage_Bleeding`：`Always` / `Default` / `Heal` / `Never`。
- `Melee_Player_Damage_Bones`：`Always` / `Heal` / `None`。
- `Melee_Zombie_Damage` 以及对应 Leg/Arm/Spine/Skull 倍率。
- `Melee_Zombie_Ragdoll_Force_Multiplier`：僵尸布娃娃受力倍率。
- `Melee_Stun_Zombie_Always` / `Melee_Stun_Zombie_Never`。
- `Melee_Animal_Damage` 以及 Leg/Spine/Skull 倍率。

> 上游原文：[items/tactical-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/tactical-asset.rst)
