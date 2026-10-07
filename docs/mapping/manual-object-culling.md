---
title: 手动对象裁剪
translation:
  source: mapping/manual-object-culling.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 手动对象裁剪

本文面向地图开发者，介绍 **Manual Object Culling Volume**。

减少需要绘制的 Object 通常有利于性能。Culling Volume 可以覆盖内部 Object 的绘制距离，避免它们在实际上不需要时仍被远距离渲染。

![Manual Object Culling Volume 示例](/img/CullingVolumes.jpg)

*关卡中的 Culling Volume 示例。*

例如 Vanilla Chair 默认需要考虑被放在户外，所以可从很远处看到；但如果它位于 Office Building 内，只需玩家靠近建筑时才显示。

代价也很明显：用望远镜放大大多数建筑时，容易看出室内家具没有绘制。官方尝试过“Zoom 时启用视野中心附近 Object”等方案，但效果不理想，最终认为性能收益更值得。

Large Object（例如 Shipping Container）通常因为作为 Cover 的玩法重要性而默认排除；许多 Building 的 Culling Volume 也会稍微内缩，避免把窗口附近 Object 一并裁掉。

## 编辑 Volume

开启 **Preview Culling** 可以隐藏所有 Culling Volume 内的 Object，方便检查遗漏。

地图加载时系统会扫描每个 Volume 内的 Object。在 Editor 修改后可点击 **Refresh Objects** 重新寻找全地图 Object / Volume。

更新 Culling Volume 本身也有性能开销，因此大量很小的 Volume 反而可能使性能更差，应实际对比。

## 排除指定 Object

若某 Asset 永远不应由 Culling Volume 管理，在 `.dat` 加：

```text
Exclude_From_Culling_Volumes true
```

例如 Germany 的 Aerospace Facility 被排除，这样手工 Volume 可以隐藏 Shipping Container 等大物体，而不会误隐藏整座巨大设施。

由 Object 自身拥有的 Volume 会自动排除 Owner Object。

## Object 自带的 Volume

多数 Vanilla Building 自带默认 Culling Volume。它们不能在 Level Editor 直接选择，因为不是保存在 Level 中；实际上这些 Volume 自 2014 年起就一直在“隐形”隐藏室内 Object，也是 Manual Culling Volume 的前身。

公开这些 Volume 的一个目标就是让地图作者终于可以在 Editor 看见它们，因为过去 Mod Object 作者如果不知道它们存在，很容易遇到难以理解的隐藏问题。

这一部分未来仍可能改进，因此官方目前既不明确推荐、也不反对给自定义 Object 添加类似 Volume。

Object `.dat` 可使用这些历史较久、命名不够理想的字段自动创建 Volume：

- **`LOD`** enum：`Mesh` 或 `Area`。Mesh 使用 Renderer Bounds；Area 使用 Occlusion Area Component Size。Occlusion Area 本身没有特殊功能，当初只是借用一个 Unity 中方便编辑、但其他地方没用到的 Component。
- **`LOD_Bias`** `float`：默认 64m Culling Distance 的倍率。例如 2 = 最远约 128m。
- **`LOD_Center_X/Y/Z`** `float`：Volume Position 相对 Object Transform 的三轴偏移。
- **`LOD_Size_X/Y/Z`** `float`：Mesh 模式下对计算出的 Volume Size 的偏移。许多 Vanilla Building 的平屋顶会使用负 Z Offset，把屋顶 HVAC 排除在 Volume 外。

## 测试性能收益

启动参数：

```text
-DisableCullingVolumes
```

可以完全禁用 Culling Volume，用来对比性能差异。Seattle 这类密集区域通常最容易观察到收益。

> 上游原文：[mapping/manual-object-culling.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/mapping/manual-object-culling.rst)
