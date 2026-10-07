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

## 默认端口

每个 Unturned 服务器运行时使用两个连续端口。

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

打开命令提示符运行：

```text
ipconfig
```

找到当前网卡的 `IPv4 Address`，例如 `192.168.0.6`。

## 路由器转发规则

在路由器后台新增规则，将对应端口以 **UDP** 协议转发到运行 U3DS 的局域网 IP。部分路由器需要为两个端口分别建立规则。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://portforward.com/router.htm>

> 上游原文：[servers/port-forwarding.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/port-forwarding.rst)
