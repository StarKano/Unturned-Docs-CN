---
title: 枪械资源（Gun Asset）
translation:
  source: items/gun-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 枪械资源（Gun Asset）

`ItemGunAsset` 用于定义远程武器。原版示例包括 [Eaglefire](https://unturned.wiki.gg/wiki/Eaglefire)、[Crossbow](https://unturned.wiki.gg/wiki/Crossbow) 等。它继承 [Weapon Asset](/items/weapon-asset.html)。

## Unity Prefab

![Unity 中的枪械配置示例](/img/UnityExampleGun.png)

*在 Unity Editor 中配置枪械的示例。*

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

![Unity 中的弩配置示例](/img/UnityExampleCrossbow.png)

*在 Unity Editor 中配置 Crossbow 的示例。*

弓类额外使用 `Rope`（设为未激活，并添加 Line Renderer）、`Left` / `Right`（弓弦两端）、可选 `Rest` 和 `Nock`。原版的 `Rope` 材质使用 Unlit-Rope Shader，但自制弓并不强制使用它。弓弦仅在第一人称视角模拟。只有 `Rest` 时，它在瞄准时用作中点；加入 `Nock` 后，弓可以不瞄准就射击，此时 `Rest` 是未瞄准时的中点，`Nock` 是瞄准时的中点。

### Economy 物品节点

皮肤可使用 `Icon2` 指定生成图标时的位置和朝向、`Stat_Tracker` 指定计数器位置、`Effect` 指定神话特效位置。自定义物品通常无法获得皮肤，因此一般不需要这些节点。

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

官方在 `ItemGunAsset` 中列出的弹道字段包括 `Ballistic_Steps`、`Ballistic_Travel`、`Bullet_Gravity_Multiplier`；物理弹丸字段包括 `Ballistic_Force`、`Projectile_Explosion_Launch_Speed`、`Projectile_Lifespan`、`Projectile_Penetrate_Buildables`。旧 `Ballistic_Drop` 已弃用，详见下文。

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

## 官方字段补充说明

### 动作类型与射速

`Action` 是必填项，决定枪械使用哪一种弹丸系统。`Trigger`、`Bolt`、`Pump`、`Rail`、`String`、`Break`、`Minigun` 使用**弹道弹丸**；`Rocket` 使用**物理弹丸**，其弹丸命中后造成范围爆炸。`String` 通常要求先瞄准才能射击；在 Unity Prefab 中加入 `Nock` 节点可以解除这一限制。

`Safety`、`Semi`、`Auto` 分别启用保险、半自动和全自动模式。`Bursts` 大于 `0` 时启用连发模式，数值是一次连发的射击次数。`Fire_Delay_Seconds` 是扣动扳机到实际射击的延迟。`Firerate` 控制连续射击之间的最少 Tick 数；值越大，射速越慢。每秒发数约为 `50 / (Firerate + 1)`。

`Aim_In_Duration` 是完成举枪瞄准所需秒数，默认 `0.2`。`Scale_Aim_Animation_Speed` 默认开启，使 `Aim_Start`、`Aim_Stop` 动画长度与该时长及其修正值匹配。`Aiming_Movement_Speed_Multiplier` 在不能冲刺瞄准时默认 `0.75`，否则默认 `1`。`Must_Aim_To_Shoot` 对 `Minigun` 默认开启，其他动作默认关闭；`String` 有自己的瞄准限制。`Stop_Aiming_After_Shooting` 开启后，即使玩家仍按住瞄准键也会停止瞄准。

`DriverTurretViewmodelMode` 控制驾驶座炮塔的第一人称手臂：`OffscreenWhileAiming`（默认）在瞄准时移出画面；`AlwaysOffscreen` 在装备时就移出；`AlwaysOnscreen` 始终显示。旧 `Turret` 标志将武器视为载具炮塔，也会影响第一人称模型。

### 口径与附件

`Caliber` 是用于弹匣和其他附件兼容性检查的旧版口径 ID。需要分别配置多种口径时，使用 `Magazine_Calibers` / `Magazine_Caliber_#` 和 `Attachment_Calibers` / `Attachment_Caliber_#`。计数字段应等于对应 `#` 字段的项数；使用 `Attachment_Calibers` 时必须先配置 `Magazine_Calibers`。

```text
Attachment_Calibers 2
Attachment_Caliber_0 1
Attachment_Caliber_1 9
Magazine_Calibers 3
Magazine_Caliber_0 1
Magazine_Caliber_1 4
Magazine_Caliber_2 9
```

上述配置允许口径 1、9 的普通附件，以及口径 1、4、9 的弹匣。`Magazine_Calibers` 不大于 `0` 时退回单一口径 `Caliber`；`Attachment_Calibers` 不大于 `0` 时，普通附件沿用弹匣口径列表，不能单独定制。`Requires_NonZero_Attachment_Caliber` 设为 `true` 后，附件至少须声明一个非零口径，可借此排除大部分原版通用附件。

`Barrel`、`Grip`、`Sight`、`Tactical` 是默认装上的附件旧版 ID，即使没有对应 `Hook_*` 标志也能使用。`Hook_Barrel`、`Hook_Grip`、`Hook_Sight`、`Hook_Tactical` 则决定武器是否具有可更换的对应附件槽位。

### 弹匣、换弹与弹壳

`Magazine` 指定默认弹匣旧版 ID；`Ammo_Min` / `Ammo_Max` 是默认弹匣随机生成的最小、最大弹数。`Ammo_Per_Shot` 默认 `1`，填 `3` 表示每枪消耗三发，填 `0` 可实现无限弹药。`Infinite_Ammo` 为 `true` 时不会扣除弹匣弹数，但仍需安装弹数不少于 `Ammo_Per_Shot` 的弹匣。`Allow_Magazine_Change` 为 `false` 时，弹匣不能拆卸、更换或重新装填。

`Magazine_Replacements` 是条件替换项数；每项用 `Magazine_Replacement_#_ID` 指定替代默认弹匣，用 `Magazine_Replacement_#_Map` 指定生效地图。前者是旧版 ID，后者必须与地图名称匹配。`Delete_Empty_Magazines` 自 **3.30.3.0** 起弃用，改用 `Should_Delete_Empty_Magazines`。新字段对 `Break`、`Pump`、`Rail`、`Rocket`、`String` 默认 `true`，其他动作默认 `false`。

`Reload_Time` 控制装填完成前的冷却时间倍率，`Hammer_Time` 控制射击后扳机或枪机动作的冷却时间倍率；两者都不直接改变动画播放速度，且小于 `1` 的值无效。`Replace` 是装填动画播放到何处时生成弹匣的时间倍率，低于 `0.01` 无效；`Unplace` 是弹匣移除的时间倍率。

| 字段 | 默认值 | 作用 |
| --- | --- | --- |
| `EjectCasingAfterShooting` | `Trigger`、`Minigun` 为 `true` | 射击时抛出弹壳粒子 |
| `CasingEjectCountAfterReload` | `Break` 为 `Ammo_Max`，其他为 `0` | 装填后抛出的弹壳数 |
| `EjectAfterReloadDelay` | `0.5` 秒 | 装填后延迟抛壳 |
| `CasingEjectCountAfterRechamberingAfterShooting` | `1` | 射击后重新上膛时抛出的弹壳数 |
| `EjectAfterHammerDelay` | `0.45` 秒 | 扳机或枪机动作后延迟抛壳 |

后两项仅在 `RechamberAfterShotCount` 非零时适用。`RechamberAfterShotCount` 是射击多少发后播放 `Hammer` 动画；`Bolt`、`Pump` 默认 `1`，其他动作默认 `0`。计数在装填、上膛或卸下武器时重置。`RechamberAfterShotDelay` 默认 `0.25` 秒，是射击到重新上膛之间的等待时间。

`RechamberAfterMagazineAttached` 控制装上或更换弹匣后是否播放 `Hammer`，默认 `IfAmmoWasEmpty`；`RechamberAfterMagazineDetached` 控制直接卸下弹匣后是否播放，默认 `Always`。这两个字段可选 `IfAmmoWasEmpty`（弹数原为零时播放）、`Never`（不播放）和 `Always`（总是播放）。

### 两种弹丸系统

**弹道弹丸**按确定性规则模拟飞行时间、下坠等参数；若游戏关闭弹道机制，这类武器改为即时命中。`Ballistic_Steps` 是弹丸生命周期步数，必须大于 `0`，默认按 `Range / Ballistic_Travel` 向上取整。`Ballistic_Travel` 是每步行进距离，必须大于 `0.1`，默认 `10`；只设置了有效 `Ballistic_Steps` 时，默认改为 `Range / Ballistic_Steps`。步数不变时提高 `Ballistic_Travel` 会提高初速；行进距离不变时提高步数会降低初速。为避免手工弹道范围与武器 `Range` 不一致，官方建议只设置其中一个，或两者都不设置。

`Bullet_Gravity_Multiplier` 默认 `4`，作用于飞行中子弹的重力加速度；设为 `1` 会产生更接近真实重力的下坠。旧 `Ballistic_Drop` 自 **3.23.7.0** 起弃用，未设置新字段时游戏会自动换算；可用启动参数 `-LogBallisticDropConversion` 查看换算值。

**物理弹丸**使用 Unity 物理模拟，结果不具确定性；命中后会产生范围爆炸。`Ballistic_Force` 默认 `0.002` 牛顿，是施加在物理弹丸上的力。`Projectile_Lifespan` 默认 `30` 秒，过时后弹丸消失。`Projectile_Explosion_Launch_Speed` 控制爆炸将玩家抛出的速度，默认 `Player_Damage × 0.1`；`Projectile_Penetrate_Buildables` 使爆炸穿透可建造物。物理弹丸字段不能与 `Ballistic_Travel`、`Bullet_Gravity_Multiplier` 等弹道弹丸字段混用。

### 伤害、声音与特效

`Damage_Falloff_Range` 是开始衰减的最大射程比例；例如射程 `200`、取值 `0.3` 时从 60 米开始衰减。`Damage_Falloff_Max_Range` 是停止衰减的比例，例如 `0.6` 时在 120 米达到最低伤害。`Damage_Falloff_Multiplier` 是最远距离的伤害比例，例如原伤害 `40`、倍率 `0.25` 时造成 `10` 点伤害。

`Instakill_Headshots` 开启后对玩家爆头立即击杀；僵尸只会在地图难度配置启用 `Weapons_Use_Player_Damage` 时受此规则影响。`Alert_Radius` 默认 `48` 米，范围内的僵尸或动物会被枪声惊动。`Gunshot_Rolloff_Distance` 是枪声音频衰减至不可闻的距离：`String` 默认 `16` 米，`Rocket` 默认 `64` 米，其余默认 `512` 米。

`Muzzle` 从 `Barrel` 节点播放射击特效；`Shell` 从 `Eject` 节点播放抛壳特效；`Explosion` 是 `Action Rocket` 弹丸的爆炸特效。三者可填特效 GUID 或旧版 ID。`Shell` 在 `Pump`、`Break` 时默认 `33`，`Rail` 时默认 `0`，其他动作默认 `1`。

### 后坐力、模型摇晃与散布

`Recoil_Min_X` / `Recoil_Max_X` 和 `Recoil_Min_Y` / `Recoil_Max_Y` 分别给出水平与垂直镜头后坐角度的最小、最大值，默认均为 `0`。`Aiming_Recoil_Multiplier` 是瞄准时的后坐力倍率，默认 `1`。`Recoil_Crouch`、`Recoil_Prone`、`Recoil_Midair`、`Recoil_Sprint`、`Recoil_Swimming` 分别在蹲伏、卧倒、空中、冲刺、游泳时调整镜头后坐力，默认值依次为 `0.85`、`0.7`、`1.0`、`1.25`、`1.1`。冲刺倍率仅在 `Can_Aim_During_Sprint` 为 `true` 时适用。`Recover_X` / `Recover_Y` 控制接下来 250 毫秒内水平、垂直方向的反向恢复比例。

`Shake_Min_X` / `Shake_Max_X`、`Shake_Min_Y` / `Shake_Max_Y`、`Shake_Min_Z` / `Shake_Max_Z` 分别定义射击时模型在三个轴上的最小和最大摇晃，默认均为 `0`。`Spread_Angle_Degrees` 是偏离瞄准方向的最大角度；`0` 保证命中准星中心，`15` 表示最大可偏离 15 度。`Spread_Aim` 是瞄准时作用于该角度的倍率，默认 `0`。

`Spread_Crouch`、`Spread_Prone`、`Spread_Midair`、`Spread_Sprint`、`Spread_Swimming` 是各姿态的散布倍率，默认值依次为 `0.85`、`0.7`、`1.5`、`1.25`、`1.1`。旧 `Spread_Hip` 自 **3.22.20.0** 起弃用，应使用 `Spread_Angle_Degrees`；启动参数 `-LogGunSpreadConversion` 可输出等效值。

### 卡壳与任务奖励

设置 `Can_Ever_Jam` 后，品质低于 `Jam_Quality_Threshold` 才可能卡壳。默认阈值 `0.4` 表示 40% 品质；每次射击的卡壳率从 0% 逐渐增加至 `Jam_Max_Chance`（默认 `0.1`，即 10%）。卡壳时播放 `ChamberJammed` 音效和可选的 `Unjam_Chamber_Anim`（默认 `UnjamChamber`）。游戏文件中的 `Guns/Cobra_Jam/Cobra_Jam.dat` 提供示例。

枪械还可配置[任务奖励](/npcs/rewards.html)，例如射击时向玩家背包生成物品，或要求玩家射击以完成任务。这些字段以 `Shoot_Quest_` 开头，例如 `Shoot_Quest_Rewards 1`。

::: tip
Gun 是字段最多的 Item 类型之一。制作新枪时，最稳妥的起点通常是复制一个行为接近的官方示例，再替换模型、动画、口径与数值。
:::

## 官方外部参考

- [Rocket Launcher（Unturned Wiki）](https://unturned.wiki.gg/wiki/Rocket_Launcher)
- [Unity Rigidbody.AddForce API](https://docs.unity3d.com/ScriptReference/Rigidbody.AddForce.html)

> 上游原文：[items/gun-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/gun-asset.rst)
