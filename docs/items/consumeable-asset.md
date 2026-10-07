---
title: 消耗品基类（Consumeable Asset）
translation:
  source: items/consumeable-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 消耗品基类（Consumeable Asset）

Consumable 使用后会被玩家消耗，并直接改变 Food、Health 等状态。继承 [WeaponAsset](/items/weapon-asset.html)。

## 属性

- **`Aid`** Flag：允许通过 Secondary Action 对其他玩家使用。
- **`Bleeding`** Flag：移除 Bleeding。已弃用，改用 `Bleeding_Modifier`。
- **`Bleeding_Modifier`** enum：`Cut`、`Heal`、`None`，决定对 Bleeding 的影响。
- **`Broken`** Flag：移除 Broken Bones。已弃用，改用 `Bones_Modifier`。
- **`Bones_Modifier`** enum：`Break`、`Heal`、`None`。
- **`ConsumeAudioClip`** Master Bundle Pointer：使用时播放 AudioClip。
- **`Disinfectant`** `byte`：恢复 Immunity。
- **`Energy`** `byte`：恢复 Stamina。
- **`Experience`** `int`：增加或减少 Experience。
- **`Explosion`** `uint16` / GUID：消费时播放 Explosion Effect。
- **`Food`** `byte`：恢复 Food。如果 Food 恢复量大于 Water，则 Food 会约束 Water。
- **`Health`** `byte`：恢复 Health。
- **`Item_Reward_Spawn_ID`** `uint16`：消费后从指定 Item Spawn Table 生成 Item。
- **`Min_Item_Rewards`** `int`：生成最少数量。
- **`Max_Item_Rewards`** `int`：生成最多数量。
- **`Oxygen`** `sbyte`：恢复或减少 Oxygen。
- **`Randomize_Consume_Audio_Pitch`** `bool`：false 时 `ConsumeAudioClip` 始终 Pitch=1.0，默认 true。
- **`Should_Delete_After_Use`** `bool`：使用后是否删除 Item，默认 true。
- **`Virus`** `byte`：减少 Immunity。
- **`Vision`** `uint`：Hallucination 持续秒数。连续使用不会叠加，只把计时器重置为较长值。
- **`Warmth`** `uint`：增加 Warmth。
- **`Water`** `byte`：恢复 Water。如果 Water 恢复量小于 Food，则 Water 会受 Food 约束。

## Rewards

Consumable 可使用 [NPC Rewards](/npcs/rewards.html)。常见用途包括：

- 使用后重新给玩家一个 Item，实现有限次数的 Consumable。
- Quest 要求玩家消费某个物品。

字段前缀为 `Quest_`，例如 `Quest_Rewards 1`。

> 上游原文：[items/consumeable-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/consumeable-asset.rst)
