---
title: 端口转发
translation:
  source: servers/port-forwarding.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 端口转发

从 Unturned 3.23.14.0 起，让服务器可通过互联网访问已经不再强制要求端口转发。只有在你希望玩家通过公网 IP 或域名直接连接时，通常才需要配置端口转发。

通过[服务器代码](/servers/server-codes.html)或 [Fake IP](/servers/fake-ip.html) 连接，可避免这一要求。家庭网络中有多台设备时，端口转发规则用来告诉路由器把外部流量送到运行服务器的那台电脑。

## 默认端口

每个 Unturned 服务器运行时使用两个连续端口：第一个用于服务器列表查询，第二个用于游戏流量。`Port` 命令指定第一个端口，另一个自动加 1。

默认：

```text
27015
27016
```

如果运行多个实例，可以依次使用：

```text
第一台：27015
第二台：27017
第三台：27019
```

## Windows 查询本机地址

按 `Windows + R`，输入 `cmd` 并回车，然后在命令提示符运行：

```text
ipconfig
```

在 `Wireless LAN adapter Wi-Fi` 或 `Ethernet adapter Ethernet` 标题下找到 `IPv4 Address`，记下运行服务器的电脑地址，例如 `192.168.0.6`。

## 路由器转发规则

不同路由器的界面不一样，一般步骤如下：

1. 用浏览器登录路由器管理界面。
2. 打开端口转发菜单，新增规则，并填一个便于识别的名称。
3. 默认服务器将起始端口设为 `27015`、结束端口设为 `27016`；若改过 `Port`，填对应的连续两个端口。
4. 协议选择 **UDP**，目标内部 IP 填上面查到的局域网地址。
5. 保存规则。若路由器不允许在同一规则中填端口范围，为两个端口分别建立规则。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://portforward.com/router.htm>

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/port-forwarding.html)
