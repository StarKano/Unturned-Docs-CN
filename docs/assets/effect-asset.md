---
title: 特效类（Effect Asset）
translation:
  source: assets/effect-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 特效类（Effect Asset）

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Effect`。
- **`ID`** `uint16`：必须唯一。

## 通用数据

- **`Blast`** `uint16` / GUID：另一个 Effect 的 ID 或 GUID。
- **`Lifetime`** `float`：特效持续时间。
- **`Lifetime_Spread`** `float`：持续时间随机偏移范围。会在正负该值之间随机，默认 4 秒。
- **`Gore`** `bool`：玩家关闭 Gore 时隐藏此特效。
- **`OneShotAudio`** [Master Bundle Pointer](/data/master-bundle-ptr.html)：与特效一起播放的 AudioClip 或 OneShotAudioDefinition。纯音频效果可以只设置它，不需要 Effect Prefab。
- **`Static`** Flag：关闭随机音高变化。
- **`Randomize_Rotation`** `bool`：让特效绕命中轴随机旋转，默认 true。
- **`Spawn_On_Dedicated_Server`** Flag：在专用服务器上也生成特效。
- **`Relevant_Distance`** `float`：多人游戏中，距离效果多远以内的玩家才会收到该效果，单位米。
- **`Preload`** `byte`：预先实例化到 Effect Pool 的数量，减少第一次使用时卡顿。
- **`Is_Music`** `bool`：当此 Effect 用在 Ambiance Volume 时，如果玩家关闭 Music，可据此禁用音乐。未来音频设置拆分后会改为音乐音量倍率。

## 镜头震动

- **`CameraShake_MagnitudeDegrees`** `float`：对受影响玩家施加的镜头震动幅度，单位度。
- **`CameraShake_Radius`** `float`：Effect 周围受镜头震动影响的半径。

## Splatters

- **`Splatter`** `int`：Unity 中 Splatter Texture 总数。
- **`Splatters`** `int`：一次生成的 Splatter 数量。
- **`Splatter_Lifetime`** `float`：Splatter 持续时间。
- **`Splatter_Lifetime_Spread`** `float`：每个 Splatter 生命周期的随机偏移，范围为正负该值，默认 1 秒。
- **`Splatter_Liquid`** Flag：即使玩家关闭 Effect Graphics 也始终显示，并轻微改变每个 Splatter 方向。
- **`Splatter_Temperature`** enum（`Acid`、`Burning`、`Warm`）：玩家站在效果中时施加的 Temperature 状态。
- **`Splatter_Preload`** `byte`：预加载到 Effect Pool 的 Splatter 数量。

> 上游原文：[assets/effect-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/effect-asset.rst)
