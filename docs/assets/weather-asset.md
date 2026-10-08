---
title: 天气类（Weather Asset）
translation:
  source: assets/weather-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 天气类（Weather Asset）

Weather Asset 用自定义事件覆盖内置 Rain / Snow。该功能仍在持续开发。

地图可通过 Level Asset 的 `Weather_Types` 安排自然发生的随机天气。

## 如何测试？

给 `weather` 命令传 GUID 可启动自定义天气；传 `0` 可结束：

```text
/weather 819982d7a2b6453488a8c4c5d9efe67f
```

## 属性

- **`Type`**：`SDG.Unturned.WeatherAsset`。
- **`Volume_Mask`** u32 Bitmask：仅在当前 Ambience Volume 与该 Mask 的按位 AND 非零时启用。默认 `0xFFFFFFFF`。
- **`Fade_In_Duration`** `float`：天气开始到达到完整强度的秒数。
- **`Fade_Out_Duration`** `float`：天气结束到强度归零的秒数。
- **`Ambient_Audio_Clip`** [Master Bundle Pointer](/data/master-bundle-ptr.html)：全局播放的 Audio Clip，音量随天气强度变化。
- **`Ambient_Audio_Takes_Priority_Over_Ambiance_Volumes`** `bool`：true 时，全局天气音频会让各 Ambiance Volume 音频淡出。默认 false。
- **`Override_Fog`** `bool`：是否覆盖 Lighting 中配置的 Fog。
- **`Override_Atmospheric_Fog`** `bool`：Fog 是否影响 Skybox。
- **`Shadow_Strength_Multiplier`** `float`：Directional Light Shadow Strength 倍率。
- **`Fog_Blend_Exponent`** `float`：Fog Blend Alpha 的指数。
- **`Cloud_Blend_Exponent`** `float`：Cloud Blend Alpha 的指数。
- **`Wind_Main`** `float`：Wind Zone 的 `windMain`。未来会被更完整的游戏专用 Wind 配置替代。
- **`Dawn` / `Midday` / `Dusk` / `Midnight`**：见下方“时段属性”。
- **`Effects`** array：见下方“Effect 属性”。
- **`Stamina_Per_Second`** `float`：每秒 Stamina 增减。
- **`Health_Per_Second`** `float`：每秒 Health 增减。
- **`Food_Per_Second`** `float`：每秒 Food 增减。
- **`Water_Per_Second`** `float`：每秒 Water 增减。
- **`Virus_Per_Second`** `float`：每秒 Virus 增减。
- **`Has_Lightning`** `bool`：true 时启用 Lightning。当前为分配 Net ID 仍有硬编码，未来计划整理。
- **`Min_Lightning_Interval`** `float`：两次雷击最短秒数。
- **`Max_Lightning_Interval`** `float`：最长秒数。
- **`Fish_Bite_Interval_Multiplier`** `float`：鱼咬钩前等待时间倍率，默认 1。

## 时段属性

四个主要时段都可以覆盖：

- **`Fog_Color`** struct：距离 Fog，可选覆盖 Skybox Color。
- **`Fog_Density`** `float`：类似 Ambiance Volume 的 Fog Intensity，必须在 [0,1]。
- **`Cloud_Color`** struct：云内部主体颜色。
- **`Cloud_Rim_Color`** struct：云外缘颜色，比内部更明显。
- **`Brightness_Multiplier`** `float`：乘算全部 Ambient Lighting Color。

## Effect 属性

天气启用期间可实例化多个 Effect。

- **`Prefab`** [Master Bundle Pointer](/data/master-bundle-ptr.html)：包含 Particle System 的 GameObject。`PlayOnAwake` 应关闭。与 View 绑定的效果可考虑将 Culling Mode 改为 **Always Simulate**。
- **`Emission_Exponent`** `float`：应用到“天气强度 × 默认 Constant Rate Over Time”的指数。
- **`Pitch`** `float`：`Rotate_Yaw_With_Wind` 启用时的 X 轴旋转。
- **`Translate_With_View`** `bool`：World Space Position 是否跟 Camera。内置雨雪会跟随视角；false 时位置归零。可用于沙尘暴开始时“沙尘吹进地图”之类过渡效果。
- **`Rotate_Yaw_With_Wind`** `bool`：Y 轴旋转是否跟随风向。内置雨雪会跟风转向。

## Color 属性

每种颜色可使用自定义 Override，也可以引用 Level Editor Lighting Panel 中的颜色。引用 Level Color 主要为了兼容旧 Rain/Snow。

- **`Level_Enum`** enum：设置后，RGB 会乘以该 Level Color。
- **`R` / `G` / `B`** `uint8`：颜色通道。

## NPC Conditions

NPC Condition 可以检查全局天气状态以及当前 Weather Intensity Blend。详见后续 NPC Conditions 文档。

> 上游原文：[assets/weather-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/weather-asset.rst)
