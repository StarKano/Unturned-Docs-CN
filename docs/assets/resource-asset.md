---
title: 资源节点类（Resource Asset）
translation:
  source: assets/resource-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 资源节点类（Resource Asset）

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Resource`。
- **`ID`** `uint16`：必须唯一。

## 属性

- **`Auto_Skybox`** Flag：为 Resource 的 Skybox Prefab 自动生成并分配材质与纹理。Mesh 应使用与光照匹配的自定义 Normal；例如原版松树 Normal 向上，球形树 Normal 向外。
- **`BladeID`** `byte`：武器只有存在匹配的 `BladeID_#` 时才能伤害该资源。默认 0。
- **`Bypass_ID_Limit`** Flag：允许使用官方内容保留范围内的 ID。
- **`Chart`** enum：资源遮挡地形时，可在地图 Chart 中显示。该属性设置/覆盖 Chart 取色方式。默认 `None`，会从 Layer_Strip 的 (14, 0) 采样。
- **`Christmas_Redirect`** GUID：Festive 节日期间应显示的替代 Resource。
- **`Debris_Vertical_Offset`** `float`：沿树本地 Up Axis 偏移 Debris 生成位置，默认 1.0。
- **`Exclude_From_Level_Batching`** `bool`：排除在 Level Batching 外。复杂 Unity Event 设置时可能有用；存在 `SpeedTree` Flag 时默认 true。
- **`Explosion`** GUID / `uint16`：被摧毁时播放的 Effect Asset GUID 或 Legacy ID。
- **`Forage`** Flag：资源不可摧毁，改为通过交互采集。
- **`Forage_Reward_Experience`** `uint32`：采集奖励经验，默认 1。
- **`Halloween_Redirect`** GUID：Halloween 期间显示的替代 Resource。
- **`Health`** `uint16`：总生命值，默认 0。
- **`Holiday_Restriction`** enum：设置有效节日后，仅对应节日期间可见；节日名还会追加到资源的友好名称。默认 `None`。
- **`Ignore_Collision_Between_Stump_And_Debris`** `bool`：true 时倒下的树与树桩不碰撞，即 Debris 可穿过树桩。默认 true。
- **`Log`** `uint16`：被摧毁时掉落的物品 ID，倍率前每次 3–7 个。默认 0，已弃用，改用 `Reward_ID`。
- **`No_Debris`** Flag：资源被摧毁后不生成 Debris。
- **`RandomAngleDeviation_Max`** `float`：相对 Up Direction 的最大随机角度，默认 5°。
- **`RandomAngleDeviation_Min`** `float`：最小随机角度。设 0 可允许完全竖直；设更大可保证永不完全竖直。默认 5°。
- **`RandomUniformScale_Max`** `float`：Uniform Scale 最大值，同一个随机值用于所有轴。为兼容旧资源默认 1.1。
- **`RandomUniformScale_Min`** `float`：Uniform Scale 最小值。为兼容旧资源默认 1.1。
- **`Reset`** `float`：重生延迟，单位秒。
- **`Reward_ID`** `uint16`：奖励使用的 Item Spawn Table ID，默认 0。
- **`Reward_Min`** `byte`：最少掉落数，默认 6。
- **`Reward_Max`** `byte`：最多掉落数，默认 9。
- **`Reward_XP`** `uint32`：资源被摧毁时奖励经验。
- **`Scale`** `float`：旧版缩放。游戏内 Scale 为 1.1 到 `1.1 + Scale*2` 的随机值。自 3.24.7.0 起已被 `RandomUniformScale_Min/Max` 取代。
- **`SpeedTree`** Flag：高图形设置下按 SpeedTree 处理。
- **`SpeedTree_Default_LOD_Weights`** Flag：使用 SpeedTree 默认 LOD Weight。
- **`Stick`** `uint16`：被摧毁时掉落的物品 ID，倍率前每次 2–5 个。默认 0，已弃用，改用 `Reward_ID`。
- **`Vertical_Offset`** `float`：相对放置位置的垂直偏移（米），默认 -0.75。
- **`Vulnerable_To_All_Melee_Weapons`** `bool`：true 时，没有匹配 `BladeID_#` 的近战武器也能伤害资源。默认 false。
- **`Vulnerable_To_Fists`** `bool`：true 时玩家拳头也能造成伤害。默认 false。

## 本地化

- **`Name`** `string`：UI 中资源名称。
- **`Interact`** `string`：使用 `Forage` Flag 时覆盖交互提示文字。

> 上游原文：[assets/resource-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/resource-asset.rst)
