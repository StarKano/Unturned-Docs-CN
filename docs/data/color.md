---
title: Color（颜色）
translation:
  source: data/color.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Color（颜色）

Color 可写为单个十六进制值（`#` 前缀可选），也可写成包含 `R`、`G`、`B` 三个 [`uint8`](/data/built-in-types.html) 的字典。

```text
SkyColor 0000ff
GroundColor #00ff00
FogColor
{
    R 255
    G 0
    B 0
}
```

## 旧格式

部分旧属性同时兼容三个独立 `float32` 字段，例如 `Laser_Color`、`Nightvision_Color`：

```text
Laser_Color_R 0.5
Laser_Color_G 1
Laser_Color_B 0
```

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/color.html)
