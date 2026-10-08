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
- `Update_Shutdown_Warnings`：检测到更新后，服务器会等待其中最长的时长，并按配置向玩家广播关闭提醒。例如最长时长为 `2:30`，就会在关闭前 2 分 30 秒广播。

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

Windows 可以把下面的 `.bat` 文件放在 `steamcmd` 目录中。它会反复更新、启动服务器，并在进程退出后等待 10 秒再重试。按实际服务器名称修改 `MyServer`：

```bat
@echo off
:loop
echo Updating...
start "" /wait "%~dp0steamcmd.exe" +login anonymous +app_update 1110390 +quit

echo Finished update! Launching server...
start "" /wait "%~dp0steamapps\common\U3DS\Unturned.exe" -batchmode -nographics +InternetServer/MyServer

echo Server has exited. Restarting after timeout...
echo Press CTRL+C and then Y during this timeout to cancel restart.
timeout 10
goto loop
```

Linux 示例在 Ubuntu 上测试过。根据 SteamCMD 的安装方式，以及是否指定 `+force_install_dir`，U3DS 通常位于 `~/.steam/steam/steamapps/common/U3DS` 或 `~/Steam/steamapps/common/U3DS`。可以为实际目录建立统一的软链接：

```sh
ln -s ~/.steam/steam/steamapps/common/U3DS ~/U3DS
# 如果实际安装在另一个位置，则改用：
ln -s ~/Steam/steamapps/common/U3DS ~/U3DS
```

在主目录创建 `MyServer.sh`，例如运行 `nano ~/MyServer.sh`，写入：

```sh
#! /usr/bin/bash
while true; do
    echo Updating...
    steamcmd +login anonymous +app_update 1110390 -validate +quit

    echo Finished update! Launching server...
    cd ~/U3DS
    source ServerHelper.sh +InternetServer/MyServer

    echo Server has exited. Restarting after timeout...
    echo Press Ctrl+C during this timeout to cancel restart.
    read -t 10
done
```

然后执行 `screen -S MyServer` 新建会话，以 `bash MyServer.sh` 运行。确认服务器启动后，按 `Ctrl + A` 再按 `D` 脱离会话；之后用 `screen -r MyServer` 重新连接。

::: tip
生产服务器更推荐使用独立的进程管理方案，并先测试更新与自动重启脚本，避免因为脚本错误进入无限失败循环。
:::

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/server-auto-restart.html)
