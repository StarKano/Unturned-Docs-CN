---
title: 奖励（Rewards）
translation:
  source: npcs/rewards.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 奖励（Rewards）

Rewards 可由 NPC、Object 和 Item 授予。每组称为 **Rewards List**。

字段规则：
```text
RewardPrefix_#_PropertyName
```

大多数 Prefix 为 `Reward`。Quest 有 `Rewards` / `AbandonmentRewards`；Consumeable 使用 `Quest_Rewards`。

## 通用字段

- **`Rewards`** `byte`：Reward 数量。
- **`Reward_#_Type`**：Reward Type。
- **`Reward_#_GrantDelaySeconds`** `float`：延迟发放秒数，默认 -1。
- **`Reward_#_GrantDelayApplyWhenInterrupted`** `bool`：true 时即使死亡/断线也发放 Pending Reward；默认 false，死亡取消 Pending Reward。

Type 包括：
`Airdrop`、`Flag_Bool`、`Flag_Math`、`Flag_Short`、`Flag_Short_Random`、`Achievement`、`Currency`、`Cutscene_Mode`、`Effect`、`Event`、`Experience`、`Item`、`Item_Random`、`Hint`、`Player_Life_Food`、`Player_Life_Health`、`Player_Life_Stamina`、`Player_Life_Virus`、`Player_Life_Water`、`Player_Spawnpoint`、`Quest`、`Reputation`、`Rewards_List_Asset`、`Teleport`、`Vehicle`、`Zombie`、`Remove_Zombies`。

## Flag Rewards

### Flag_Bool
- `Reward_#_ID`：Flag ID。
- `Reward_#_Value`：true / false。

### Flag_Math
- `Reward_#_A_ID`：Flag A。
- `Reward_#_B_ID`：Flag B；没填时使用 `B_Value`。
- `Reward_#_B_Value` `int16`：B 不存在或 ID=0 时使用。
- `Reward_#_Operation`：`Addition`、`Assign`、`Division`、`Modulo`、`Multiplication`、`Subtraction`、`Random_Inclusive`、`Random_Exclusive`。

`Random_Inclusive` 包含 B；`Random_Exclusive` 排除 B（A=B 时忽略排除）。

### Flag_Short
- `Reward_#_ID`
- `Reward_#_Value` `int16`
- `Reward_#_Modification`：`Assign` / `Decrement` / `Increment`

### Flag_Short_Random
- `Reward_#_ID`
- `Reward_#_Min_Value`
- `Reward_#_Max_Value`
- `Reward_#_Modification`

## 其他 Rewards

### Achievement
- `Reward_#_ID`：可授予的 Achievement ID。

### Airdrop
- `Reward_#_Use_Random_Airdrop_Node`：随机 Airdrop Node。
- `Reward_#_Cargo`：可选 Spawn Table GUID/ID。
- `Reward_#_Spawnpoint`：指定 Node Name。

### Currency
- `Reward_#_GUID`：Currency GUID。
- `Reward_#_Value`：金额。

### Cutscene_Mode
隐藏第一人称 Viewmodel 并禁用射击等部分 Action。会保存/加载，但死亡时重置。
- `Reward_#_Value`：是否启用。

### Effect
- `Reward_#_GUID`：Effect Asset Pointer。
- `Reward_#_Spawnpoint`：关卡编辑器中设置的 Spawnpoint Name，例如 `Liberator_Jet`。
- `Reward_#_AtPlayerPosition`：在玩家位置生成。
- `Reward_#_IsReliable`：Multiplayer 是否保证复制，默认 true。
- `Reward_#_RelevantDistance`：覆盖默认 128m，默认 -1。
- `Reward_#_OnlyRelevantToInstigator`：仅触发玩家可见，优先于 RelevantDistance。

### Event
- `Reward_#_ID`：Event ID，可由 C# `NPCEventManager` 或 NPC Global Event Hook 监听。
- `Reward_#_Replicate`：Client 也触发，默认 true；false 仅 Authority。
- `Reward_#_InstigatorOnly`：只给触发玩家运行，优先 Replicate。

### Experience
- `Reward_#_Value`：经验值。

### Item
- `Reward_#_ID`：Item ID。
- `Reward_#_Amount`：数量。
- `Reward_#_Auto_Equip`：尽量自动装备，默认 false。
- `Reward_#_Ammo`：覆盖枪械弹药数量。
- `Reward_#_Barrel`、`Reward_#_Grip`、`Reward_#_Magazine`、`Reward_#_Sight`、`Reward_#_Tactical`：分别覆盖奖励物品上的枪口、握把、弹匣、瞄具与战术附件。
- `Reward_#_Origin`：[EItemOrigin](/data/enum/eitemorigin.html)，默认 `Craft`；设为 `Admin` 时以满品质生成。

### Item_Random
- `Reward_#_ID`：Spawn Table ID。
- `Reward_#_Amount`
- `Reward_#_Auto_Equip`
- `Reward_#_Origin`：默认 `Craft`；设为 `Admin` 时以满品质生成。

### Hint
- `Reward_#_Text`：无 Localization 时的 Debug Text。
- `Reward_#_Duration`：默认 2 秒。

::: note
Multiplayer 若要按玩家语言显示 Hint，Owner Asset 加：
```text
Keep_Localization_Loaded true
```
否则使用 Server Language。
:::

### Player Life
以下 `Reward_#_Value` 均可为负数：
- `Player_Life_Food`
- `Player_Life_Health`
- `Player_Life_Stamina`
- `Player_Life_Virus`
- `Player_Life_Water`

### Player_Spawnpoint
`Reward_#_ID` 可填写 Spawnpoint Node ID 或 Map Location Node Name；跨 Session 保存。留空移除覆盖。`SetNpcSpawnId` 可测试。

### Quest
- `Reward_#_ID`：Quest ID。

### Remove_Zombies
- `Reward_#_Zombie`：Zombie Type，`None`=全部。
- `Reward_#_LevelTableOverride`：Zombie Table ID，默认 -1=全部。
- `Reward_#_Nav`：Navmesh Index，默认 255=全部。

### Reputation
- `Reward_#_Value`：Reputation。

### Rewards_List_Asset
- `Reward_#_GUID`：Rewards List Asset，或可解析为 Rewards List 的 Spawn Table。

### Teleport
- `Reward_#_Spawnpoint`：目标 Spawnpoint。

### Vehicle
- `Reward_#_ID`：Vehicle。
- `Reward_#_Spawnpoint`：生成位置，未填则在 NPC 上方。
- `Reward_#_PaintColor`：覆盖载具颜色，并跳过 Vehicle Redirector 的 `SpawnPaintColor` 和载具资源的 `DefaultPaintColors`。

### Zombie

在命名 Spawnpoint 重新生成 Zombie；死亡 Zombie 不够时会转换存活 Zombie 并 Teleport。

::: note
Spawnpoint 必须位于 Navmesh。
:::

- `Reward_#_Zombie`：Zombie Type。
- `Reward_#_Spawnpoint`：Node Name；同名多个时随机。
- `Reward_#_LevelTableOverride`：Zombie Type ID，默认 -1。
- `Reward_#_SpawnQuantity`：数量。
- `Reward_#_CooldownId`：全局共享 Cooldown 名。
- `Reward_#_CooldownDuration`：再次生成前等待秒数。

## 本地化

**`Reward_#`**：UI 中 Reward Name。

Localization Key 必须使用当前 Rewards List Prefix，例如 Interactable Object 使用 `Interactability_Reward_#`。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/npcs/rewards.html)
