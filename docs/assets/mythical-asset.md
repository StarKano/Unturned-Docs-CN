---
title: Mythical 特效类
translation:
  source: assets/mythical-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Mythical 特效类

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Mythic`。
- **`ID`** `uint16`：必须唯一。

::: note
截至 2025-02-04，Mythical 特效还不能作为普通 Mod 自定义。本页主要面向参与 Curated Update 的物品作者，也为未来开放源码做准备。
:::

![Mythical Effect Transform 示例](/img/EffectTransform.png)

*示例：“Effect” Transform 的位置与朝向。*

测试时，建议在 Unity Editor 中把 Mythical 挂到某个物品的 `Effect` Transform，再 Reset Local Transform，方便预览游戏中的效果。

## Unity Prefabs

- **`System_Area`**：会实例化多次覆盖较大区域。Mythical Shirt/Pants 会把它们挂到角色骨骼，Mythical Vehicle Skin 会挂到车体多个表面点，因此不要依赖固定朝向。Layer 应为 **Enemy**。
- **`System_Hook`**：挂到饰品的 `Effect` Prefab。Layer 应为 **Enemy**。
- **`System_Third`**：挂到第三人称武器皮肤。与饰品不同，这里 **+Z 向前、+Y 向上**。可适当增大粒子以便肩后视角可见；Emission 常用 25×25×50 cm Box。Layer 为 **Item**。
- **`System_First`**：挂到第一人称武器皮肤。粒子应更小，并尽量避开瞄准方向以免遮挡。通常粒子尺寸约为第三人称的一半，但 Emission Shape 尺寸相同。Layer 为 **Viewmodel**。

饰品 `Effect` 的方向约定是：**+Z 向上，+Y 向前**。

## 本地化

- **`Particle_Tag_Name`** `string`：当带该特效的 Mythical Item 被合成后，库存中显示的特效名称。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/assets/mythical-asset.html)
