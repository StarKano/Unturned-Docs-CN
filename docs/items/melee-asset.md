---
title: 近战武器资源（Melee Asset）
translation:
  source: items/melee-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 近战武器资源（Melee Asset）

Melee Weapon 由 `ItemMeleeAsset` 创建，可作为伤害来源，并且始终显示 Quality。继承 [WeaponAsset](/items/weapon-asset.html)。

必需/推荐字段：

- `GUID`
- `Type Melee`
- `Useable Melee`
- `Slot`：[ESlotType](/data/enum/eslottype.html)，可选 `None`、`Primary`、`Secondary`、`Any`。绝大多数近战武器（包括原版物品）使用 `Secondary`，因此既可放主武器槽，也可放副武器槽。
- `ID`

## 专属属性

- **`Alert_Radius`** `float`：攻击时惊动 Zombie / Animal 的半径，单位米，默认 8。
- **`AttackAudioClip`** [Master Bundle Pointer](/data/master-bundle-ptr.html)：攻击时播放的 AudioClip。
- **`ImpactAudioDef`** Master Bundle Pointer：命中时播放的 AudioClip 或 OneShotAudioDefinition。
- **`Light`** Flag：提供可开关 Flashlight，并允许使用 [PlayerSpotLightConfig](/data/struct/playerspotlightconfig.html) 字段。
- **`Repair`** Flag：可维修 Barricade、Structure 和 Vehicle。
- **`Repeated`** Flag：禁用 Strong Attack，Weak Attack 会持续造成伤害。
- **`Stamina`** `byte`：每次攻击消耗的 Stamina，默认 0。
- **`Strength`** `float`：Strong Attack 的伤害倍率。
- **`Strong`** `float`：Strong Attack Animation Length 的伤害判定时机倍率，默认 0.33。
- **`Weak`** `float`：Weak Attack Animation Length 的伤害判定时机倍率，默认 0.5。

## NPC Rewards

Weak / Strong Attack 都可授予 [Rewards](/npcs/rewards.html)：

- `Weak_Attack_Quest_Rewards #`，字段前缀 `Weak_Attack_Quest_Reward_`。
- `Strong_Attack_Quest_Rewards #`，字段前缀 `Strong_Attack_Quest_Reward_`。

> 上游原文：[items/melee-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/melee-asset.rst)
