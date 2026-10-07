---
title: 服务器代码（Server Code）
translation:
  source: servers/server-codes.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 服务器代码（Server Code）

**Server Code** 是服务器启动时随机生成的 17 位数字代码。玩家可以在 **Connect Directly** 菜单中输入该代码加入服务器，而不需要进行端口转发。

服务器启动完成后，可以在服务器控制台中看到 Server Code，也可以在游戏内点击 **Copy Server Code**，或在控制台使用：

```text
CopyServerCode
```

## 限制

使用 Server Code 连接时，不支持加入服务器前的完整信息页面，例如服务器名称、已安装模组、在线玩家等。这些信息依赖 Steam 的 A2S 查询协议，而 A2S 只能通过 IP 查询。

如果希望保留这些功能，可以考虑启用 [Fake IP](/servers/fake-ip/)。

默认情况下，每次服务器重启后 Server Code 都会发生变化。配置 [游戏服务器登录令牌（GSLT）](/servers/game-server-login-tokens/) 后，可以让 Server Code 在不同会话之间保持关联。

## 工作原理

Server Code 使用 **Steam Datagram Relay（SDR）** 进行连接。SDR 会通过 Steam 的中继网络转发流量，不直接暴露服务器和玩家的真实 IP，并提供认证、加密和速率限制。

> 上游原文：[servers/server-codes.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/server-codes.rst)
