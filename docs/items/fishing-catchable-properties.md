---
title: 可钓取物属性
translation:
  source: items/fishing-catchable-properties.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 可钓取物属性

这些设置位于 Item 的 `Fishing_Catchable` 字典中，用于钓鱼 Challenge。

- **`Capture_Duration`** `float`：Item 保持在 Cursor 内多久算捕获，默认 2 秒。
- **`Escape_Duration`** `float`：多久后 Item 逃脱，默认 2 秒。
- **`Spring_Stiffness`** `float`：朝目标位置加速度倍率（受上限约束），默认 16。
- **`Spring_Damping`** `float`：降低朝目标位置的速度，默认 4。
- **`Min_Relocate_Interval`** `float`：目标位置改变前最少秒数，默认 1.5。
- **`Max_Relocate_Interval`** `float`：目标位置改变前最多秒数，默认 2。
- **`Max_Upward_Acceleration`** `float`：向上加速度上限，默认 1.5。
- **`Max_Downward_Acceleration`** `float`：向下加速度上限，默认 1.2。
- **`Max_Upward_Speed`** `float`：向上速度上限，默认 0.6。
- **`Max_Downward_Speed`** `float`：向下速度上限，默认 0.45。
- **`Upper_Restitution`** `float`：撞上顶部后保留多少速度，默认 0.6（60%）。
- **`Lower_Restitution`** `float`：撞到底部后保留多少速度，默认 0.4（40%）。
- **`Min_Target_Delta`** `float`：新目标位置至少距离当前多远，默认 0.3。
- **`Max_Target_Delta`** `float`：新目标位置最多距离当前多远，默认 0.4。
- **`Min_Target_Position`** `float` [0,1]：目标位置最小值，默认 0.1。
- **`Max_Target_Position`** `float` [0,1]：目标位置最大值，默认 0.9。

Vanilla Lobster 示例：

```text
Fishing_Catchable
{
    Min_Relocate_Interval 0.3
    Max_Relocate_Interval 1
    Max_Upward_Acceleration 1.3
    Max_Downward_Acceleration 1.75
    Max_Upward_Speed 0.5
    Max_Downward_Speed 1.2
    Upper_Restitution 0
    Lower_Restitution 2
    Min_Target_Delta 0.35
    Max_Target_Delta 0.4
    Min_Target_Position 0
    Max_Target_Position 0.4
    Capture_Duration 2.75
    Escape_Duration 1.25
    Spring_Stiffness 20
    Spring_Damping 4
}
```

> 上游原文：[items/fishing-catchable-properties.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/fishing-catchable-properties.rst)
