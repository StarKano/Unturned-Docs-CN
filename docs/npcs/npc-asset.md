---
title: NPC 角色类
translation:
  source: npcs/npc-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# NPC 角色类

基础字段：

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`NPC`。
- **`ID`** `uint16`：必须唯一。
- **`PlayerKnowsNameFlagID`** `uint16`：非 0 时，在指定 Bool Flag 变为 true 前，NPC Name 显示为 `???`。例如填 20，则直到 ID=20 的 `Flag_Bool` Reward 设为 true 才显示真实姓名。

## Clothing

以下字段接受 Item Legacy ID 或 GUID：

- **`Shirt`**
- **`Pants`**
- **`Hat`**
- **`Backpack`**
- **`Vest`**
- **`Mask`**
- **`Glasses`**

## Holiday Outfit

NPC 可以在指定 Seasonal Event 使用独立 Outfit。

### Halloween

设置 **`Has_Halloween_Outfit`** Flag 后，可使用：

- `Halloween_Shirt`
- `Halloween_Pants`
- `Halloween_Hat`
- `Halloween_Backpack`
- `Halloween_Vest`
- `Halloween_Mask`
- `Halloween_Glasses`

### Christmas / Festive

设置 **`Has_Christmas_Outfit`** Flag 后，可使用：

- `Christmas_Shirt`
- `Christmas_Pants`
- `Christmas_Hat`
- `Christmas_Backpack`
- `Christmas_Vest`
- `Christmas_Mask`
- `Christmas_Glasses`

全部 Holiday Clothing 字段都接受 Legacy ID 或 GUID。

## Appearance

在游戏 Appearance Menu 中，Mod 作者可以按 **Page Down** 把当前玩家外观复制到剪贴板。

- **`Face`** `int`：Face Image Index。
- **`Hair`** `int`：Hair Mesh Index。
- **`Beard`** `int`：Beard Mesh Index。
- **`Color_Skin`**：6 位 RGB Hex。
- **`Color_Hair`**：6 位 RGB Hex。
- **`Backward`** Flag：角色为左撇子。

## Pose / 装备

- **`Primary`** Legacy ID / GUID：背在背后、与脊柱平行的 Weapon。
- **`Secondary`** Legacy ID / GUID：挂在胯侧、与脊柱垂直的 Weapon。
- **`Tertiary`** Legacy ID / GUID：携带的非 Weapon Item。
- **`Equipped`** enum（`Primary`、`Secondary`、`Tertiary`）：指定哪个 Slot 的 Item 拿在手中，而不是挂在身上。
- **`Dialogue`** Legacy ID / GUID：交互时打开的 Dialogue Asset。
- **`Pose`** enum：`Asleep`、`Crouch`、`Passive`、`Prone`、`Rest`、`Sit`、`Stand`、`Surrender`、`Under_Arrest`。
- **`Pose_Head_Offset`** `float`：Head 相对 Body 的前后偏移（米）；正数向前，负数向后，默认 0.1。
- **`Pose_Lean`** `float`：[-1,1]。正数向 NPC 左侧倾斜，负数向右，默认 0。
- **`Pose_Pitch`** `float`：前后倾角（度）。>90 向前，<90 向后，默认 90。

## Conditions

NPC Character 可以绑定[条件](/npcs/conditions.html)，只在玩家满足条件时出现。

## 本地化

- **`Name`** `string`：Level Editor 中的 Object Name。
- **`Character`** `string`：交互界面显示的 Character Name。

> 上游原文：[npcs/npc-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/npcs/npc-asset.rst)
