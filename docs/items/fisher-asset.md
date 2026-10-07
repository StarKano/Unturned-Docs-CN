---
title: 钓鱼竿资源（Fisher Asset）
translation:
  source: items/fisher-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 钓鱼竿资源（Fisher Asset）

Fisher / Fishing Pole 由 `ItemFisherAsset` 创建，可用于钓鱼。继承 ItemAsset。

必需字段：

- `GUID`
- `Type Fisher`
- `Useable Fisher`
- `ID`

## 专属属性

- **`Reward_Experience_Min`** `int32`：成功钓取时最低 Experience（包含边界），默认 3。
- **`Reward_Experience_Max`** `int32`：最高 Experience（包含边界），默认 3。
- **`Reward_ID`** `uint16`：成功钓取后从哪个 Spawn Table 生成 Reward。
- **Quest Rewards**：Fishing Pole 可使用 [Rewards](/npcs/rewards.html)，字段前缀 `Quest_`，例如 `Quest_Rewards 1`。
- **`Fish_Bite_Interval_Multiplier`** `float`：鱼咬钩前等待时间倍率，默认 1。
- **`FishingRewardMode`** enum：`Rod` 或 `WaterVolumes`。为向后兼容默认 `Rod`。
  - `Rod`：Reward 由 Fishing Rod 自身定义，忽略 Water Volume。
  - `WaterVolumes`：使用 Water Volume（或 Level 默认）Reward；如果 Level 不支持，则回退 Rod Reward。
- **`CatchChallenge_Enabled`** `bool`：咬钩后是否必须完成 Catch Challenge，默认 false。
- **`CatchChallenge_CursorSize`** `float`：捕获窗口尺寸，默认 0.2。
- **`CatchChallenge_Gravity`** `float`：未按输入时向下加速度，默认 1。
- **`CatchChallenge_Acceleration`** `float`：按住输入时向上加速度，默认 1。
- **`CatchChallenge_UpperRestitution`** `float`：撞上顶部后保留速度比例，默认 0.5。
- **`CatchChallenge_LowerRestitution`** `float`：撞到底部后保留速度比例，默认 0.5。
- **`CatchChallenge_CaptureSpeed`** `float`：Item 位于 Cursor 内时捕获速度倍率，默认 1。
- **`CatchChallenge_EscapeSpeed`** `float`：Item 位于 Cursor 外时失败速度倍率，默认 1。

> 上游原文：[items/fisher-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/fisher-asset.rst)
