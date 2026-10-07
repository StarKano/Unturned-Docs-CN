---
title: PlayerSpotLightConfig
translation:
  source: data/struct/playerspotlightconfig.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# PlayerSpotLightConfig

`PlayerSpotLightConfig` 用于配置玩家 Spot Light。某些 Item Asset 可以直接使用这些字段。

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `SpotLight_Enabled` | bool | `true` |
| `SpotLight_Range` | float32 | `64` |
| `SpotLight_Angle` | float32 | `90` |
| `SpotLight_Intensity` | float32 | `1.3` |
| `SpotLight_Color` | Color | `#f5df93` |

## 字段说明

- **`SpotLight_Enabled`**：true 时 Item 提供可切换 Light Source。
- **`SpotLight_Range`**：光束最大距离，单位米。
- **`SpotLight_Angle`**：光束角度，单位度。
- **`SpotLight_Intensity`**：光照强度。
- **`SpotLight_Color`**：光束颜色。

> 上游原文：[data/struct/playerspotlightconfig.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/data/struct/playerspotlightconfig.rst)
