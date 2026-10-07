---
title: 武器基础资源（Weapon Asset）
translation:
  source: items/weapon-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 武器基础资源（Weapon Asset）

`ItemWeaponAsset` 是武器资源的基础类。本身的具体行为由子类决定，例如 Gun、Melee 等。它继承 [ItemAsset](/items/introduction.html)。

## 通用属性

- **`Allow_Flesh_Fx`** `bool`：攻击血肉目标时是否产生特殊效果，默认 true。
- **`Durability`** `float32`：每次使用导致品质下降的概率。
- **`Range`** `float32`：最大有效距离。弹道枪械表示弹丸最大飞行距离；近战表示挥击距离；物理 Projectile 爆炸武器则用于爆炸半径相关行为。
- **`Wear`** `uint8`：触发损耗时降低的品质值，默认 1。

## 对玩家伤害

| 字段 | 说明 |
| --- | --- |
| `Bypass_Allowed_To_Damage_Player` | 绕过 PvE、同组友伤等“是否允许伤害玩家”的限制 |
| `Player_Damage` | 对玩家基础伤害 |
| `Player_Leg_Multiplier` | 腿部倍率 |
| `Player_Arm_Multiplier` | 手臂倍率 |
| `Player_Spine_Multiplier` | 躯干倍率 |
| `Player_Skull_Multiplier` | 头部倍率 |
| `Player_Damage_Bleeding` | `Always` / `Default` / `Heal` / `Never` |
| `Player_Damage_Bones` | `Always` / `Heal` / `None` |
| `Player_Damage_Food` | 改变饱食度，正值增加、负值减少 |
| `Player_Damage_Water` | 改变饮水值 |
| `Player_Damage_Virus` | 改变免疫值 |
| `Player_Damage_Hallucination` | 改变幻觉持续时间（秒） |

负面的 Food/Water/Virus 与正的 Hallucination，在安全区、刚复活等禁止伤害的情况下同样会被阻止。

## 僵尸伤害

- `Zombie_Damage`
- `Zombie_Leg_Multiplier`
- `Zombie_Arm_Multiplier`
- `Zombie_Spine_Multiplier`
- `Zombie_Skull_Multiplier`
- `Stun_Zombie_Always`
- `Stun_Zombie_Never`
- `Zombie_Ragdoll_Force_Multiplier`（默认 1）

## 动物伤害

- `Animal_Damage`
- `Animal_Leg_Multiplier`
- `Animal_Spine_Multiplier`
- `Animal_Skull_Multiplier`

## 建筑/对象伤害

- `Barricade_Damage`
- `Structure_Damage`
- `Vehicle_Damage`
- `Resource_Damage`
- `Object_Damage`（默认回退到 Resource_Damage）
- `Invulnerable`：允许伤害对低威力武器免疫的 Object / Structure / Barricade / Vehicle。
- `BladeIDs` + `BladeID_#`：允许伤害具有匹配 BladeID 的资源或对象。
- 旧 `BladeID` 已被多值形式取代。

::: note
爆炸武器通常不使用玩家/僵尸的肢体倍率，并且爆炸会忽略部分低威力 Invulnerable 限制。
:::

> 上游原文：[items/weapon-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/weapon-asset.rst)
