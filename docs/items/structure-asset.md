---
title: 结构资源（Structure Asset）
translation:
  source: items/structure-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 结构资源（Structure Asset）

Structure 由 `ItemStructureAsset` 创建，可由玩家放置。部分结构件必须依附其他结构件才能放置。它继承 [PlaceableAsset](/items/placeable-asset.html)。

## 基础字段

- `GUID`
- `Type Structure`
- `Useable Structure`
- `Construct`
- `ID`

`Construct` 决定结构如何放置以及其他结构如何吸附。可用值：

`Floor`、`Floor_Poly`、`Pillar`、`Post`、`Rampart`、`Roof`、`Roof_Poly`、`Wall`。

## 属性

| 字段 | 默认值 / 说明 |
| --- | --- |
| `Armor_Tier` | Low / High；名称含 Metal 或 Brick 时默认 High |
| `Can_Be_Damaged` | `true` |
| `Can_Zombies_Target` | `true` |
| `Eligible_For_Pooling` | `true` |
| `Explosion` | 摧毁时播放的 Effect |
| `Foliage_Cut_Radius` | `6` 米 |
| `Has_Clip_Prefab` | `true` |
| `Health` | `0` |
| `PlacementAudioClip` | 放置音效 |
| `PlacementPreviewPrefab` | 放置预览模型 |
| `Proof_Explosion` | 免疫范围爆炸伤害 |
| `Range` | 最大放置距离 |
| `Salvage_Duration_Multiplier` | `1` |
| `Terrain_Test_Height` | `10` 米 |
| `Unpickupable` | 禁止拾取 |
| `Unrepairable` | 禁止维修 |
| `Unsalvageable` | 受损时拆解不返部分资源 |
| `Unsaveable` | 不保存 |
| `Vulnerable` | 可被低威力武器伤害 |
| `Requires_Pillars` | `true`，墙体放置是否必须两根 Pillar |

## Armor Tier

默认玩法配置下：

- Low：承受 100% 伤害。
- High：承受 50% 伤害。

具体倍率可由服务器 Gameplay Config 修改。

> 上游原文：[items/structure-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/structure-asset.rst)
