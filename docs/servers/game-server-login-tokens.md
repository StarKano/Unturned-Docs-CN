---
title: 游戏服务器登录令牌（GSLT）
translation:
  source: servers/game-server-login-tokens.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 游戏服务器登录令牌（GSLT）

Unturned 专用服务器可以使用 **Game Server Login Token（GSLT）** 登录 Steam。

配置 GSLT 后主要有这些好处：

- Server Code 可以在多次启动之间保持关联。
- 没有 GSLT 的服务器会被视为匿名服务器，不会显示在互联网服务器列表中。
- Steam 默认按地址和端口记录收藏与历史服务器。配置 GSLT 后，即使服务器信息变更，Steam 也可以自动迁移这些记录；迁移通常会在约 24 小时内完成（参见[问题 #3980](https://github.com/SmartlyDressedGames/Unturned-3.x-Community/issues/3980)和 [AlliedModders 讨论](https://forums.alliedmods.net/showthread.php?p=2529549#post2529549)）。

## 创建 GSLT

使用 Steam 账号登录：

https://steamcommunity.com/dev/managegameservers

Unturned 的 App ID：

```text
304930
```

建议在 Memo 中填写服务器名称，方便区分多个令牌。

## 配置方式

可以在服务器配置的 `Browser` 部分设置：

```text
Login_Token
```

也可以在服务器启动时使用 `GSLT` 命令，写入 `Commands.dat` 或在命令行指定。

## 自动管理 GSLT

Valve 提供 [IGameServersService Web API](https://partner.steamgames.com/doc/webapi/IGameServersService)，可用于自动管理 GSLT。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/game-server-login-tokens.html)
