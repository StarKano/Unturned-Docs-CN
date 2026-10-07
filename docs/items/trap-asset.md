---
title: 陷阱资源（Trap Asset）
translation:
  source: items/trap-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 陷阱资源（Trap Asset）

Trap 由 `ItemTrapAsset` 创建，是可放置的伤害来源。继承 [BarricadeAsset](/items/barricade-asset.html)。

必需字段：

- `GUID`
- `Type Trap`
- `Useable Barricade`
- `Build Spike` 或 `Wire`
- `ID`

## 专属属性

- **`Animal_Damage`** `float`：AoE 对 Animal 伤害。
- **`Barricade_Damage`** `float`：AoE 对 Barricade 伤害。
- **`Broken`** Flag：触发玩家获得 Broken Bones。
- **`Damage_Tires`** Flag：Vehicle 压过时可扎爆 Tire。
- **`Explosion_Launch_Speed`** `float`：AoE 把玩家抛出的速度（m/s），默认 `Player_Damage × 0.1`。
- **`Explosion2`** `uint16` / GUID：触发时播放的 Effect。
- **`Explosive`** Flag：触发时有 AoE Explosion。
- **`Object_Damage`** `float`：AoE 对 Object 伤害，默认等于 `Resource_Damage`。
- **`Player_Damage`** `float`：AoE 对 Player 伤害。
- **`Range2`** `float`：伤害半径（米）。
- **`Requires_Power`** `bool`：是否需要 Generator 供电，默认 false。Unity 可选包含名为 `Powered` 的 GameObject，通电时启用、断电时禁用。
- **`Resource_Damage`** `float`
- **`Structure_Damage`** `float`
- **`Trap_Cooldown`** `float`：触发后再次激活前的秒数。
- **`Trap_Setup_Delay`** `float`：放置后开始工作的延迟，默认 0.25 秒。
- **`Vehicle_Damage`** `float`。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://unturned.wiki.gg/wiki/Broken_Bones>

> 上游原文：[items/trap-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/trap-asset.rst)
