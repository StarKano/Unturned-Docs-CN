---
title: 标签类（Tag Asset）
translation:
  source: assets/tag-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 标签类（Tag Asset）

Tag 虽然也有显示属性，但主要用途是充当多个资源共享的唯一标识，因此特别适合跨 Mod 兼容。

目前主要用于：

1. Workstation 合成功能。
2. Blueprint 分类。

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Tag`。

## 属性

- **`NameColor`** [Color](/data/color.html)：可选，覆盖 UI 名称颜色。
- **`HasIcon`** `bool`：true 时游戏会在 Asset Bundle 中查找 `Icon` Texture。默认 true。
- **`IconPath`** [Master Bundle Pointer](/data/master-bundle-ptr.html)：覆盖 Icon Texture 的加载路径。
- **`TintIcon`** `bool`：true 时按玩家 Foreground Color 偏好给图标着色。默认 true。可着色图标通常使用白色 `#ffffff`；如果图标本身彩色，建议设为 false。

## 本地化

- **`Name`** `string`：UI 显示名称。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/assets/tag-asset.html)
