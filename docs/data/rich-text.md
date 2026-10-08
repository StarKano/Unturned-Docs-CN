---
title: 富文本（Rich Text）
translation:
  source: data/rich-text.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 富文本（Rich Text）

部分文本支持富文本标签，例如粗体、斜体和颜色。支持范围取决于 [Glazier](/servers/glazier.html) 模式；多数玩家使用默认 uGUI。

## Unturned 扩展标签

- **`<br>`**：换行；多数对话、告示牌/纸条、物品描述支持。
- **`<name_npc>`**：插入 NPC 名称，仅 NPC 对话。
- **`<name_char>`**：插入玩家角色名，支持 NPC 对话和告示牌/纸条。
- **`<pause>`**：暂停对话 0.5 秒，仅 NPC 对话。

## uGUI / TextMesh Pro

完整标签见 [TextMesh Pro Rich Text](https://docs.unity3d.com/Packages/com.unity.textmeshpro@2.2/manual/RichText.html)。

## IMGUI

完整标签见 [Unity Styled Text](https://docs.unity3d.com/2018.3/Documentation/Manual/StyledText.html)。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/rich-text.html)
