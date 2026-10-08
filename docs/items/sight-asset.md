---
title: 瞄具类（Sight Asset）
translation:
  source: items/sight-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 瞄具类（Sight Asset）

Sight 由 `ItemSightAsset` 创建，是可以安装到远程武器上的瞄具附件。它继承[口径类 `CaliberAsset`](/items/caliber-asset.html)，后者又继承[基础物品资源](/items/introduction.html)。

## 必需字段

- `GUID`
- `ID`
- `Type Sight`

## 属性

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `AimAlignment_LocalOffset` | Vector3 | `(0,0,0)` |
| `AimAlignment_Owner` | EAimAlignmentTransformOwner | `Sight` |
| `AimAlignment_Path` | string | `Model_0/Aim` |
| `DistanceMarkers` | DistanceMarker 列表 | — |
| `Holographic` | flag | — |
| `Nightvision_Color` | color | 见说明 |
| `Nightvision_Fog_Intensity` | float32 | 见说明 |
| `Offset_Scope_Overlay_By_One_Texel` | bool | `false` |
| `Vision` | ELightingVision | `None` |
| `Zoom` | float32 | `1` |
| `ThirdPerson_Zoom` | float32 | `1.25` |
| `Zoom_Using_Eyes` | bool | `false` |

### AimAlignment_Owner

- `Sight`：相对于瞄具模型查找 `AimAlignment_Path`，默认 `Model_0/Aim`。
- `Gun`：相对于枪械 Equipable Prefab 查找，必须显式设置 Path。

### 瞄准对齐

`AimAlignment_Path` 指向的 Transform 会用于把第一人称瞄准相机对齐到瞄具。可用 `AimAlignment_LocalOffset` 做额外位置偏移。

`Holographic` 标志使该瞄具使用全息瞄准效果。`AimAlignment_LocalOffset` 的默认值为 `(0, 0, 0)`，偏移位置相对于 `Aim` 或 `AimAlignment_Path` 指定的 Transform。

## 夜视

- `Vision` 设置[视觉模式](/data/enum/elightingvision.html)，但不支持 `Headlamp`。它也会影响其他夜视字段的默认值。
- `Nightvision_Color` 可覆盖默认夜视颜色，必须配合 `Vision Military`；支持旧版颜色解析。未覆盖时，颜色默认值由 `Vision` 决定。
- `Nightvision_Fog_Intensity` 控制夜视开启时的雾强度。未配置时，默认值由 `Vision` 决定。

## 缩放

- `Zoom`：倍率缩放，必须 >= 1。
- `ThirdPerson_Zoom`：第三人称缩放倍率，必须 >= 1。
- `Zoom_Using_Eyes`：直接改变主相机 FOV，而不是显示 Scope Overlay。
- `Offset_Scope_Overlay_By_One_Texel`：略微放大 2D 瞄镜贴图，让原本在中心左侧的像素居中。例如 512×512 贴图启用后，坐标 `(255, 255)` 的像素会出现在屏幕中心。

## DistanceMarkers

可在瞄镜中配置考虑弹道下坠的距离刻线。

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| `Distance` | `0` | 假想目标距离（米） |
| `LineOffset` | `0` | 中心线到刻线起点的百分比偏移 |
| `LineWidth` | `0.05` | 横向刻线长度 |
| `Side` | `Right` | 向左或向右展开 |
| `HasLabel` | `true` | 是否显示距离文字 |
| `Color` | `black` | 刻线/文字颜色 |

`LineOffset` 和 `LineWidth` 使用 0~1 的小数表示百分比，例如 `0.25` = 25%。

`Side` 可选 `Left` 或 `Right`：刻线和文字分别从中心向左或向右延伸。`HasLabel` 为 `true` 时，会在横线旁显示 `Distance` 的文字；`Color` 可覆盖横线和文字的颜色。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/sight-asset.html)
