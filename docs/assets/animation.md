---
title: 动画
translation:
  source: assets/animation.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 动画

Unturned 的角色骨架并不好处理，因此官方建议尽量复用已有动画。

## 导出

1. 场景单位使用 **Metric**，Unit Scale 设为 `1.0`，Length 设为 **Meters**。
2. 选择 **Skeleton** 节点。
3. **File > Export > FBX**。
4. **Selected Objects**：`True`。
5. **Apply Scale**：`FBX Units Scale`。
6. **Add Leaf Bones**：`False`。
7. **Primary Bone Axis**：`+X`。
8. **Secondary Bone Axis**：`-Y`。

Unity 中的 `Item.prefab` 会挂到左手或右手 Hook 上，本地旋转为 `(0, 0, 90)`。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/assets/animation.html)
