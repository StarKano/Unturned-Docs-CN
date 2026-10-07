---
title: 服装基础资源（Clothing Asset）
translation:
  source: items/clothing-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 服装基础资源（Clothing Asset）

`ItemClothingAsset` 是服装类资源的基础类，本身不能直接使用。继承它的物品可被玩家和僵尸穿戴。它继承 [ItemAsset](/items/introduction.html)，服装始终会显示品质值。

## 属性

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Armor` | float32 | `1` |
| `Armor_Explosion` | float32 | 默认等于 Armor |
| `Beard_Visible` | bool | `true` |
| `Destroy_Clothing_Colliders` | bool | `true` |
| `Falling_Damage_Multiplier` | float32 | `1` |
| `Hair_Visible` | bool | `true` |
| `Mirror_Left_Handed_Model` | bool | `true` |
| `Movement_Speed_Multiplier` | float32 | `1` |
| `Prevents_Falling_Broken_Bones` | bool | `false` |
| `Priority_Over_Cosmetic` | bool | 见说明 |
| `Proof_Fire` | flag | — |
| `Proof_Radiation` | flag | — |
| `Proof_Water` | flag | — |
| `Skin_Override` | string | — |
| `Visible_On_Ragdoll` | bool | `true` |
| `WearAudio` | Master Bundle Pointer | 见说明 |

## 说明

- `Armor`：覆盖身体部位受到伤害时的倍率。
- `Armor_Explosion`：范围爆炸伤害倍率。
- `Beard_Visible` / `Hair_Visible`：是否显示胡须/头发。
- `Destroy_Clothing_Colliders=false`：穿戴后保留服装 Collider，适用于少数带命中盒的 Mod。
- `Falling_Damage_Multiplier`：坠落伤害倍率。
- `Mirror_Left_Handed_Model`：左手模式下镜像 3D 服装（背包、背心、面具、眼镜、帽子）。
- `Movement_Speed_Multiplier`：移动速度倍率。
- `Prevents_Falling_Broken_Bones`：防止跌落导致骨折。
- `Priority_Over_Cosmetic`：覆盖“饰品显示在服装之上”的默认优先级；只对 PvP 服务器有影响。
- `Proof_Fire`：衬衫和裤子同时防火时，玩家免疫火焰伤害。
- `Proof_Radiation`：防辐射服装组合可抵御 Deadzone；面具品质会在 Deadzone 中逐步消耗。
- `Proof_Water`：眼镜可去除水下模糊；防水眼镜+背包可显著降低水下氧气消耗。
- `Skin_Override`：指定一个 Renderer 使用玩家皮肤材质。
- `Visible_On_Ragdoll`：尸体布娃娃是否显示该服装。
- `WearAudio`：穿戴音效。背包和背心默认使用 Zipper，其余通常使用 Sleeve。

> 上游原文：[items/clothing-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/clothing-asset.rst)
