---
title: 调试异常
translation:
  source: servers/debugging-exceptions.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 调试异常

在 Release 构建中，异常堆栈有时不会直接显示具体源码行号。可以利用 Unity 记录的 IL 偏移定位到出错位置。

## 定位步骤

1. 查看 `Player.log`。Unity 会在堆栈中以方括号记录 IL 偏移；发送给游戏的 `Client.log` 堆栈不会包含该偏移。例如：

```text
[0x003db]
```

2. 使用 DnSpy、ILSpy 等 C# 反编译工具打开对应程序集，例如：

```text
Assembly-CSharp.dll
```

3. 在 ILSpy 中使用 `Search`（`Ctrl+Shift+F`）找到堆栈中的方法。
4. 将显示模式切换为 **IL with C#**。
5. 查找与偏移对应的 IL 标签，例如：

```text
IL_03db
```

这样通常可以比普通异常堆栈更精确地定位到问题代码。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://github.com/SmartlyDressedGames/Unturned-3.x-Community/issues/3979#issuecomment-1620788082>

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/debugging-exceptions.html)
