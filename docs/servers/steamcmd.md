---
title: 使用 SteamCMD
translation:
  source: servers/steamcmd.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 使用 SteamCMD

当你需要在同一台机器上运行多个 Unturned 服务器时，推荐使用 **SteamCMD** 安装和维护 U3DS。SteamCMD 是 Steam 的命令行工具，适合自动化部署和多实例环境。

## 安装 U3DS

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

默认安装目录通常位于：

```text
steamapps/common/U3DS/
```

## Windows 启动示例

互联网服务器：

```bat
start "" "%~dp0ServerHelper.bat" +InternetServer/MyServer
```

局域网服务器：

```bat
start "" "%~dp0ServerHelper.bat" +LanServer/MyServer
```

## Linux 启动示例

```bash
./ServerHelper.sh +InternetServer/MyServer
```

或：

```bash
./ServerHelper.sh +LanServer/MyServer
```

其中 `MyServer` 是 ServerID，对应的存档与配置会写入 `U3DS/Servers/MyServer/`。

> 上游原文：[servers/steamcmd.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/steamcmd.rst)
