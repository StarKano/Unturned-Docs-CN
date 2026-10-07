---
title: 任务资源（Quest Asset）
translation:
  source: npcs/quest-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 任务资源（Quest Asset）

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Quest`。
- **`ID`** `uint16`：必须唯一。

## Conditions / Rewards

Quest 在满足 [Conditions](/npcs/conditions.html) 时可以交付，玩家交付后获得 [Rewards](/npcs/rewards.html)。

Quest 有两组 Reward List：

1. **`Rewards`**：正常完成 Quest 时发放。
2. **`AbandonmentRewards`**：Quest 在**未完成**情况下被移除时发放；玩家正常完成 Quest 时不会发放这一组。

## 本地化

- **`Name`** `string`：UI 中的 Quest Name。
- **`Description`** [Rich Text](/data/rich-text.html)：UI 中 Quest Description。

> 上游原文：[npcs/quest-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/npcs/quest-asset.rst)
