---
title: EObjectChart
translation:
  source: data/enum/eobjectchart.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# EObjectChart

`EObjectChart` 决定 Asset 在生成地图 Chart View 时如何显示。大多数值对应地图 [`Charts.unity3d`](/mapping/charts.html) 的 `Height_Strip` 或 `Layer_Strip` 某个像素。

| 值 | 说明 |
| --- | --- |
| `None` | 使用该 Asset 的默认行为。 |
| `Ground` | 使用 Height_Strip 的 (20, 0)。 |
| `Ignore` | 忽略此 Asset，显示其下方内容。 |
| `Highway` | 使用 Layer_Strip 的 (0, 0)。 |
| `Street` | 使用 Layer_Strip 的 (1, 0)。 |
| `Road` | 使用 Layer_Strip 的 (2, 0)。 |
| `Path` | 使用 Layer_Strip 的 (3, 0)。 |
| `Large` | 使用 Layer_Strip 的 (15, 0)。 |
| `Medium` | 使用 Layer_Strip 的 (16, 0)。 |
| `Water` | 使用 Height_Strip 的 (0, 0)。 |
| `Cliff` | 使用 Layer_Strip 的 (4, 0)。 |

> 上游原文：[data/enum/eobjectchart.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/data/enum/eobjectchart.rst)
