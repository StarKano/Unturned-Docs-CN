---
title: 条件（Conditions）
translation:
  source: npcs/conditions.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 条件（Conditions）

Conditions 可用于 NPC、Interactable Object 和 Item Blueprint。每一组条件称为 **Conditions List**，从 `Conditions` 字段开始。

字段规则：

```text
ConditionPrefix_#_PropertyName
```

大多数 Prefix 是 `Condition`，例如 `Condition_#_Type`；Blueprint 等场景会使用自己的前缀。

## 通用字段

- **`Conditions`** `byte`：条件总数。
- **`Condition_#_Type`**：Condition Type，Index 从 0 开始。
- **`Condition_#_Reset`** Flag：完成后重置到相当于 0 的状态。
- **`Condition_#_Logic`**：`Less_Than`、`Less_Than_Or_Equal_To`、`Equal`、`Not_Equal`、`Greater_Than_Or_Equal_To`、`Greater_Than`。
- **`Condition_#_UI_Requirements`** `string`：逗号分隔的 Condition Index；仅这些条件都完成时显示当前条件。

支持 Type：
`Compare_Flags`、`Date_Counter`、`Flag_Bool`、`Flag_Short`、`Currency`、`Experience`、`Item`、`Kills_Animal`、`Kills_Horde`、`Kills_Object`、`Kills_Player`、`Kills_Tree`、`Kills_Zombie`、`Player_Life_Food`、`Player_Life_Health`、`Player_Life_Stamina`、`Player_Life_Virus`、`Player_Life_Water`、`Quest`、`Reputation`、`Skillset`、`Holiday`、`Is_Full_Moon`、`Time_Of_Day`、`Volume_Overlap`、`Weather_Blend_Alpha`、`Weather_Status`。

## Flags

### Compare_Flags

比较 Flag A 与 Flag B：

- `Condition_#_A_ID` `uint16`
- `Condition_#_Allow_A_Unset` `bool`
- `Condition_#_B_ID` `uint16`
- `Condition_#_Allow_B_Unset` `bool`
- 最终按 `Logic` 比较。

### Date_Counter

每个游戏内早晨，世界 Date Counter +1；新存档从 0 开始。计算 `dateCounter % Divisor` 后与 `Value` 比较。

例如每 5 天循环的第 4、5 天触发：

```text
Divisor 5
Value 3
Logic Greater_Than_Or_Equal_To
```

- `Condition_#_Value` `int64`
- `Condition_#_Divisor` `int64`

### Flag_Bool

- `Condition_#_ID` `uint16`
- `Condition_#_Value` `bool`
- `Condition_#_Allow_Unset` Flag

### Flag_Short

- `Condition_#_ID` `uint16`
- `Condition_#_Value` `int16`
- `Condition_#_Allow_Unset` Flag

## 玩家相关

### Currency
- `Condition_#_GUID`：Currency GUID。
- `Condition_#_Value` `int`：目标金额。

### Experience
- `Condition_#_Value` `int`：目标经验。

### Item
- `Condition_#_ID` `uint16`：Item ID。
- `Condition_#_Amount` `int`：所需数量。

### Kills_Animal
- `Condition_#_ID`：进度 Short Flag。
- `Condition_#_Value`：目标击杀数。
- `Condition_#_Animal`：指定 Animal ID。

### Kills_Horde
- `Condition_#_ID`：进度 Flag。
- `Condition_#_Value`：目标 Beacon 完成数。
- `Condition_#_Nav`：指定 Navmesh Index。

### Kills_Object
- `Condition_#_ID`：进度 Flag。
- `Condition_#_Value`：目标摧毁数。
- `Condition_#_Object`：Object GUID。
- `Condition_#_Nav`：Navmesh Index。

### Kills_Player
- `Condition_#_ID`
- `Condition_#_Value`：目标 Player Kill 数。

### Kills_Tree
- `Condition_#_ID`
- `Condition_#_Value`：目标 Resource 摧毁数。
- `Condition_#_Tree`：Resource GUID。

### Kills_Zombie

- `Condition_#_ID`：进度 Flag。
- `Condition_#_Value`：目标 Zombie Kill 数。
- `Condition_#_Zombie`：`Acid`、各类 `Boss_*`、`Burner`、`Crawler`、`DL_*_Volatile`、`Flanker_*`、`Mega`、`None`、`Normal`、`Spirit`、`Sprinter`。
- `Condition_#_Spawn_Quantity`：强制生成数量，默认 1。
- `Condition_#_Nav`：Navmesh Index。
- `Condition_#_Radius`：玩家周围计入击杀的半径；未指定 Nav 且未填 Radius 时默认 512m。
- `Condition_#_MinRadius`：Zombie 至少离玩家多少米。
- `Condition_#_Spawn` Flag：进入区域时强制生成，离开区域删除。
- `Condition_#_LevelTableOverride`：Level Editor Zombie Type ID，默认 -1。

### Player Life

以下都使用 `Condition_#_Value`：
- `Player_Life_Food`
- `Player_Life_Health`
- `Player_Life_Stamina`
- `Player_Life_Virus`（当前 Immunity）
- `Player_Life_Water`

### Quest

- `Condition_#_ID`：Quest ID。
- `Condition_#_Status`：`None`、`Active`、`Ready`、`Completed`。
- `Condition_#_Ignore_NPC` Flag：不要求玩家正在与 20m 内 NPC 对话即可完成/交付。

### Reputation

- `Condition_#_Value`：目标 Reputation。

### Skillset

`Condition_#_Value`：
`Army`、`Camp`、`Chef`、`Farm`、`Fire`、`Fish`、`Medic`、`None`、`Police`、`Thief`、`Work`。

可用于按玩家 Skillset 提供不同 Questline、Dialogue 或 Blueprint。

## 世界相关

### Holiday
- `Condition_#_Value`：[ENPCHoliday](/data/enum/enpcholiday.html)。

### Is_Full_Moon
- `Condition_#_Value` `bool`：true=Full Moon 时通过；false=非 Full Moon 时通过。

### Time_Of_Day
- `Condition_#_Second` `int`：24 小时制秒数。0=当天开始 Midnight，43200=Noon，86400=当天结束 Midnight。会考虑 Level Bias 和 Day/Night Cycle Length。

### Volume_Overlap
- `Condition_#_VolumeID`：Level Editor Volume ID。
- `Condition_#_PlayerCount`：匹配 Volume 内目标玩家数。同 ID Volume 会合并。

### Weather_Blend_Alpha

比较 Weather Intensity Blend。例如雨强度超过 0.5 时才卖 Umbrella。

它支持 Visibility，但比 Weather Status 成本更高，因为 Intensity 每变 0.01 都会更新 Listener。

- `Condition_#_GUID`：Weather GUID。
- `Condition_#_Value` `float` [0,1]：目标 Blend。

### Weather_Status

- `Condition_#_GUID`：Weather GUID。
- `Condition_#_Value`：`Active`、`Fully_Transitioned_In`、`Fully_Transitioned_Out`、`Transitioning`、`Transitioning_In`、`Transitioning_Out`。

## 本地化

**`Condition_#`**：UI 中 Condition Name。

> 上游原文：[npcs/conditions.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/npcs/conditions.rst)
