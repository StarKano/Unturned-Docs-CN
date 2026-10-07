---
title: Fake IP
translation:
  source: servers/fake-ip.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Fake IP

Steam 的 **Fake IP** 可以让玩家在不进行端口转发的情况下，通过 IP 地址加入服务器。

与 [Server Code](/servers/server-codes/) 不同，启用了 Fake IP 的服务器在配置了 [GSLT](/servers/game-server-login-tokens/) 后，仍然可以显示在互联网服务器列表中。

## 启用方法

在服务器配置中将：

```text
Use_FakeIP
```

设置为：

```text
true
```

服务器启动后，可以在控制台运行：

```text
CopyFakeIP
```

将 Fake IP 和端口复制到剪贴板。把结果粘贴到连接菜单的 Host 字段时，游戏会自动识别其中的端口。

## 技术说明

Fake IP 同样使用 **Steam Datagram Relay（SDR）**。连接流量通过 Steam 中继网络转发，可以隐藏真实服务器 IP，并提供认证、加密和速率限制。

与普通端口转发相比，Fake IP 的缺点是每次重启后地址和端口都可能变化，因此若要绑定固定域名，通常需要额外的自动化脚本。

## 收藏服务器

Fake IP 与 Steam 自带的 Favorites 和 History 列表并不兼容。作为替代方案，可以使用 [Bookmark Host](/servers/bookmark-host/)。

> 上游原文：[servers/fake-ip.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/fake-ip.rst)
