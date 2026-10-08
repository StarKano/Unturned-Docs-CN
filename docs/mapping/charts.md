---
title: 地图 Chart 配色
translation:
  source: mapping/charts.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 地图 Chart 配色

`Charts.unity3d` 文件决定地图 Chart View 可以使用哪些颜色。文件中包含两个 **32×1 px** 的纹理：`Height_Strip` 和 `Layer_Strip`。

## Height_Strip

`Height_Strip` 用于地形高度颜色。

- 最左侧像素 **(0, 0)**：Water。
- 其余像素依据 Terrain 高度采样，从最低可能高度的 **(1, 0)** 到最高的 **(31, 0)**。

::: note
Object 也可以配置为从 `Height_Strip` 的 Water 像素 (0,0) 或 Ground 像素 (20,0) 采样。
:::

## Layer_Strip

`Layer_Strip` 用于 Terrain 被 Object、Tree 等内容遮挡时。实际采样像素取决于遮挡类型；Object 可以覆盖默认位置，有些像素只供 Object 显式使用。

- **(0, 0)**：宽度大于 8 米的 Concrete Road；Object 也可使用。
- **(1, 0)**：宽度小于等于 8 米的 Concrete Road；Object 也可使用。
- **(2, 0)**：可由 Object 使用。
- **(3, 0)**：非 Concrete Road；Object 可使用。
- **(4, 0)**：可由 Object 使用。
- **(14, 0)**：Resource。
- **(15, 0)**：Large Object；Object 可使用。
- **(16, 0)**：Medium Object；Object 可使用。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/mapping/charts.html)
