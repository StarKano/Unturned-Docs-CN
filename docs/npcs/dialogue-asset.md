---
title: 对话类（Dialogue Asset）
translation:
  source: npcs/dialogue-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 对话类（Dialogue Asset）

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Dialogue`。
- **`ID`** `uint16`：必须唯一；小于 2000 的值保留给官方内容。

::: tip
快速测试某个 Dialogue 可使用：
```text
/dialogue guid
```
它会像玩家自己是 NPC 一样打开该 Dialogue。
:::

## Messages

Message 是 NPC 说出的内容。Message 可以使用 [Conditions](/npcs/conditions.html) 与 [Rewards](/npcs/rewards.html)：

- 满足该 Message 的全部 Conditions 后才会显示。
- Message 被显示时可以授予 Rewards。
- 字段前缀为 `Message_#_`，例如 `Message_0_Condition_0_Type Flag_Bool`。

字段：

- **`Messages`** `int32`：所有可能 Message 的总数。
- **`Message_#_Pages`** `byte`：该 Message 有多少 Page。
- **`Message_#_Responses`** `byte`：此 Message 要显示多少 Response。为 0 时，全部 Response 都自动成为候选。默认 0。
- **`Message_#_Response_#`** `byte`：要显示的 Response Index。
- **`Message_#_Prev`** Legacy ID / GUID：如果该 Message 没有可用 Response，返回哪个 Dialogue。默认 0。
- **`Message_#_FaceOverride`** `byte`：可选 Face Image Index。未设置或关闭 Dialogue 时恢复 Character 默认 Face。

## Responses

Response 是玩家可以选择的对话选项。

同样可绑定 Conditions 和 Rewards：

- 只有满足 Conditions 才显示。
- 选择 Response 时可授予 Rewards。
- 字段前缀 `Response_#_`，例如 `Response_0_Reward_0_Type Quest`。

字段：

- **`Responses`** `byte`：Response 总数。
- **`Response_#_Messages`** `byte`：该 Response 只在哪些 Message 中显示。为 0 时所有 Message 均显示，默认 0。
- **`Response_#_Message_#`** `uint16`：对应 Message Index。
- **`Response_#_Dialogue`** Legacy ID / GUID：选择后打开的 Dialogue。
- **`Response_#_Quest`** Legacy ID / GUID：选择后预览的 Quest。
- **`Response_#_Vendor`** Legacy ID / GUID：选择后打开的 Vendor。

## 本地化

- **`Message_#_Page_#`** [Rich Text](/data/rich-text.html)：对应 Message Page 的文字。
- **`Response_#`** Rich Text：对应 Response Option 的文字。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/npcs/dialogue-asset.html)
