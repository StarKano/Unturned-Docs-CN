---
title: 服务器托管规则
translation:
  source: servers/server-hosting-rules.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 服务器托管规则

服务器服主可以自由调整玩法、添加功能、禁用原版内容或使用自定义规则，但仍必须遵守 Smartly Dressed Games 制定的服务器托管规则。

违反规则的服务器可能被临时或永久限制。可以向 SDG Support [举报违规服务器](https://support.smartlydressedgames.com/hc/en-us/requests/new?ticket_form_id=12189991924500)或[申诉服务器处罚](https://support.smartlydressedgames.com/hc/en-us/requests/new?ticket_form_id=12189992633364)，也可查看[服务器处罚列表](https://smartlydressedgames.com/UnturnedHostBans/index.html)。

## 近期调整

- **2025-06-12**：明确“原版付费内容”的范围，以及服主可提供哪些替代内容。
- **2024-06-03**：缩小服务器列表的审核范围。官方说明，以当前工具和人力无法持续审核可被无限创建的社区服务器；详见[审核与服务器筛选说明](https://support.smartlydressedgames.com/hc/en-us/articles/34633581382676)。

## 商业化限制

服务器不得出售、赠送或以其他方式提供对 **原版付费内容（vanilla premium content）** 的访问权限，包括 Gold Upgrade 权益、原版饰品和原版皮肤。

例如，Stockpile 或 Steam Community Market 中可购买的 Unturned 原版内容，都属于原版付费内容。

如果服务器希望出售自定义外观或其他微交易内容，应确保自己拥有相应内容的权利或授权。

## Monetization 字段

服务器列表支持按照 Monetization 字段筛选。虽然该字段不是强制配置，但一旦配置，就应真实反映服务器的商业化方式。

- `Unspecified`：`Config.txt` 中 `Monetization` 字段的默认值；不确定如何分类时可保持未指定。
- `None`：完全不商业化，或仅提供无回报的捐赠渠道。
- `NonGameplay`：只出售不会带来玩法优势的内容，例如自定义武器皮肤、聊天颜色。
- `Monetized`：存在任何可能带来玩法优势的付费内容，例如出售带物资或载具的礼包。

## 在线行为

多人服务器若反复违反 [Steam Online Conduct](https://store.steampowered.com/online_conduct) 规则，可能受到处理。例如，专门宣传或销售作弊工具的服务器是不允许的。如果是在服务器里遇到其他玩家的不当行为，官方建议先报告给该服务器的服主。

## 现实事件角色扮演

不得模拟仍在发生的现实悲剧或灾难作为玩法内容，例如正在发生的战争冲突或自然灾害。这可能导致服务器降低可见性或受到其他处理。

## Anycast 代理

使用 Anycast 代理时，应通过 [SDG Support](https://support.smartlydressedgames.com/hc/en-us/requests/new) 说明情况，以便正确标记。Anycast 可以保护服务器，但可能让服务器列表显示的延迟远低于玩家进入游戏后的实际延迟。例如澳大利亚服务器对本地玩家约 40 ms、对欧洲玩家约 300 ms，经过 Anycast 后各地浏览器却可能显示约 30 ms。这样会让玩家误以为该服务器低延迟。官方会将使用 Anycast 的服务器按较高延迟排序，以避免这个问题。

普通代理如果显示的延迟与实际游戏延迟接近，一般不会受到这种标记。

## 创意工坊版权

如果自己的 Workshop 内容被他人未经许可重新上传，可以通过 [Steam 版权申诉渠道](https://steamcommunity.com/dmca/create/)提交侵权通知。通知由 Valve 的版权代理审核；提交前应阅读页面中的法律说明。

::: warning 说明
“管理员滥权”或“服务器存在付费获胜内容”本身通常不属于官方服务器规则举报范围。遇到此类情况，官方建议优先选择其他服务器，或者自行搭建服务器。
:::

## 常见问题

### 如何减轻拒绝服务攻击？

[Fake IP](/servers/fake-ip.html) 会通过 Steam 中继网络转发流量，隐藏服务器公网 IP，也可能降低部分玩家的网络延迟。

### 如何防止别人重新上传我的创意工坊文件？

可以给 Mod 加入 [Asset Bundle Custom Data](/assets/asset-bundle-custom-data.html)，并配置为验证原始上传的 Workshop 文件 ID。服务器下载 Mod 时，若文件 ID 与配置不符，就无法下载。若其他用户仍未经许可重新上传，最后可以考虑通过上述 Steam 渠道提交侵权通知。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/server-hosting-rules.html)
