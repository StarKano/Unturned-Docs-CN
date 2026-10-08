---
title: 使用 SteamCMD
translation:
  source: servers/steamcmd.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 使用 SteamCMD

当你需要在同一台机器上运行多个 Unturned 服务器时，推荐使用 **SteamCMD** 安装和维护 U3DS。SteamCMD 是 Steam 的命令行工具；官方文档指出，同一台计算机上同时运行多个服务器必须使用 SteamCMD。服务器支持 Windows 与 Linux，不支持 macOS。本页适合已经读过[服务器搭建指南](/servers/server-hosting.html)的读者。

官方参考：[SteamCMD（Valve Developer Community）](https://developer.valvesoftware.com/wiki/SteamCMD)。

## 安装 U3DS

- [下载 Windows 版 SteamCMD](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)
- [Linux 安装说明](https://developer.valvesoftware.com/wiki/SteamCMD#Linux)
- [Downloading an App](https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_an_App)

在 Windows 上，把下载的 ZIP 解压到容易找到的位置，然后运行 `steamcmd.exe`。在 Linux 上按发行版安装说明操作，安装后运行 `steamcmd.sh`。

![Windows 显示文件扩展名示例](/img/FileNameExtensions.jpg)

*Windows 中显示文件扩展名的示例。*

启动 SteamCMD 后：

```text
login anonymous
app_update 1110390
quit
```

校验或修复服务器文件时，可以使用：

```text
app_update 1110390 validate
```

下载结束后，服务器文件默认位于 SteamCMD 目录中的：

```text
steamapps/common/U3DS/
```

## Windows 启动示例

在 `...\steamcmd\steamapps\common\U3DS` 目录中新建文本文件，将扩展名由 `.txt` 改成 `.bat`，例如 `MyServer.bat`。如果资源管理器只显示 `MyServer`，先在“查看”中启用“文件扩展名”。用记事本打开批处理文件，按服务器类型填入下面的一行。

互联网服务器：

```bat
start "" "%~dp0ServerHelper.bat" +InternetServer/MyServer
```

局域网服务器：

```bat
start "" "%~dp0ServerHelper.bat" +LanServer/MyServer
```

保存后双击 `MyServer.bat`。首次运行会生成配置。看到 `Loading level: 100%` 后，在命令行输入 `Shutdown`，安全保存并关闭。配置与存档位于 `...\U3DS\Servers\MyServer`；可以按[服务器配置说明](/servers/server-configuration.html)调整。互联网服务器还需要配置[游戏服务器登录令牌](/servers/game-server-login-tokens.html)，并选择 [Fake IP](/servers/fake-ip.html) 或[端口转发](/servers/port-forwarding.html)。U3DS 自带的 `ExampleServer.bat` 是局域网服务器示例，也可以打开参考。

## Linux 启动示例

进入 `.../steamcmd/steamapps/common/U3DS`，按服务器类型运行：

```bash
./ServerHelper.sh +InternetServer/MyServer
```

或：

```bash
./ServerHelper.sh +LanServer/MyServer
```

其中 `MyServer` 是 ServerID，对应的存档与配置会写入 `U3DS/Servers/MyServer/`。

U3DS 自带的 `ExampleServer.sh` 是局域网示例。首次启动并看到 `Loading level: 100%` 后，输入 `Shutdown` 安全关闭，再编辑生成的配置文件。互联网服务器同样需要配置[游戏服务器登录令牌](/servers/game-server-login-tokens.html)，并选择 [Fake IP](/servers/fake-ip.html) 或[端口转发](/servers/port-forwarding.html)。

## 相关主题

- 通过 [Rocket (LDM)](/servers/rocket.html) 或 [OpenMod](/servers/openmod.html) 安装插件。
- 使用[服务器自动重启](/servers/server-auto-restart.html)维护进程。
- 配置[书签主机](/servers/bookmark-host.html)，方便玩家收藏服务器。
- 订阅[服务器更新通知](/servers/server-update-notifications.html)。

## 官方图示与视频

![U3DS Interface 示例](/img/InterfaceU3DS.jpg)

*Unturned Dedicated Server 界面示例。*

- [Hosting a Dedicated Server on Windows（YouTube）](https://www.youtube.com/watch?v=8axVrnSLlx4)

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/steamcmd.html)
