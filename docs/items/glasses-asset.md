---
title: 眼镜类（Glasses Asset）
translation:
  source: items/glasses-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 眼镜类（Glasses Asset）

Glasses 由 `ItemGlassesAsset` 创建，可由玩家和 Zombie 穿戴。继承 [GearAsset](/items/gear-asset.html)。

- `GUID`
- `Type Glasses`
- `Useable Clothing`
- `ID`

## 专属属性

- **`Blindfold`** Flag：让玩家屏幕变黑。
- **`Nightvision_Allowed_In_ThirdPerson`** `bool`：true 时 Nightvision 可在第三人称使用，而不只第一人称。为兼容旧内容默认 false；Vanilla Nightvision 设为 true。
- **`Nightvision_Color`** [Color](/data/color.html)：`Vision Military` 时覆盖默认颜色；支持 Legacy Color Parsing。
- **`Nightvision_Fog_Intensity`** `float32`：Nightvision 激活时的 Fog Intensity。
- **`Vision`** [ELightingVision](/data/enum/elightingvision.html)：Lighting Vision 类型。自定义 Nightvision Color 应使用 `Military`；`Headlamp` 还可以使用 [PlayerSpotLightConfig](/data/struct/playerspotlightconfig.html) 字段。默认 `None`。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/glasses-asset.html)
