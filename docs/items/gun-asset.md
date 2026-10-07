---
title: 枪械资源（Gun Asset）
translation:
  source: items/gun-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 枪械资源（Gun Asset）

`ItemGunAsset` 用于定义远程武器。原版示例包括 Eaglefire、Crossbow 等。它继承 [Weapon Asset](/items/weapon-asset.html)。

## Unity Prefab

在 `Item` Prefab 中，常见枪械会添加这些子 GameObject：

- `Barrel`
- `Grip`
- `Sight`
- `Tactical`
- `Magazine`
- `Eject`

前五个用于附件安装位置；`Sight` 同时影响机械瞄准相机位置；`Eject` 是弹壳抛出点。可选 `View` 用于在未安装 Sight 时指定 ADS 相机位置。

如果同一种附件类型需要按口径使用不同位置，可以在 Hook 下增加 `Caliber_#` 子节点。

### 弓弩

弓类额外使用 `Rope`（Line Renderer）、`Left` / `Right`（弓弦两端）、可选 `Rest` 和 `Nock`。这些节点用于模拟第一人称弓弦。

### 动画

除通用 `Equip` / `Inspect` 外，枪械常用：`Aim_Start`、`Aim_Stop`、`Attach_Start`、`Attach_Stop`、`Sprint_Start`、`Sprint_Stop`、`Reload`、`Hammer`、`UnjamChamber`。

### 音频

可使用：`Shoot`、`Reload`、`Hammer`、`Aim`、`Minigun`、`ChamberJammed`。

## 必需 / 强烈建议字段

- `GUID`
- `ID`
- `Slot`
- `Type Gun`
- `Useable Gun`
- `Range`
- `Action`

枪械始终显示品质。

## 瞄准与视角

| 字段 | 默认值 / 说明 |
| --- | --- |
| `Aim_In_Duration` | `0.2` |
| `Aiming_Movement_Speed_Multiplier` | 瞄准移动速度倍率 |
| `Alert_Radius` | `48` |
| `Can_Aim_During_Sprint` | `false` |
| `Gunshot_Rolloff_Distance` | 枪声衰减距离 |
| `Must_Aim_To_Shoot` | 是否必须瞄准才能开火 |
| `Range_Rangefinder` | 测距上限 |
| `Scale_Aim_Animation_Speed` | `true` |
| `Stop_Aiming_After_Shooting` | `false` |
| `DriverTurretViewmodelMode` | `OffscreenWhileAiming` |

## 口径兼容

- `Caliber`
- `Attachment_Calibers` / `Attachment_Caliber_#`
- `Magazine_Calibers` / `Magazine_Caliber_#`
- `Requires_NonZero_Attachment_Caliber`

附件和弹匣是否兼容主要由这些 Legacy Caliber ID 决定。

## 射击模式

- `Action`：枪械动作类型。
- `Safety`
- `Semi`
- `Auto`
- `Bursts`
- `Firerate`
- `Fire_Delay_Seconds`

## 附件 Hook

枪械可以默认携带 `Barrel`、`Grip`、`Sight`、`Tactical`，并使用 `Hook_Barrel`、`Hook_Grip`、`Hook_Sight`、`Hook_Tactical` 决定是否允许对应附件类型。

## 弹匣与弹药

| 字段 | 默认值 / 说明 |
| --- | --- |
| `Magazine` | 默认弹匣 Legacy ID |
| `Allow_Magazine_Change` | `true` |
| `Ammo_Min` / `Ammo_Max` | 生成弹药范围 |
| `Ammo_Per_Shot` | `1` |
| `Infinite_Ammo` | `false` |
| `Reload_Time` | `1` |
| `Hammer_Time` | `1` |
| `Replace` | `1` |
| `Unplace` | `0` |
| `Should_Delete_Empty_Magazines` | 空弹匣是否删除 |
| `Magazine_Replacements` | 地图条件弹匣替换数量 |

## 伤害衰减

- `Damage_Falloff_Range`：开始衰减距离。
- `Damage_Falloff_Max_Range`：完成衰减距离。
- `Damage_Falloff_Multiplier`：最远处伤害倍率。
- `Instakill_Headshots`：是否头部命中直接击杀。

最终伤害还会叠加 Weapon Asset 与 Magazine / Attachment 的倍率。

## 弹道 / Projectile

常见字段包括 `Ballistic_Steps`、`Ballistic_Travel`、`Bullet_Gravity_Multiplier`、`Bullet_Speed`、`Projectile`、`Projectile_Launch_Force`、`Projectile_Blast_Radius_Multiplier`。旧 `Ballistic_Drop` 已逐步由更明确的弹道字段取代。

## 特效

- `Muzzle`：枪口 Effect。
- `Shell`：弹壳 Effect。
- `Explosion`：爆炸 Effect。

## 后坐力、散布和摇晃

枪械本体、附件与姿态会共同影响 `Recoil_Min_X` / `Recoil_Max_X`、`Recoil_Min_Y` / `Recoil_Max_Y`、`Spread_Aim`、`Spread_Hip`、`Shake_Min_X` / `Shake_Max_X`、`Shake_Min_Y` / `Shake_Max_Y` 和 `Sway`。附件倍率会与枪械值组合。

## 卡壳

- `Can_Ever_Jam`
- `Jam_Quality_Threshold`：默认 `0.4`
- `Jam_Max_Chance`：默认 `0.1`
- `Unjam_Chamber_Anim`：默认 `UnjamChamber`

启用卡壳后可以配合 `UnjamChamber` 动画和 `ChamberJammed` 音频。

## 枪口与声音

`Alert_Radius` 决定 AI 对枪声的警觉范围；`Gunshot_Rolloff_Distance` 控制远距离音频衰减。消音器等 Barrel 附件可以进一步修改射击效果和声音表现。

::: tip
Gun 是字段最多的 Item 类型之一。制作新枪时，最稳妥的起点通常是复制一个行为接近的官方示例，再替换模型、动画、口径与数值。
:::

> 上游原文：[items/gun-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/gun-asset.rst)
