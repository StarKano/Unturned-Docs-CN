---
title: Glazier UI 系统
translation:
  source: servers/glazier.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Glazier UI 系统

Unity 主要存在三套彼此不兼容的 UI 系统：

1. IMGUI
2. uGUI
3. UIToolkit

Unturned 提供了一层名为 **Glazier** 的抽象，使游戏可以在这几种 UI 实现之间切换。

## uGUI

uGUI 是 Unturned 当前的默认 UI 系统。

优点包括：

- 部分系统上性能更好。
- UI 交互更符合现代习惯。
- 高 DPI 缩放效果更好。
- 富文本聊天淡出效果正常。

部分玩家可能遇到 UI 闪烁或视觉伪影。

## IMGUI

如果 uGUI 在特定设备上出现兼容问题，可以尝试旧版 IMGUI。

启动参数：

```text
-Glazier=IMGUI
```

IMGUI 开销较低，但不支持部分新功能，例如多行聊天、扩展物品说明和部分现代 UI 行为。

## UIToolkit

UIToolkit 集成目前仍属于实验性质。

启动参数：

```text
-Glazier=UIToolkit
```

目前存在部分滚动区域尺寸计算、文字阴影和边框显示等问题，因此暂不适合作为默认方案。

> 上游原文：[servers/glazier.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/glazier.rst)
