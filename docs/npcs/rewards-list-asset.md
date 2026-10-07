---
title: 奖励列表资源
translation:
  source: npcs/rewards-list-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 奖励列表资源

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`RewardsList`。

`Rewards_List_Asset` NPC Reward 可以：

1. 直接授予某个 Rewards List Asset；或
2. 指向一个 [Spawn Table Asset](/assets/spawn-asset.html)，由 Spawn Table 最终解析出 Rewards List。

例如可以随机选择多组 Rewards List，每组都给玩家一把不同 Gun 以及与之配套的 Ammo。

Level Editor 中放置的 **Rewards List Volume** 也可以引用此 Asset。玩家进入 Volume 且满足 Conditions 后，即可发放 Rewards。

Reward 是否发放由 [Conditions](/npcs/conditions.html) 决定，具体奖励内容使用 [Rewards](/npcs/rewards.html)。

::: tip
游戏内可用：
```text
/RunRewardList (guid)
```
快速测试某个 Reward List。
:::

> 上游原文：[npcs/rewards-list-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/npcs/rewards-list-asset.rst)
