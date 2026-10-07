---
title: 服务器自动重启
translation:
  source: servers/server-auto-restart.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 服务器自动重启

不依赖插件，也可以通过服务器自带的配置实现一部分自动维护功能。

官方建议大约每 24 小时重启一次服务器，因为部分较旧的游戏代码仍使用单精度浮点时间。

## 定时关闭

与定时关闭有关的主要配置包括：

- `Enable_Scheduled_Shutdown`：启用定时关闭。
- `Scheduled_Shutdown_Time`：指定服务器关闭的本地时间。
- `Scheduled_Shutdown_Warnings`：在关闭前按指定时间向玩家广播提醒。

例如设置 `30:00`，表示在关闭前 30 分钟广播提醒。

## 检测游戏更新

服务器也可以监控 U3DS 更新，并在检测到新版本后关闭。

相关配置：

- `Enable_Update_Shutdown`：启用更新检测。
- `Update_Steam_Beta_Name`：默认 `public`，预览分支可使用 `preview`。
- `Update_Shutdown_Warnings`：检测到更新后，在关闭前向玩家发送倒计时提醒。

## 配合启动脚本

最实用的方式是让外部脚本形成循环：

```text
检查并更新 U3DS
↓
启动服务器
↓
服务器退出
↓
等待几秒
↓
重新检查更新并启动
```

Windows 可以通过 `.bat` 配合 SteamCMD 实现，Linux 可以通过 Shell 脚本和 `screen` 或其他进程管理工具实现。

::: tip
生产服务器更推荐使用独立的进程管理方案，并先测试更新与自动重启脚本，避免因为脚本错误进入无限失败循环。
:::

> 上游原文：[servers/server-auto-restart.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/server-auto-restart.rst)
