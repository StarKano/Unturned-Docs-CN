---
title: 投掷物类（Throwable Asset）
translation:
  source: items/throwable-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 投掷物类（Throwable Asset）

Throwable 由 `ItemThrowableAsset` 创建，可由玩家投掷。在禁止武器的 Safezone 中不能使用。继承 [WeaponAsset](/items/weapon-asset.html)。

必需字段：

- `GUID`
- `Type Throwable`
- `Useable Throwable`
- `ID`

## 专属属性

- **`Boost_Throw_Force_Multiplier`** `float`：玩家获得 “Olympic” 随机增益时，投掷力的倍率。默认 `1.4`。
- **`Explode_On_Impact`** Flag：命中后立即引爆。`Mode Friendly` 的 Robotic Turret 会把手持此类 Throwable 的玩家视为目标。
- **`Explosion`** `uint16` / GUID：引爆时播放的 Effect。
- **`Explosion_Launch_Speed`** `float`：AoE Explosion 把玩家抛出的速度，默认 `Player_Damage × 0.1`。
- **`Explosive`** Flag：启用 AoE Explosion。Friendly Sentry 会把手持此类 Throwable 的玩家视为目标。
- **`Flash`** Flag：AoE 内玩家受到 Flashbang 效果。Friendly Sentry 同样会把持有者视为目标。
- **`Fuse_Length`** `float`：Fuse 秒数。默认 180；若包含 `Explosive` 或 `Flash`，默认改为 2.5 秒。
- **`Sticky`** Flag：让 Throwable 粘在 Environment、Barricade 和 Structure 上。
- **`Strong_Throw_Force`** `float`：Strong Throw 力，单位 Newton，默认 1100。
- **`Weak_Throw_Force`** `float`：Weak Throw 力，单位 Newton，默认 600。

> 上游原文：[items/throwable-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/throwable-asset.rst)
