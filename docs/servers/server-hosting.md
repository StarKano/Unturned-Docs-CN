---
title: 搭建服务器
translation:
  source: servers/server-hosting.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 搭建服务器

Unturned 玩家可以使用 **Unturned Dedicated Server（U3DS）** 搭建多人服务器。U3DS 需要单独安装，可从 Steam 库直接安装，也可以通过 [SteamCMD](/servers/steamcmd/) 部署。Windows 与 Linux 均可用于托管服务器，macOS 不受支持。

## 快速开始

1. 在 Steam 库中启动 **Unturned Dedicated Server**。
2. 等待服务器生成配置并完成地图加载。
3. 当控制台显示地图加载完成后，可以通过 Steam 好友邀请或服务器生成的 **Server Code** 连接。
4. 服务器运行期间使用 `Save` 手动保存，使用 `Shutdown` 安全保存并关闭。

服务器数据和配置通常位于：

```text
.../U3DS/Servers/
```

## 常用配置文件

- `Server/Commands.dat`：服务器名称、地图、人数、密码等基础设置。
- `Config.txt`：难度、玩法和高级服务器设置。
- `WorkshopDownloadConfig.json`：配置 Steam 创意工坊内容。

如需让服务器显示在互联网服务器列表中，还需要配置 **Game Server Login Token（GSLT）**，并根据需要使用 Fake IP 或端口转发。

> 上游原文：[servers/server-hosting.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/server-hosting.rst)
