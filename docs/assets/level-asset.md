---
title: 关卡资源（Level Asset）
translation:
  source: assets/level-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 关卡资源（Level Asset）

每张地图都可以关联一个 **Level Asset**，用来存储主菜单阶段不需要的玩法信息。地图如何绑定 Level Asset 请参阅后续 Level Config 文档。官方示例位于 `Assets/Levels`。

- **`Type`**：`SDG.Unturned.LevelAsset`。
- **`Dropship`** [Master Bundle Pointer](/data/master-bundle-ptr.html)：覆盖投放 Care Package 时飞过地图的运输机模型。
- **`Airdrop`** [Asset Pointer](/data/asset-ptr.html)：指向 Airdrop Asset，覆盖下落补给箱模型。
- **`Crafting_Blacklists`**：Crafting Blacklist Asset Pointer 数组，禁止该地图中指定 Item/Blueprint 用于合成。
- **`Min_Stealth_Radius`** `float`：玩家 Stealth Skill 再高，也不能把最低侦测距离降到该值以下。
- **`Weather_Types`** array：决定可自然发生的天气。见“可调度天气”。若地图仍使用 Legacy Weather，默认 Rain/Snow 会包含在内。
- **`Perpetual_Weather_Asset`** Asset Pointer：指定 Weather Asset 后覆盖普通天气调度。
- **`Global_Weather_Mask`** u32 Bitmask：玩家不在 Ambience Volume 内时使用的回退 Weather Mask，默认 `0xFFFFFFFF`。
- **`Skills`** array：覆盖 Skill 默认等级和最高等级。
- **`Skillset_Loadouts`** dictionary：覆盖每个 Skillset 的出生物品。可用于单人模式阻止默认 Skillset Item；服务器 `Loadout` 命令优先级更高。
- **`TerrainColors`** array：定义哪些颜色与 Terrain 过于相似。
- **`Enable_Admin_Faster_Salvage_Duration`** `bool`：默认单人玩家和多人管理员使用更快 Salvage 时间。
- **`Has_Clouds`** `bool`：false 时关闭 Skybox Clouds，默认 true。
- **`Loading_Screen_Music`** array：随机选择加载音乐，见“音乐属性”。
- **`Should_Animate_Background_Image`** `bool`：true 时加载进度会推动背景图左右移动。默认 false，因为地图作者常把重要信息写在 Loading Screen。
- **`Death_Music`** Master Bundle Pointer：死亡后播放 Audio Clip。
- **`UnderwaterFogDensity`** `float`：Camera 在水下时 Fog 强度，默认 `0.075`。
- **`Allow_Building_In_Safezone_In_Singleplayer`** `bool`：true 时单人模式可绕过 Safezone 禁建。默认 false。
- **`Tags`**：Tag Asset Pointer 列表。Blueprint 可用 Tag 代替按 `Map` 名称判断，未来可能扩展。
- **`Supports_Fishing_Volumes`** `bool`：true 表示地图已经给 Water Volume 分配 Fishing Spawn Table（或配置了默认表）。默认 false。
- **`Default_Fish_Spawn_Table`** Asset Pointer：Fishing Rod 在 Water Volume 没有专用 Fishing Table 时回退到此表。
- **`ZombieDifficultyAssetPrioritization`** enum（`NavmeshOverridesTable`、`TableOverridesNavmesh`）：控制 Spawn Table 与 Navmesh 各自的 Zombie Difficulty Asset 谁优先。默认 Navmesh 优先；TableOverridesNavmesh 可让某些 Spawn Table 强制自己的难度。

## Cloud Override

当 `Has_Clouds false` 时，可用以下属性用 Lighting 的 Cloud Color/Intensity 驱动自定义 Particle System。

::: warning
不推荐自定义 Cloud。低 Max Draw Distance 下行为不一致。早期 3.x 约 8 km Far Clip，太阳/月亮/云/星星是接近 Far Plane 的 3D 物体；后来改成 Skybox Shader 允许玩家调 Draw Distance，但牺牲了部分自定义能力。

地图作者曾用挂在 Camera 上的 3D Cloud Particle + `ZClip False` Shader 绕过 Far Plane。3.25.9.2 引擎升级后，这个做法在低 Draw Distance 会被 Particle Culling 破坏。截至 2026 年 3 月，官方没有已知办法强制它始终渲染。
:::

- **`CloudOverride_Prefab`** Master Bundle Pointer：实例化并挂到 Lighting 的 Prefab。
- **`CloudOverride_ParticleSystems`** list：描述 Prefab 内 Particle System 的字典。
  - **`Path`** `string`：相对 Prefab Root 的 Particle System 路径。Renderer 通常应使用 `Particles/Standard Surface (ZClip False)`。
  - **`RateOverTimeScale`** `float`：Emission Rate 乘以当前时段 Cloud Slider（0–1）再乘该值。
  - **`MaterialColorPropertyNames`** list：Material Instance 中需要设置为当前 Cloud Color 的 Color Property，默认只有 `_Color`。
  - **`WarmupTime`** `float`：重启 Particle System 时预模拟的秒数，可替代 `Prewarm`，默认 0。

示例：

```text
CloudOverride_ParticleSystems
[
    {
        Path System1
        RateOverTimeScale 1.5
        WarmupTime 10
        MaterialColorPropertyNames
        [
            _Color
            _EmissionColor
        ]
    }
    {
        Path System2
        RateOverTimeScale 3
        MaterialColorPropertyNames
        [
            _Color
            _EmissionColor
        ]
    }
]
```

## 可调度天气属性

- **`Asset`**：Weather Asset Pointer。
- **`Min_Frequency`** `float`：被选为下一次天气后，至少多少游戏日后开始。
- **`Max_Frequency`** `float`：最多多少游戏日后开始。
- **`Min_Duration`** `float`：至少持续多少游戏日。
- **`Max_Duration`** `float`：最多持续多少游戏日。

## Skill Rule

- **`Id`** `string`：Skill 名，例如 `Sharpshooter`。
- **`Default_Level`** `int`：玩家出生等级；`Spawn_With_Max_Skills` Gameplay Config 优先。
- **`Max_Unlockable_Level`** `int`：玩法中可提升到的最高等级，更高等级会在 Skill Menu 隐藏。
- **`Base_Cost`** `int`：覆盖购买第一级所需 XP。
- **`Per_Level_Cost_Increase`** `int`：每级增加的 XP，在第一等级后加到 Base Cost。
- **`Cost_Multiplier`** `float`：最终升级 XP 总成本倍率。

```text
Skills
[
    {
        Id Overkill
        Default_Level 0
        Max_Unlockable_Level 0
    }
    {
        Id Parkour
        Default_Level 2
        Max_Unlockable_Level 2
    }
    {
        Id Crafting
        Default_Level 1
        Max_Unlockable_Level 3
        Cost_Multiplier 5
    }
]
```

## Skillset Loadout

可用 Key：`None`、`Fire`、`Police`、`Army`、`Farm`、`Fish`、`Camp`、`Work`、`Chef`、`Thief`、`Medic`。

每个 Key 是 Item List：

- **`Asset`**：要直接给予的 Item，或用于抽取 Item 的 Spawn Table。
- **`Amount`** `int`：给予次数，默认 1。
- **`Origin`**：决定 Item 初始状态，默认 `World`。

```text
Skillset_Loadouts
{
    Army
    [
        {
            // Eaglefire：满耐久、满弹
            Asset 4
            Origin Admin
        }
        {
            // Military magazine x2：随机弹量
            Asset dbfb1d0d11ca438e9dffb95f76e61274
            Amount 2
        }
    ]

    // 其他 Skillset 不携带任何物品出生
}
```

## Terrain Color

- **`Color`**：Terrain Material 实际 Base Color/Albedo。多人服务器中，如果玩家自定义 Skin Color 与其过于接近，会被踢出。
- **`HueThreshold`** `float32`：限制 [0,1]。Hue 差值高于阈值则不算“过于相似”。
- **`SaturationThreshold`** `float32`：Saturation 差值阈值。
- **`ValueThreshold`** `float32`：Value 差值阈值。

## 加载音乐

- **`Loop`**：加载完成前循环播放的 Audio Clip。
- **`Outro`**：加载完成时播放一次的 Audio Clip。

> 上游原文：[assets/level-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/level-asset.rst)
