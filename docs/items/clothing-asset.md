---
title: 服装基础类（Clothing Asset）
translation:
  source: items/clothing-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 服装基础类（Clothing Asset）

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

- `Armor`：被服装覆盖的身体部位受到伤害时的倍率；覆盖范围取决于具体子类。
- `Armor_Explosion`：受到范围爆炸伤害时的倍率，默认等于 `Armor`。
- `Beard_Visible` / `Hair_Visible`：是否显示胡须/头发；其他游戏条件仍可能将其隐藏。
- `Destroy_Clothing_Colliders=false`：穿戴后保留服装 Collider，适用于少数带命中盒的 Mod。
- `Falling_Damage_Multiplier`：坠落伤害倍率。
- `Mirror_Left_Handed_Model`：左手模式下镜像 3D 服装（背包、背心、面具、眼镜、帽子）。
- `Movement_Speed_Multiplier`：移动速度倍率。
- `Prevents_Falling_Broken_Bones`：防止跌落导致骨折。
- `Priority_Over_Cosmetic`：覆盖“饰品显示在服装之上”的默认优先级。多数服装默认让饰品显示在上层；带 `Vision` 的眼镜则默认让服装优先。此设置仅影响 PvP 服务器。
- `Proof_Fire`：衬衫和裤子同时防火时，玩家免疫火焰伤害。
- `Proof_Radiation`：单独佩戴防辐射面具即可抵御普通 Deadzone；防辐射裤子、衬衫、面具同时穿戴可抵御要求全套装备的 Deadzone。保护仅在面具品质高于 0% 时有效；面具品质会在 Deadzone 中逐步消耗，可用[滤芯](/items/filter-asset.html)补充。
- `Proof_Water`：防水眼镜可去除水下模糊；同时穿戴防水眼镜与背包可显著降低水下氧气消耗。该字段对其他服装类型无效。
- `Skin_Override`：指定一个 Renderer 使用玩家皮肤材质，例如饰品 [Conflicting Conscience](https://unturned.wiki.gg/wiki/Conflicting_Conscience) 在肩上显示玩家的缩小模型。
- `Visible_On_Ragdoll`：尸体布娃娃是否显示该服装。
- `WearAudio`：穿戴时播放的 AudioClip 或 OneShotAudioDefinition。背包和背心默认使用 `Sounds/Zipper.mp3`，其他服装默认使用 `Sounds/Sleeve.mp3`。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://unturned.wiki.gg/wiki/Conflicting_Conscience>

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/clothing-asset.html)
