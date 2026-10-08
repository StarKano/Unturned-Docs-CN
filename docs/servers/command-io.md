---
title: Command IO
translation:
  source: servers/command-io.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Command IO

默认情况下，Unturned 会从控制台标准输入读取命令，并把日志输出到控制台。

如果需要把服务器接入外部进程、远程控制台或自定义命令系统，可以替换默认的输入输出实现。

## 替换默认实现

1. 创建一个实现 `ICommandInputOutput` 接口的类。
2. 从 `Dedicator.commandWindow` 获取 `CommandWindow` 单例。
3. 将自定义实例传入 `CommandWindow.setIOHandler`。
4. 如需彻底禁用原版控制台，可在启动参数中加入：

```text
-NoDefaultConsole
```

这部分主要面向插件、模块或远程管理工具开发者。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/command-io.html)
