---
title: 道路类（Road Asset）
translation:
  source: assets/road-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 道路类（Road Asset）

Road Asset 让道路配置可以在不同关卡间复用，并开放过去无法配置的一些属性。

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| `Chart` | EObjectChart | `None` |
| `Depth` | float32 | `0.0` |
| `OffsetAlongNormal` | float32 | `0.0` |
| `PhysicsMaterial` | Master Bundle Pointer | 见说明 |
| `RepeatDistanceScale` | float32 | `1.0` |
| `TexturePath` | Master Bundle Pointer | 见说明 |
| `Width` | float32 | `0.0` |
| `VanillaPhysicsMaterial` | string | 见说明 |

## Chart

非 `None` 时覆盖道路在 Chart 生成中的显示分类。

为 `None`（默认）时使用旧规则：

- Concrete 且宽度大于 16 米：`Highway`。
- 其他 Concrete：`Road`。
- 非 Concrete：`Path`。

## Depth

沿 Up Axis 的总厚度。

::: note
迁移旧 Road 配置时注意：旧编辑器里显示的 Depth 实际上是总厚度的一半。
:::

## OffsetAlongNormal

每个道路 Vertex 沿 Terrain Surface Normal 移动的距离。

## PhysicsMaterial

应用到道路 Collider 的 Unity `PhysicMaterial` [Master Bundle Pointer](/data/master-bundle-ptr.html)。如果设置了 `VanillaPhysicsMaterial` 则不使用。

## RepeatDistanceScale

默认情况下，Texture 会根据自身宽高比和道路宽度沿道路均匀缩放。

例如 Width 8 米、Texture 256×128 时，每 4 米重复一次。`RepeatDistanceScale` 用于乘上重复间距。

::: note
旧格式的 Repeat Distance = Texture 高度像素 ÷ Height。要换算为新 `RepeatDistanceScale`，用旧 Repeat Distance ÷ Road Asset Width。
:::

## TexturePath

指向 `Texture2D`。未设置时，游戏会在对应 Asset Bundle 查找名为 `Texture` 的纹理。

## Width

道路开始向 Terrain 渐变前的总水平宽度。

::: note
旧编辑器显示的 Width 实际上是总宽度的一半。
:::

## VanillaPhysicsMaterial

可选的内置 Unity `PhysicMaterial` 名称，例如旧道路使用的 `Concrete_Static` 或 `Gravel_Static`。

> 上游原文：[assets/road-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/road-asset.rst)
