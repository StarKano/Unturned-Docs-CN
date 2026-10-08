---
title: 动物类（Animal Asset）
translation:
  source: assets/animal-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 动物类（Animal Asset）

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Animal`。
- **`ID`** `uint16`：必须唯一。

## 动物属性

- **`Health`** `uint16`：总生命值。
- **`Regen`** `float`：生命恢复间隔（秒）。每经过一次该时间恢复 1 点生命，默认 10 秒。
- **`Damage`** `byte`：每次攻击对玩家造成的伤害。
- **`Behaviour`** `enum`（`Defense`、`Offense`、`Ignore`）：AI 行为。Defense 被警觉后逃跑；Offense 被警觉后攻击；Ignore 仅在受到攻击后逃跑。
- **`Speed_Run`** `float`：奔跑速度，m/s。
- **`Speed_Walk`** `float`：行走速度，m/s。
- **`Horizontal_Attack_Range`** `float`：水平攻击最大距离，默认 2.25 米。
- **`Horizontal_Vehicle_Attack_Range`** `float`：目标在载具内时的水平攻击距离，默认 4.4。
- **`Vertical_Attack_Range`** `float`：垂直攻击最大距离，默认 2 米。
- **`Attack_Interval`** `float`：两次攻击之间的最短秒数，默认 1 秒。若攻击动画时长更长，则以攻击时长为准。
- **`Roars`** `int`：Unity 中 Roar 音效数量；动物攻击时播放。
- **`Panics`** `int`：Unity 中 Panic 音效数量；动物受惊时播放。
- **`Should_Prevent_Move_During_Startle`** `bool`：为 true 时，受惊动画结束前动物不会开始移动。默认 false。
- **`Attack_Anim_Variants`** `int`：攻击动画变体数，默认 1。
- **`Eat_Anim_Variants`** `int`：进食动画变体数，默认 1。
- **`Glance_Anim_Variants`** `int`：观察动画变体数，默认 2。
- **`Startle_Anim_Variants`** `int`：受惊动画变体数，默认 1。
- **`Should_Play_Anims_On_Dedicated_Server`** `bool`：如果服务器端逻辑依赖攻击动画中的复杂 Trigger，可设为 true。默认 false。

## 掉落

- **`Reward_ID`** `uint16`：奖励使用的物品 Spawn Table ID。
- **`Reward_XP`** `uint`：奖励经验值。
- **`Reward_Min`** `byte`：最少掉落数量，默认 3。
- **`Reward_Max`** `byte`：最多掉落数量，默认 4。
- **`Meat`** `uint16`：动物死亡时生成的物品 ID，已弃用，改用 `Reward_ID`。
- **`Pelt`** `uint16`：动物死亡时生成的物品 ID，已弃用，改用 `Reward_ID`。

## 本地化

- **`Name`** `string`：UI 中显示的动物名称。

> 上游原文：[assets/animal-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/animal-asset.rst)
