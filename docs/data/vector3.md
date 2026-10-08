---
title: Vector3
translation:
  source: data/vector3.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Vector3

Vector3 可写成包含三个 `float` 的单个值（圆括号可选），也可写成 `X`、`Y`、`Z` 字典。

```text
Position 1, 2, 3
Offset (4, 5, 6)
Scale
{
    X 7
    Y 8
    Z 9
}
```

## 旧格式

`LOD_Center`、`LOD_Size`、`Explosion_Min_Force`、`Explosion_Max_Force`、`Center_Of_Mass` 等旧属性也兼容三个独立 `float32` 字段：

```text
LOD_Size_X 0
LOD_Size_Y -12
LOD_Size_Z -1
```

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/vector3.html)
