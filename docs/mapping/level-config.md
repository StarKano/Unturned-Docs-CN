---
title: 关卡配置（Level Config）
translation:
  source: mapping/level-config.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 关卡配置（Level Config）

每个 Level 都可以有一个可选的 `Config.json`。它最初用于给主菜单提供地图额外信息，后来逐步加入玩法参数。未来其中一部分可能迁移到更合适的 Level Asset。

## 主菜单

- **`Creators`** `string[]`：Credits 中的作者名。
- **`Collaborators`** `string[]`：Credits 中的协作者。
- **`Thanks`** `string[]`：Credits 中的感谢名单。
- **`CustomCredits`**：把内部 Header Title 映射到名字列表。实际显示标题按 Level Localization File 翻译。

示例：

```json
"CustomCredits":
{
    "Music":
    [
        "musician67",
        "SoundDesigner (these names aren't localized)"
    ],
    "Art":
    [
        "MyFavouriteArtist"
    ]
}
```

::: note
上例 `Music` 与 `Art` Key 会从 Level Localization File 翻译，名单中的名称本身不会本地化。
:::

- **`Associated_Stockpile_Items`** `int[]`：地图页面要推广的 Economy Itemdefid。每次显示地图时随机挑一个。Curated Map 用它关联带 Revenue Share 的 Item。
- **`Feedback`** `string`：Discussion URL。未显式设置时默认 Workshop Item 的 Discussion Page。
- **`Visible_In_Matchmaking`** `bool`：是否列在 Matchmaking Menu。测试/演示地图可设 false。
- **`Version`** `string`：`#.#.#.#` 格式。Vanilla 习惯 `3.Year.Update.Patch`，但不是强制。

每次上传都增加 Version 是好习惯：

1. Client/Server 文件不匹配时，显示 Version Error 比笼统 File Mismatch 更容易排查。
2. Server Browser 按地图搜索时可以筛选运行相同 Map Version 的服务器。

- **`Tips`** `int`：Level Localization 中定义了多少个 `Tip_#`。设置后覆盖 Vanilla Loading Screen Tips。
- **`RequiredWorkshopFileIds`** `ulong[]`：依赖 Workshop File ID。未加载依赖时，Singleplayer / Editor Menu 显示 **Missing Dependencies** 并禁止进入地图。

```json
"RequiredWorkshopFileIds":
[
    123456789,
    123456789
]
```

## Arena 模式

**`Use_Arena_Compactor`** `bool`  
是否定期随机生成新的圆圈。

**`Arena_Loadouts`**  
玩家进入 Arena 时给予的 Item 数组。每项包含 `Table_ID`（从哪个 Spawn Table 抽取）和 `Amount`（抽取次数）。

```json
"Arena_Loadouts":
[
    {
        "Table_ID": 28007,
        "Amount": 1
    },
    {
        "Table_ID": 28008,
        "Amount": 1
    }
]
```

## 通用

### Asset

**`Asset`**：包含 [Level Asset](/assets/level-asset.html) GUID 的 Object：

```json
"Asset": { "GUID": "12dc9fdbe9974022afd21158ad54b76a" }
```

### Trains

**`Trains`**：地图启动时生成的 Train Vehicle 数组。

同一个 Train Asset 同一时间只能存在一个实例，因为 Vehicle ID 用来把已保存 Train 匹配到 Track。Road Index 可在 Level Editor 选择 Road 后查看。Placement 是 Track 起点到终点之间的归一化位置。

```json
"Trains":
[
    {
        "VehicleID": 187,
        "RoadIndex": 0,
        "Min_Spawn_Placement": 0.1,
        "Max_Spawn_Placement": 0.9
    }
]
```

### Mode Config Overrides

**`Mode_Config_Overrides`**：覆盖 Server Gameplay Config 的 Property/Value Pair。

```json
"Mode_Config_Overrides":
{
    "Zombies.Min_Drops": 5,
    "Zombies.Max_Drops": 10,
    "Vehicles.Armor_Multiplier": 0.1,
    "Gameplay.Allow_Shoulder_Camera": false
}
```

也可以按 Difficulty 设置：

- `EasyDifficulty_Config_Overrides`
- `NormalDifficulty_Config_Overrides`
- `HardDifficulty_Config_Overrides`

### 其他通用参数

- **`Allow_Underwater_Features`** `bool`：Legacy Detail 和 Navigation Bounds 是否允许位于水下。
- **`Enable_Static_Volumes`** `bool`：优化 Volume Overlap Check。用于大量“不是 Unity Prefab 添加”的 Volume。若 Volume 会在 Runtime 移动、缩放或改变，不要启用。默认 false。
- **`Terrain_Snow_Sparkle`** `bool`：是否启用 `IS_SNOWING` Shader Keyword。
- **`Use_Legacy_Clip_Borders`** `bool`：是否按地图大小生成 Invisible Wall，默认 true。
- **`Use_Legacy_Ground`** `bool`：是否创建默认 Terrain；替代方案是 Landscape Tile。默认 true。
- **`Use_Legacy_Water`** `bool`：是否启用全局 Water Plane；替代方案是 Water Volume。默认 true。
- **`Use_Vanilla_Bubbles`** `bool`：是否使用 Vanilla Water Bubble Effect，默认 true。
- **`Use_Legacy_Snow_Height`** `bool`：超过 Snow Height Threshold 时是否启用 Snow Effect，默认 true。
- **`Use_Legacy_Oxygen_Height`** `bool`：超过特定高度时是否消耗 Oxygen，默认 true。
- **`Use_Rain_Volumes`** `bool`：是否使用 Ambiance Volume 的 Rain Flag。
- **`Use_Snow_Volumes`** `bool`：是否使用 Ambiance Volume 的 Snow Flag。
- **`Use_Underground_Whitelist`** `bool`：地下玩家如果不在 Whitelist Volume 内，是否传送回 Terrain Surface。适合减少 Out-of-bounds Exploit。
- **`Is_Aurora_Borealis_Visible`** `bool`：是否启用 Aurora Borealis。
- **`Snow_Affects_Temperature`** `bool`：Snow 是否造成 Cold Damage。
- **`Weather_Override`** ELevelWeatherOverride：锁定 Rain 或 Snow。
- **`Has_Global_Electricity`** `bool`：所有可通电 Item/Object 是否默认有电。
- **`Gravity`** `float`：重力加速度，默认 `-9.81`。
- **`Blimp_Altitude`** `float`：Blimp Buoyancy 高度覆盖，默认 150。
- **`Max_Walkable_Slope`** `float`：玩家不滑落可行走的最大地面角度，默认 59°。
- **`Prevent_Building_Near_Spawnpoint_Radius`** `float`：Spawn Point 周围禁建半径，默认 16；CQB 地图可以覆盖。
- **`Spawn_Loadouts`**：所有 Mode 出生时给予 Item，结构同 `Arena_Loadouts`。
- **`Allow_Holiday_Redirects`** `bool`：Object、Tree、Landscape 等 Asset 是否允许在 Holiday 加载替代版本。
- **`Enable_Clutter_Option`** `bool`：true 时地图支持 “Load Clutter” 图形设置。默认 false，要求地图作者主动接受隐藏 Detail 的取舍。
- **`Batching_Version`** `int`：参阅[关卡批处理](/mapping/level-batching.html)。
- **`Batching_Max_Texture_Size`** `int`：覆盖 Batching Atlas 可加入的最大 Texture Size。更大 Texture 增加超过最大 Atlas Size 的风险。

## HUD

以下 `bool` 可分别禁用 HUD 或玩法页面：

- `PlayerUI_HealthVisible`
- `PlayerUI_FoodVisible`
- `PlayerUI_WaterVisible`
- `PlayerUI_VirusVisible`
- `PlayerUI_StaminaVisible`
- `PlayerUI_OxygenVisible`
- `PlayerUI_GunVisible`
- `Allow_Crafting`
- `Allow_Skills`
- `Allow_Information`

## 已弃用

- **`Can_Use_Bundles`**：过去 Timed Curated Map 用于禁止在 Editor 使用其 Asset，防止地图从 Vanilla 内容迁移到 Workshop 后破坏引用。
- **`Category`** ESingleplayerMapCategory：现在大多自动判断。可设 `Misc` 强制显示在 Miscellaneous Map Category。
- **`Has_Atmosphere`**：过去用于关闭 Skybox Stars；因 Skybox 实现变化而弃用。
- **`Has_Discord_Rich_Presence`**：只对官方地图有效。启用 Discord Integration 且此 Flag 为 true 时，从合作页面读取 Map Icon。
- **`Item`** `int`：仅向后兼容。若设置 `Associated_Stockpile_Items` 则忽略。
- **`Load_From_Resources`**：过去 Curated Map 从 `Resources/Bundles/*` 加载 Asset；现已完全被 Master Bundle 取代。
- **`Should_Verify_Objects_Hash`**：新 Asset Integrity Check 下已过时。Level 中每个 Object/Tree 都会与 Server 校验；Server 缺少 Asset 时忽略。`Trees.dat` / `Objects.dat` 可始终包含，因为 Missing Asset 不再计入这些 Hash。
- **`Use_Legacy_Fog_Height`**：是否使用默认 Terrain Height 计算 Fog Falloff。false 时使用 Devkit Landscape Tile Limit。默认 true。
- **`Use_Legacy_Objects`**：过去控制是否从 `Objects.dat` 加载 Object。Devkit Object 已迁移进该文件，因此目前无效果。

> 上游原文：[mapping/level-config.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/mapping/level-config.rst)
