---
title: ELightingVision
translation:
  source: data/enum/elightingvision.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# ELightingVision

`ELightingVision` 决定某些 Item（例如 Glasses）启用时使用的 Lighting Vision。部分 Asset 只支持其中一部分枚举值。

| 值 | 说明 |
| --- | --- |
| `None` | 无特殊视觉效果，使用普通 Lighting。 |
| `Military` | 军用 Nightvision。支持时颜色为 `#507814`，Fog Intensity 为 `0.25`。 |
| `Civilian` | 民用 Nightvision。支持时颜色为 `#666666`，Fog Intensity 为 `0.5`。 |
| `Headlamp` | 头灯 Lighting。支持时会启用可切换 Light Source，并可使用 [PlayerSpotLightConfig](/data/struct/playerspotlightconfig.html)。 |

> 上游原文：[data/enum/elightingvision.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/data/enum/elightingvision.rst)
