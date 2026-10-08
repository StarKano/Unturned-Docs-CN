---
title: 枪管配件类（Barrel Asset）
translation:
  source: items/barrel-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 枪管配件类（Barrel Asset）

Barrel Attachment 由 `ItemBarrelAsset` 创建，可安装到 Ranged Weapon。继承 [CaliberAsset](/items/caliber-asset.html)，再继承 ItemAsset。

必需字段：

- `GUID`
- `ID`
- `Type Barrel`

## 专属属性

- **`Braked`** Flag：隐藏 Muzzle Flash。
- **`Durability`** `uint8`：每次开火损失的 Quality。大于 0 时始终显示 Item Quality。默认 0。
- **`Gunshot_Rolloff_Distance_Multiplier`** `float32`：枪声 Rolloff Distance 倍率。若 `Silenced`，默认 0.5；否则默认 1。
- **`Silenced`** Flag：开火时不生成 Alert。
- **`Volume`** `float32`：Gunfire Sound Volume 倍率，默认 1。通常与 `Silenced` 一起使用，但不是必须。

::: note
旧 `Ballistic_Drop` 已移动到 [CaliberAsset](/items/caliber-asset.html)。
:::

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/items/barrel-asset.html)
