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

## 背景

2014 年抢先体验版发布时，Unity 仅内置 IMGUI。为降低性能开销，Unturned 关闭了自动布局，手动指定 UI 位置与尺寸。2020 年末加入 uGUI，以解决部分玩家遇到的 IMGUI 问题，但另一部分玩家需要继续使用 IMGUI。开发者等待能兼容三套系统的抽象层，再逐步启用自动布局。升级到 Unity 2021 LTS 后，运行时 UIToolkit 成为可选实现，物品说明中的状态信息、多行聊天和主菜单新闻都开始使用自动布局。

## uGUI

uGUI 是 Unturned 当前的默认 UI 系统。

优点包括：

- 部分系统上性能更好。
- UI 交互更符合现代习惯。
- 高 DPI 缩放效果更好。
- 富文本聊天淡出效果正常。
- 可以将物品拖出背包直接丢弃；前景颜色在界面上也能统一使用。

部分玩家可能遇到 UI 闪烁或视觉伪影；布局与游戏对象也会在某些系统上增加开销。

## IMGUI

如果 uGUI 在特定设备上出现兼容问题，可以尝试旧版 IMGUI。

启动参数：

```text
-Glazier=IMGUI
```

在 Steam 库右键 Unturned，打开“属性”和“启动选项”，填入上面的参数。IMGUI 在某些系统上因没有布局和游戏对象而更快；在另一些系统上，垃圾回收会使它更慢。

IMGUI 不支持多行聊天、扩展物品说明和主菜单新闻；Mac 与 Linux 上可能出现伽马显示或输入问题。它不支持分层的交互式 UI，因此合成和物品选择菜单需要变通实现，行为与 uGUI 不完全相同。插件 UI 会排在游戏 UI 下层，无法覆盖游戏界面；聊天中的富文本也不会渐隐。

## UIToolkit

UIToolkit 集成目前仍属于实验性质。

启动参数：

```text
-Glazier=UIToolkit
```

设置方法与 IMGUI 相同，把参数填入 Steam 的启动选项。目前滚动区域内容尺寸计算可能错误，部分被裁剪的内容会越过边框，例如地图地点标签；文字阴影和轮廓也不如 uGUI，因此暂不适合作为默认方案。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/glazier.html)
