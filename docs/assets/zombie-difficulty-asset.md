---
title: 僵尸难度资源
translation:
  source: assets/zombie-difficulty-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 僵尸难度资源

用于覆盖某个 Navmesh 内僵尸的难度设置。官方 `ZombieDifficulty.asset` 可在：

```text
...\Steam\steamapps\common\Unturned\Bundles\Assets\Zombie_Difficulty
```

找到。

- **`Type`**：`SDG.Unturned.ZombieDifficultyAsset`。
- **`Overrides_Spawn_Chance`** `bool`：是否用本 Asset 的数值覆盖该 Navmesh 僵尸生成概率。若只想调整眩晕阈值等非生成属性，可设为 false。默认 true。
- **`Mega_Stun_Threshold`** `int`：Mega Zombie 被单次伤害打出 Stun 的阈值。
- **`Normal_Stun_Threshold`** `int`：普通 Zombie Stun 阈值。
- **`Allow_Horde_Beacon`** `bool`：是否允许在该 Navmesh 放 Horde Beacon，默认 true。
- **`Speciality_Health_Override_Mode`**：`None`、`MultiplyEditorHealth`、`MultiplyDefaultHealth`、`Replace`，默认 `None`。
  - `None`：不覆盖生命。
  - `MultiplyEditorHealth`：各 Speciality 数值乘以关卡编辑器配置的生命。
  - `MultiplyDefaultHealth`：乘以原版默认生命。
  - `Replace`：直接替换生命。
- **`Speciality_Health_Overrides`** `dictionary`：在启用上面模式时，把 Zombie Speciality（Crawler、Sprinter、Flanker 等）映射到数值。

示例：

```text
Speciality_Health_Overrides
{
    Crawler 100
    Burner 200
}
```

## 生成概率

以下字段均为小数形式的概率，默认 0，并要求 `Overrides_Spawn_Chance=true`：

- **`Crawler_Chance`**：Crawler。
- **`Sprinter_Chance`**：Sprinter。
- **`Flanker_Chance`**：Flanker。
- **`Burner_Chance`**：Burner。
- **`Acid_Chance`**：Acid Spitter。
- **`Boss_Electric_Chance`**：Lightningstrike Zombie Boss。
- **`Boss_Wind_Chance`**：Groundpounder Zombie Boss。
- **`Boss_Fire_Chance`**：Flamethrower Zombie Boss。
- **`Spirit_Chance`**：Spirit。
- **`DL_Red_Volatile_Chance`**：Volatile。
- **`DL_Blue_Volatile_Chance`**：Blue Volatile。
- **`Boss_Elver_Stomper_Chance`**：Stomper Zombie Boss。
- **`Boss_Kuwait_Chance`**：Evil Eye Zombie Boss。

> 上游原文：[assets/zombie-difficulty-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/zombie-difficulty-asset.rst)
