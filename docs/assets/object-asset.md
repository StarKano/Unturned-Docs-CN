---
title: 对象资源（Object Asset）
translation:
  source: assets/object-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 对象资源（Object Asset）

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`** EObjectType：决定排序、寻路、碰撞和裁剪。Small 主要用于杂物/装饰，Medium 填充场景布局，Large 构成主要关卡结构。`NPC` 类型还应配合 NPC Object 文档。
- **`ID`** `uint16`：必须唯一。

## 通用属性

- **`Add_Kill_Triggers`** `bool`：在 Object 内增加 Kill Volume，杀死卡进内部的玩家，防止钻入 Boulder 等对象内部建家。
- **`Add_Night_Light_Script`** Flag：查找名为 `Light` 的 Transform，夜间开启、白天关闭。
- **`Allow_Structures`** Flag：允许玩家在 Object 上方建 Structure，例如假草地 Object。
- **`Causes_Fall_Damage`** `bool`：玩家落到该 Object 上是否受 Fall Damage，默认 true。
- **`Chart`** enum：Object 遮挡 Terrain 时在 Chart View 的取色类别。Large 默认取 Large Pixel，Medium 默认取 Medium Pixel；NPC/Decal 默认 Ignore，其他默认 None。
- **`Christmas_Redirect`** GUID：Festive Holiday 显示的替代 Object。
- **`Collision_Important`** Flag：禁止关闭碰撞。`Type Large` 自动包含。
- **`Exclude_From_Level_Batching`** `bool`：排除 Level Batching；复杂 Unity Event 场景有用。Decal/NPC 默认 true。
- **`Foliage`** GUID：Foliage Asset GUID。可用于假草地等，希望像 Terrain Material 一样在表面 Bake Foliage 的 Object。
- **`Fuel`** Flag：可抽取 Fuel。已弃用，改用 `Interactability Fuel`。
- **`Halloween_Redirect`** GUID：Halloween 替代 Object。
- **`Has_Clip_Prefab`** `bool`：是否包含 `Clip.prefab`。如果服务器端和客户端应使用同一 Prefab，则设 false。多数官方资源设 false。默认 true。
- **`Holiday_Restriction`** enum：仅指定 Holiday 可见，并把 Holiday 名追加到友好名称。默认 None。
- **`Is_Gore`** `bool`：玩家关闭 “Show Blood Splatters” 后是否隐藏。
- **`Is_Clutter`** `bool`：默认 false。true 时玩家关闭 “Load Clutter” 后不实例化。

::: warning
可碰撞 Object 绝不能设为 Clutter，否则多人中关闭 Clutter 的客户端会在这些碰撞处出现 Rubberband。
:::

- **`Landmark_Quality`** enum（`Off`、`Low`、`Medium`、`High`、`Ultra`）：玩家 Landmarks 画质至少达到哪个级别才显示远距离低模。默认 Low。
- **`Load_Nav_On_Server`** `bool`：单人和 Dedicated Server 是否实例化 `Nav` GameObject。适合需要参与 Navmesh Baking、但运行时不直接碰撞 Zombie 的 Object。Medium/Large 默认 true。
- **`Load_Nav_In_Editor`** `bool`：Level Editor 是否实例化 `Nav`。适合运行时要与 Zombie 碰撞、但不参与 Navmesh Baking 的对象。Medium/Large 默认 true。
- **`Material_Palette`** GUID：Material Palette Asset GUID。
- **`Refill`** Flag：可抽水，已弃用，改用 `Interactability Water`。
- **`Snowshoe`** Flag：Bake Material 时不留下 Footprint。
- **`Soft`** Flag：Vehicle 撞击该 Object 不应受伤。
- **`Use_Water_Height_Transparent_Sort`** Flag：适合玻璃等透明对象。
- **`Exclude_From_Satellite_Capture`** `bool`：GPS/Satellite View 渲染时隐藏。`Holiday_Restriction != None` 时默认 true。

## Decal

以下字段要求 `Type Decal`：

- **`Decal_Alpha`** Flag：Decal Texture 有透明通道。
- **`Decal_X`** `float`：X 轴 Scale。
- **`Decal_Y`** `float`：Y 轴 Scale。
- **`Decal_LOD_Bias`** `float`：LOD 切换距离倍率，默认 1。

## Interior Culling

- **`Exclude_From_Culling_Volumes`** `bool`：true 时不受 Culling Volume 管理。例如 Germany 航天设施被排除，方便手工 Volume 隐藏集装箱等大型物体，而不会误隐藏整个设施。
- **`LOD`** enum（`None`、`Mesh`、`Area`）：Interior Culling 判断方式。`Mesh` 用 Mesh Bounds；凹形对象可改用 `Area` 并添加多个 Occlusion Area。
- **`LOD_Bias`** `float`：Interior Culling 阈值距离倍率，需要设置 LOD。
- **`LOD_Center_X`、`LOD_Center_Y`、`LOD_Center_Z`** `float`：裁剪体积在对应局部坐标轴上的位置偏移，均要求先设置 `LOD`。
- **`LOD_Size_X`、`LOD_Size_Y`、`LOD_Size_Z`** `float`：裁剪体积在对应轴上的尺寸，均要求先设置 `LOD`。

## Interactables

**`Interactability`** enum：`None`、`Binary_State`、`Dropper`、`Note`、`Water`、`Fuel`、`Rubble`、`NPC`、`Quest`、`Dialogue`。

所有 `Interactability_*` 都要求先设置此字段。`Type NPC` 默认 `NPC`，其他默认 `None`。

- `Binary_State`：交互时在两种状态间切换，例如门开/关。
- `Dropper`：交互后生成物品。
- `Note`：显示文本。
- `Water` / `Fuel`：抽取水或燃料。
- `Rubble`：可破坏；更推荐使用独立 Rubble 属性。
- `NPC`：访问 Dialogue、Quest、Vendor。
- `Quest`：可交互，但本身没有额外功能。
- `Dialogue`：打开类似 NPC 的 Dialogue Screen，但使用非 NPC 外观和自定义交互文本。

::: note
Interactability 可以做可破坏 Object，但更推荐 Rubble，因为 Rubble 更专用，并允许对象同时具备其他交互能力。
:::

### Interactability 属性

- **`Interactability_Animation_Component_Path`** `string`：仅 Binary_State。相对 Root、带 Animation Component 的 Transform Path，默认 `Root`。
- **`Interactability_Blade_ID`** `byte`：Rubble 模式下，武器只有匹配 `BladeID_#` 才能伤害。默认 0。
- **`Interactability_Delay`** `float`：再次可交互前的冷却秒数。
- **`Interactability_Dialogue`** GUID：Dialogue 模式打开的 Dialogue Asset。默认用 Object Name 当角色名；可在本地化用 `Dialogue_Name` 覆盖。
- **`Interactability_Drops`** `byte`：Dropper 模式掉落 Item 数量，配合 `Interactability_Drop_#`。默认 0；推荐改用 `Interactability_Reward_ID`。
- **`Interactability_Drop_#`** `uint16`：要掉落的 Item ID。
- **`Interactability_Editor`** enum（`None`、`Toggle`）：Level Editor 中显示哪个状态。Toggle 显示替代状态，默认 None。
- **`Interactability_Effect`** GUID / `uint16`：交互时播放的 Effect。Rubble 模式则每破坏一个 Section 播放。
- **`Interactability_Emissive_Material_Mode`** enum（`Auto`、`None`）：仅 Binary_State。默认 Auto，会给 `Toggle` 子 Renderer 创建 Material Instance；缺点是被排除出 Level Batching Texture Atlas。None 不创建。
- **`Interactability_Finale`** GUID / `uint16`：Rubble 全部 Section 被摧毁时播放的 Effect；设置后完全摧毁时也会隐藏 Dead Section。
- **`Interactability_Health`** `uint16`：Rubble 每个 Section 生命值，默认 0。
- **`Interactability_Hint`** enum（`Door`、`Switch`、`Fire`、`Generator`、`Use`、`Custom`）：交互提示本地化 Key。Custom 时与本地化 `Interact` 配合显示自定义文本。
- **`Interactability_Invulnerable`** Flag：Rubble 模式下，低威力且没有 `Invulnerable` Flag 的 Weapon 无法伤害。
- **`Interactability_Nav`** enum（`None`、`On`、`Off`）：Binary State 如何控制 `Nav` GameObject。None 不影响；On 表示 On State 激活、Off State 禁用；Off 反过来。

::: note
`Interactability_Nav` 与 `Rubble_Nav_Mode` 同时使用时，只有两者都要求激活时 Nav 才会激活（AND）。
:::

- **`Interactability_Power`** enum（`None`、`Toggle`、`Stay`）：电力要求。None 不需要电；Toggle 表示交互瞬间必须有电，但之后可保持状态；Stay 表示持续有电才能保持开启。例如门可用 Toggle，路灯适合 Stay。默认 None。
- **`Interactability_Proof_Explosion`** Flag：Rubble 模式免疫 AoE 爆炸伤害。
- **`Interactability_Remote`** Flag：禁止玩家通过按钮提示直接交互。
- **`Interactability_Reset`** `float`：交互对象 Reset 或被摧毁对象 Respawn 的延迟秒数。
- **`Interactability_Resource`** `uint16`：Fuel/Water 模式存储多少单位资源，默认 0。
- **`Interactability_Reward_ID`** `uint16`：Rubble 奖励使用的 Item Spawn Table ID，默认 0。
- **`Interactability_RewardItem_Origin`**：Dropper 模式覆盖掉落 Item 状态。例如 Origin Admin 会满耐久生成。默认 Nature。
- **`Interactability_Rewards_Min`** `byte`：Rubble 最少奖励掉落，默认 1。
- **`Interactability_Rewards_Max`** `byte`：最多奖励掉落，默认 1。
- **`Interactability_Reward_Probability`** `float`：Rubble 获得奖励概率（小数），默认 1。
- **`Interactability_Reward_XP`** `uint32`：Rubble 被摧毁时奖励经验。
- **`Interactability_Text_Lines`** `uint16`：Note 模式文本行数，与本地化 `Interactability_Text_Line_#` 配合，默认 0。

## Rubble

- **`Rubble`** enum（`None`、`Destroy`）：破坏模式，目前实际可用选项是 Destroy。所有 `Rubble_*` 要求先设置。
- **`Rubble_All_Sections_Destroyed_Alert_Radius`** `float`：全部 Section 摧毁时惊动附近敌人的半径。
- **`Rubble_Blade_ID`** `byte`：只有匹配 `BladeID_#` 的 Weapon 才能伤害，默认 0。
- **`Rubble_Can_Zombies_Damage`** `bool`：true 时 Zombie 在被挡路时可攻击，默认 false。
- **`Rubble_Editor`** enum（`Alive`、`Dead`）：Editor 中显示完整还是完全摧毁状态，默认 Alive。
- **`Rubble_Effect`** GUID / `uint16`：单个 Section 摧毁时播放 Effect。
- **`Rubble_Finale`** GUID / `uint16`：全部 Section 摧毁时播放 Effect；设置后 Dead Section 最终也会隐藏。
- **`Rubble_Health`** `uint16`：每个 Section 生命值，默认 0。
- **`Rubble_Invulnerable`** Flag：低威力且无 `Invulnerable` Weapon 无法伤害。
- **`Rubble_Nav_Mode`** enum（`Unaffected`、`DeactivateIfAllDead`）：默认 Unaffected。后者在所有 Section 摧毁后关闭 `Nav`。

::: note
与 `Interactability_Nav` 同用时，同样按 AND 判断。
:::

- **`Rubble_Proof_Explosion`** Flag：免疫 AoE 爆炸。
- **`Rubble_Reset`** `float`：Respawn 延迟秒数。
- **`Rubble_Respawn_All_Sections_Simultaneously`** `bool`：true 时所有 Section 同时重生，默认 false。
- **`Rubble_Reward_ID`** `uint16`：奖励 Spawn Table ID，默认 0。
- **`Rubble_Rewards_Min`** `byte`：最少掉落，默认 1。
- **`Rubble_Rewards_Max`** `byte`：最多掉落，默认 1。
- **`Rubble_Reward_Probability`** `float`：奖励概率，默认 1。
- **`Rubble_Reward_XP`** `uint32`：完全摧毁奖励经验。
- **`Rubble_Section_Destroyed_Alert_Radius`** `float`：单个 Section 摧毁时惊动敌人半径；最后一个 Section 使用 All Sections 字段。
- **`Rubble_Zombie_Damage_Multiplier`** `float`：当 Zombie 可攻击时的伤害倍率。

## Conditions / Rewards

标准 NPC `Conditions` / `Condition_#` 可控制 Object 可见性，例如完成指定 Quest 后才显示。

交互行为也可绑定 Condition/Reward，用 `Interactability_` 前缀，例如 `Interactability_Conditions`、`Interactability_Reward_#`，从而做到“任务进行到某阶段可交互，交互后完成任务”等逻辑。

## 本地化

- **`Name`** `string`：Object UI 名称。
- **`Interact`** `string`：`Interactability_Hint Custom` 时显示的交互提示。
- **`Interactability_Text_Line_#`** Rich Text：Note 模式的每一行文本，与 `Interactability_Text_Lines` 配合。
- **`Dialogue_Name`** `string`：Dialogue 中角色名，默认 Object Name。

> 上游原文：[assets/object-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/object-asset.rst)
