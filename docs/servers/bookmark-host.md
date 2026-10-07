---
title: Bookmark Host
translation:
  source: servers/bookmark-host.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Bookmark Host

配置 **Bookmark Host** 并配合 [GSLT](/servers/game-server-login-tokens.html) 后，可以启用服务器书签功能，让玩家即使在服务器 IP 或端口变化后，也更容易重新找到服务器。

Steam 自带的 Favorites 和 History 会按 IPv4 地址和端口记忆服务器，因此地址变化后原记录可能失效。GSLT 能一定程度上缓解这个问题，但更新并不是实时的，而且 Steam 旧的收藏机制不兼容 [Fake IP](/servers/fake-ip.html)。

## 配置方式

在服务器配置中设置：

```text
BookmarkHost
```

支持两种形式。

### DNS 主机名

可以填写一个解析到服务器公网 IP 的域名，例如：

```text
myunturnedserver.example.com
```

这种方式下客户端会继续保存当前端口，因此公网 IP 可以变化，但端口最好保持固定。

如果公网 IP 不固定，可以配合动态 DNS。

::: warning
Fake IP 每次启动后 IP 和端口都可能变化，因此这种 DNS 方式不适用于 Fake IP。
:::

### 自定义 Web API

如果 `BookmarkHost` 以 `http://` 或 `https://` 开头，客户端会发起 GET 请求。

接口应返回纯文本，例如：

```text
127.0.0.1
127.0.0.1:27015
myunturnedserver.example.com
myunturnedserver.example.com:27015
```

这样可以由自己的后端动态返回当前服务器地址和端口，更适合使用 Fake IP 或地址经常变化的环境。

> 上游原文：[servers/bookmark-host.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/bookmark-host.rst)
