---
title: 尸潮信标类（Beacon Asset）
translation:
  source: items/beacon-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 尸潮信标类（Beacon Asset）

Beacon 由 `ItemBeaconAsset` 创建。放置后启动 Zombie Horde Event；玩家需要在 Beacon 被摧毁前击杀指定数量 Zombie。继承 BarricadeAsset。

- `GUID`
- `Type Beacon`
- `Useable Barricade`
- `Build Beacon`
- `ID`

## 专属属性

- **`Wave`** `uint16`：完成 Beacon 需要击杀的 Zombie 数量。区域 Zombie 不够时会持续 Respawn；最后生成的一只保证是 Mega Zombie。默认 0。
- **`Rewards`** `byte`：成功完成后掉落多少 Item。`Enable_Participant_Scaling true` 时根据参与人数缩放。默认 0。
- **`Reward_ID`** `uint16`：奖励 Item 使用的 Spawn Table Legacy ID，默认 0。
- **`Enable_Participant_Scaling`** `bool`：是否按初始参与玩家数缩放 Zombie Health 与 Reward，默认 true。
  - Zombie Health 线性缩放：约 `Initial Participants × 1.5`。
  - Reward 有递减收益：约 `7 × sqrt(Initial Participants)`。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/beacon-asset.html)
