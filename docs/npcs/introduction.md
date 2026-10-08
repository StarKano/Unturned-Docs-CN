---
title: NPC 入门
translation:
  source: npcs/introduction.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# NPC 入门

Mod 作者可以创建拥有自定义外观的可交互 NPC Character。

玩家与 NPC 交互后可以打开 Dialogue Box。Dialogue 可以显示多个 Response，并继续跳转到更多 Dialogue；还可以进入 Quest、Vendor 等特殊交互。

NPC 交互还可以设置：

- **Conditions**：决定玩家当前能看到/使用什么。
- **Rewards**：玩家执行操作（例如交任务）后获得什么。

## 本地化格式

NPC Localization 额外支持：

- **`<color=...></color>`**：使用 Rarity Color，支持 `common`、`uncommon`、`rare`、`epic`、`legendary`、`mythical`、`gold`、`red`、`orange`、`yellow`、`green`、`blue`、`purple`，也可填写 6 位 RGB 十六进制颜色。
- **`<name_npc>`**：插入 NPC Character Name。
- **`<name_char>`**：插入 Player Character Name。
- **`<br>`**：换行。
- **`<pause>`**：暂停 0.5 秒后继续 Dialogue。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/npcs/introduction.html)
