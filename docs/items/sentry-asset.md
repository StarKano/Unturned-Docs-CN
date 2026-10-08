---
title: 哨戒炮类（Sentry Asset）
translation:
  source: items/sentry-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 哨戒炮类（Sentry Asset）

Sentry（Robotic Turret）由 `ItemSentryAsset` 创建，可自动侦测、追踪并攻击符合条件的目标。把 Ranged Weapon 放入 Sentry 后，它会使用该 Weapon。继承 [StorageAsset](/items/storage-asset.html)。

必需字段：

- `GUID`
- `Type Sentry`
- `Useable Barricade`
- `Build Sentry` 或 `Sentry_Freeform`
- `ID`

## 专属属性

- **`Detection_Radius`** `float`：首次发现目标的半径，默认 48m。
- **`Mode`** enum：`Friendly`、`Neutral`、`Hostile`。决定哪些对象是合法目标，默认 `Neutral`。
- **`Infinite_Ammo`** `bool`：true 时不消耗存放 Weapon 的 Magazine，默认 false。
- **`Infinite_Quality`** `bool`：true 时 Weapon 不掉 Quality，默认 false。
- **`Requires_Power`** `bool`：必须有 Generator 供电才会侦测/追踪/攻击，默认 true。
- **`Target_Acquired_Effect`** Asset Pointer：发现目标时播放的 Audio Effect，默认 `ab5f0056b54545c8a051159659da8bea`。
- **`Target_Animals`** `bool`：可攻击 Animal，默认 true。
- **`Target_Lost_Effect`** Asset Pointer：失去目标时播放，默认 `288b98b718084699ba3653c592e57803`。
- **`Target_Loss_Radius`** `float`：目标离开初始侦测范围后仍继续追踪的半径，默认 `Detection_Radius × 1.2`。
- **`Target_Players`** `bool`：可攻击 Player，默认 true。
- **`Target_Vehicles`** `bool`：可攻击 Vehicle，默认 true。
- **`Target_Zombies`** `bool`：可攻击 Zombie，默认 true。
- **`Sentry_Bypasses_PvE`** `bool`：true 时 PvE 模式仍可伤害 Player / Vehicle，默认 false。
- **`React_To_Attacks`** `bool`：被攻击时立即转向攻击该玩家，默认 false。
- **`Sweep_Yaw`** `float`：闲置扫描左右 Yaw 范围，默认 120°。
- **`Sweep_Period`** `float`：从左扫到右再返回所需秒数，默认 6.3。

> 上游原文：[items/sentry-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/sentry-asset.rst)
