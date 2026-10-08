---
title: 创意工坊更新监控
translation:
  source: servers/dedicated-workshop-update-monitor.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 创意工坊更新监控

当服务器使用 Steam Workshop 内容时，作者发布新版本后，服务器可能需要重启并重新加载对应内容。

地图尤其需要注意，因为地图自身存在版本号，服务器列表会在玩家连接前检查兼容性。

默认情况下，Unturned 会监控当前托管地图是否发生更新。检测到变化后，服务器会通过聊天通知玩家，并在倒计时结束后关闭。

## 自定义更新处理

如果需要自定义处理流程，例如使用自定义弹窗通知玩家，或者接入自己的重启系统，可以替换原版的更新监控实现。

官方提供的扩展方式是：

1. 创建实现 `IDedicatedWorkshopUpdateMonitor` 接口的类，或者继承 `DedicatedWorkshopUpdateMonitor`。
2. 绑定 `DedicatedWorkshopUpdateMonitorFactory.onCreateForLevel` 事件。
3. 返回自定义的监控实例。

这一部分主要面向插件和服务器框架开发者。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://steamcommunity.com/app/304930/workshop/>

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/dedicated-workshop-update-monitor.html)
