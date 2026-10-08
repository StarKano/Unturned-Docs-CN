---
title: Steam Workshop
translation:
  source: about/steam-workshop.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Steam Workshop

**Steam Workshop（Steam 创意工坊）**用于分享玩家制作的内容，例如新地图、物品、本地化，以及其他游戏内容。这类内容通常称为 **Mod（Modification）**。玩家可以在条目详情页点击 **Subscribe（订阅）** 下载。

可以从 [Unturned Workshop 首页](https://steamcommunity.com/app/304930/workshop/)开始浏览，也可以查看 [Workshop About 页面](https://steamcommunity.com/workshop/about/?appid=304930)了解 Unturned 使用到的创意工坊功能。

## 浏览内容

Steam Workshop 提供多个标签页和筛选条件，帮助玩家找到想要的用户生成内容。

[Mods](https://steamcommunity.com/workshop/browse/?appid=304930&section=readytouseitems) 标签页中的内容可以直接点击 **Subscribe** 下载，并会在下次启动游戏时加载。某些 Mod 之间可能冲突，或者与当前最新版游戏不兼容，因此建议先阅读作者在说明中提供的信息。

[Stockpile Submissions](https://steamcommunity.com/workshop/browse/?appid=304930&section=mtxitems) 标签页中的内容不能直接下载。这一分类用于提交可能被官方纳入游戏的皮肤、饰品等内容。玩家可以投票表达是否希望某个投稿进入游戏；被接受的物品可能上架出售，也可能通过其他游戏内方式解锁。

[Collections](https://steamcommunity.com/workshop/browse/?appid=304930&section=collections) 标签页用于把多个 Mod 分组，方便玩家一次性浏览和订阅，通常也称作 **Modpack**。例如，可以建立一个全部由中世纪主题且互相兼容的 Mod 组成的合集。

## 制作 Mod

关于制作 Mod 所需的工具，请先阅读[开始使用](/about/getting-started.html)。之后可以继续阅读各类内容对应的专项文档。

## 发布 Mod

准备发布时，启动游戏并进入主菜单的 **Workshop** 标签页，点击 **Submit** 开始投稿。

发布界面包含以下字段：

1. **Name**：Mod 名称，会显示在 Steam Workshop 以及游戏中的部分位置。
2. **Collection Path**：填写包含 Mod 文件的文件夹路径。例如上传地图时，可以把地图文件夹复制到一个新的文件夹中，然后在这里填写那个新文件夹的路径。
3. **Preview Image**：填写 `.PNG` 或 `.JPG` 图片路径，作为 Mod 预览图。
4. **Change Note**：可选。填写后会添加到 Workshop 页面中的 **Change Notes**。更新 Mod 时建议填写。
5. **Asset Type**：选择正在上传的 Mod 类型，玩家可依据该类型筛选内容。部分类型还有子类型，例如皮肤所对应的具体物品。
6. **Visibility**：决定发布后谁可以看到 Mod。通常选择 **Public**，让其他玩家可以查看和下载；如果想在公开前先做调整，也可以选择其他可见性。
7. **Allowed IPs**：可选。填写 IP 后，只有来自这些 IP 的服务器才能通过专用服务器的 `WorkshopDownloadConfig.json` 自动下载并更新该 Mod。大多数作者不需要使用这一功能。
8. **Workshop Section**：选择发布区域。可以直接被其他玩家下载使用的 Mod 应选 **Ready-to-Use**；用于投票并可能被官方纳入游戏的皮肤或饰品应选 **Curated**。

在发布任何 Mod 前，必须接受 [Steam Subscriber Agreement and Supplemental Workshop Terms](https://steamcommunity.com/sharedfiles/workshoplegalagreement/?appid=304930)。接受后即可点击 **Create** 发布。

## 更新 Mod

更新 Mod 与发布新 Mod 使用同一个界面。

和首次发布一样填写相关字段，建议在 **Change Note** 中说明更新内容。更新时 **Name** 和 **Preview Image** 可以留空，保留现有值。

最后在界面底部已发布内容列表中选中要更新的条目，即可开始上传更新。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/about/steam-workshop.html)
