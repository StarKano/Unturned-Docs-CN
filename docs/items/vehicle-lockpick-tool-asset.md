---
title: 载具开锁工具类
translation:
  source: items/vehicle-lockpick-tool-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 载具开锁工具类

由 `ItemVehicleLockpickToolAsset` 创建，用于解锁 Vehicle。继承 [ToolAsset](/items/tool-asset.html)。

## 专属属性

- **`FailureProbability`** `float`：开锁失败的归一化概率，默认 0。失败时播放 `Use_Failure` 动画，而不是 `Use`。
- **`FailureEffect`** [Asset Pointer](/data/asset-ptr.html)：开锁失败时播放的 Effect。

> 上游原文：[items/vehicle-lockpick-tool-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/vehicle-lockpick-tool-asset.rst)
