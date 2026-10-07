---
title: 弹匣资源（Magazine Asset）
translation:
  source: items/magazine-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 弹匣资源（Magazine Asset）

Magazine 由 `ItemMagazineAsset` 创建，是可安装到远程武器上的弹药/弹匣附件。它继承 [CaliberAsset](/items/caliber-asset.html)。

## 基础配置

- `GUID`
- `ID`
- `Type Magazine`
- 兼容口径配置（`Calibers` / `Caliber_#`）

## 常用属性

| 字段 | 说明 |
| --- | --- |
| `Amount` | 弹匣最大弹药量 |
| `Count_Min` / `Count_Max` | 生成时初始弹药范围 |
| `Speed` | 换弹速度倍率 |
| `Pellets` | 每次射击产生的弹丸数 |
| `Tracer` | 曳光 Effect GUID / Legacy ID |
| `Projectile` | 物理弹丸/Projectile 配置 |
| `Explosive` | 启用爆炸弹药行为 |
| `Explosion` | 爆炸 Effect |
| `Range` | 爆炸/弹丸作用范围相关参数 |
| `Player_Damage` | 爆炸对玩家伤害 |
| `Zombie_Damage` | 爆炸对僵尸伤害 |
| `Animal_Damage` | 爆炸对动物伤害 |
| `Barricade_Damage` | 爆炸对路障伤害 |
| `Structure_Damage` | 爆炸对结构伤害 |
| `Vehicle_Damage` | 爆炸对载具伤害 |
| `Resource_Damage` | 爆炸对资源节点伤害 |
| `Object_Damage` | 爆炸对对象伤害 |
| `Stuck` | 弹丸命中后损失的品质 |
| `Invulnerable` | 是否能伤害高护甲/Invulnerable 内容 |

## 弹药与枪械兼容

Magazine 与 Gun 的兼容性主要依赖口径 ID。枪械的 `Magazine_Calibers` / `Magazine_Caliber_#` 与弹匣的口径列表需要匹配。

## 爆炸弹匣

启用 `Explosive` 后，Magazine 可以为弹丸提供范围伤害。玩家、僵尸、动物、路障、结构、载具等伤害分别由对应字段控制。

## 物理 Projectile

如果枪械发射可见物理弹丸，可以在资源包中提供：

~~~text
Projectile.prefab
~~~

存在时会覆盖枪械射击时实例化的默认 Projectile。

## 品质

`Stuck` 大于 0 时，弹匣/弹药会显示品质，并在弹丸命中后损失指定品质。弓弩类 `Action String` 武器常用这一功能。

> 上游原文：[items/magazine-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/magazine-asset.rst)
