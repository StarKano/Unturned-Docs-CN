---
title: 弹匣类（Magazine Asset）
translation:
  source: items/magazine-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 弹匣类（Magazine Asset）

弹匣及其他弹药附件由 `ItemMagazineAsset` 创建，可以安装到远程武器上。它继承[口径类 `CaliberAsset`](/items/caliber-asset.html)，后者又继承[基础物品资源](/items/introduction.html)。因此，通用字段和口径字段也适用于弹匣。

## 数据文件要求

| 继承类 | 必需字段 | 值 |
| --- | --- | --- |
| `ItemAsset` | `GUID` | 唯一 GUID |
| `ItemAsset` | `ID` | 唯一旧版 ID |
| `ItemAsset` | `Type` | `Magazine` |

口径兼容性使用继承自 `CaliberAsset` 的字段；具体设置请参阅[口径类](/items/caliber-asset.html)。

## 弹匣属性

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `Animal_Damage` | float32 | `0` | 爆炸对动物的范围伤害 |
| `Barricade_Damage` | float32 | `0` | 爆炸对路障的范围伤害 |
| `Delete_Empty` | flag | 未设置 | 弹药耗尽后删除附件 |
| `Explosion` | GUID / uint16 | `0` | 爆炸特效的 GUID 或旧版 ID |
| `Explosion_Launch_Speed` | float32 | `Player_Damage * 0.1` | 爆炸中玩家被抛出的速度，米/秒 |
| `Explosion_Penetrate_Buildables` | bool | `false` | 爆炸伤害穿透可建造物 |
| `Explosion_Plays_Impact_Effects` | bool | `true` | 爆炸产生血迹等表面命中特效 |
| `Explosive` | flag | 未设置 | 为弹道弹丸启用范围爆炸 |
| `Impact` | GUID / uint16 | `0` | 命中时播放的特效 |
| `Object_Damage` | float32 | `Resource_Damage` | 爆炸对对象的范围伤害 |
| `Pellets` | uint8 | `1` | 每次射击的弹道射线数 |
| `Player_Damage` | float32 | `0` | 爆炸对玩家的范围伤害 |
| `Projectile_Blast_Radius_Multiplier` | float32 | `1` | 物理弹丸爆炸半径倍率 |
| `Projectile_Damage_Multiplier` | float32 | `1` | 物理弹丸爆炸伤害倍率 |
| `Projectile_Launch_Force_Multiplier` | float32 | `1` | 物理弹丸发射力倍率 |
| `Range` | float32 | `0` | 爆炸作用半径，单位为米 |
| `Resource_Damage` | float32 | `0` | 爆炸对资源节点的范围伤害 |
| `Should_Fill_After_Detach` | bool | `false` | 从远程武器拆下后补满弹药 |
| `Spawn_Explosion_On_Dedicated_Server` | flag | 未设置 | 在专用服务器上生成 `Explosion` 特效 |
| `Speed` | float32 | `1` | 换弹速度倍率 |
| `Structure_Damage` | float32 | `0` | 爆炸对建筑的范围伤害 |
| `Stuck` | uint8 | `0` | 弹丸命中后损失的品质 |
| `Tracer` | GUID / uint16 | `0` | 曳光特效的 GUID 或旧版 ID |
| `Vehicle_Damage` | float32 | `0` | 爆炸对载具的范围伤害 |
| `Zombie_Damage` | float32 | `0` | 爆炸对僵尸的范围伤害 |

## 爆炸与弹丸行为

设置 `Explosive` 后，弹道武器发射的弹丸会造成范围爆炸，通常同时设置 `Range`。各类 `*_Damage` 字段控制爆炸对相应目标造成的伤害。`Explosion` 指定爆炸特效；`Impact` 指定命中特效；`Tracer` 指定曳光特效。这些特效均可填写 GUID 或旧版 ID。

`Explosion_Penetrate_Buildables` 允许爆炸伤害穿过可建造物。`Explosion_Plays_Impact_Effects` 默认开启，会产生血迹等按表面类型决定的命中特效；弹丸数量很多的爆炸霰弹可能因此遇到性能问题，可按需关闭。`Spawn_Explosion_On_Dedicated_Server` 控制使用 `Explosion` 时是否在专用服务器上生成特效。

`Explosion_Launch_Speed` 指定爆炸影响范围内玩家被抛出的速度，默认按 `Player_Damage * 0.1` 计算。对物理弹丸武器，`Projectile_Blast_Radius_Multiplier`、`Projectile_Damage_Multiplier` 和 `Projectile_Launch_Force_Multiplier` 分别调整爆炸半径、伤害与发射力。

::: note 官方原文笔误
官方对 `Object_Damage` 的详解误写为“对玩家的伤害”。此处按字段名称及其默认继承的 `Resource_Damage` 将其解释为对对象的伤害。
:::

## 弹药数量、换弹与品质

弹匣最大弹药量、生成时的弹药范围分别由继承的 `Amount`、`Count_Min` 和 `Count_Max` 控制。`Pellets` 设置每次射击发出的弹道射线数；`Speed` 是换弹速度倍率。设置 `Delete_Empty` 可在弹药耗尽时删除弹匣，设置 `Should_Fill_After_Detach` 可在弹匣从远程武器拆下后补满弹药。

`Stuck` 表示弹丸击中目标后损失的品质。大于 `0` 时物品会显示品质；它常用于 `Action String` 类型的弓弩等远程武器。

## Unity 设置

发射物理弹丸的枪械可选提供 `Projectile.prefab`。存在时，它会覆盖枪械射击时默认生成的弹丸。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/magazine-asset.html)
