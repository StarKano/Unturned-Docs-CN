---
title: 服务器浏览器筛选规则
translation:
  source: servers/server-browser-curation.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 服务器浏览器筛选规则

**Server Browser Curation** 允许创建并分享一组服务器筛选或标记规则。

这些规则可以：

- 给匹配的服务器添加标签。
- 明确允许某些服务器。
- 隐藏或降低某些服务器的排序。
- 用于验证官方服、联盟服或识别仿冒服务器。

规则可以通过 Steam Workshop 分享，也可以从互联网 URL 自动下载。

## 基本属性

### Name

显示在用户界面中的规则列表名称。

### IconURL

可选的 32×32 图标 URL。

### Labels

定义可由规则应用到服务器上的标签。

例如：

```text
Labels
[
    {
        Name Verified
        Text <color=green>MyNetwork Verified</color>
    }
]
```

## Rules

规则按照从上到下的顺序执行。

### Action

支持：

- `Label`：添加标签后继续处理后续规则。
- `Allow`：允许服务器并停止继续匹配。
- `Deny`：拒绝服务器并停止继续匹配。

`Allow` 和 `Deny` 同样可以附加标签。

### Inverted

设为 `true` 时反转匹配结果。

### Description

规则说明，建议解释这条规则存在的原因。

### Label

指定匹配后应用的标签名称。

### Type

支持三种匹配来源：

- `Name`：使用[正则表达式](https://en.wikipedia.org/wiki/Regular_expression)匹配服务器名称。
- `IPv4`：使用 IP、CIDR 和端口范围匹配。
- `ServerID`：按照服务器 Steam ID / Server Code 匹配。

使用 `ServerID` 类型时，填 `Value`（单个 `uint64` Steam ID）或 `Values`（`uint64` 列表）。列表中任意一个 ID 匹配服务器的 Steam ID 即视为命中。

## Name 正则示例

忽略大小写匹配 `MyNetwork`：

```text
Regex (?i)(MyNetwork)
```

通用写法 `(?i)(your text here)` 会忽略字母大小写，匹配包含空格的这段文本；不会匹配去掉空格的 `yourtexthere`。

## IPv4 Filter 示例

```text
Filters
[
    10.8.0.1
    10.8.0.1:27015
    10.8.0.1:27015-27030
    192.168.1.0/24
]
```

分别表示：

- 指定 IP 的任意端口。
- 指定单个端口。
- 指定端口范围。
- 指定整个 [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) 网段。

## ServerID

可以通过服务器控制台：

```text
CopyServerCode
```

获取服务器 ID。

在游戏服务器大厅界面，也可以按默认的 **PageDown** 键复制服务器公开调试信息，其中包括：

![服务器大厅公开信息示例](/img/ServerInfoScreen.png)

*按下 Clipboard Debug 热键时所针对的服务器示例。*

- Name
- Address
- SteamId
- Ping
- Workshop 文件列表

这些字段可以用于编写不同类型的筛选规则。

## 典型用途

例如一个服务器网络可以：

1. 先用 `ServerID` 规则 `Allow` 自己真正的服务器。
2. 再用名称正则 `Deny` 所有冒用其品牌名的其他服务器。

这样就能对官方节点和仿冒节点进行区分。

## 官方示例与工具

- [示例 IconURL](https://cdn.smartlydressedgames.com/ShareX/2024/12/ExampleIcon.png)
- [示例 Curation List](https://cdn.smartlydressedgames.com/ShareX/2024/12/ExampleCurationList.txt)
- [Case sensitivity](https://en.wikipedia.org/wiki/Case_sensitivity)
- [regex101](https://regex101.com/)
- [RegExr](https://regexr.com/)
- [Regex Generator](https://regex-generator.olafneumann.org/)
- [Regex Tester](https://www.regextester.com/)

> 上游原文：[servers/server-browser-curation.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/server-browser-curation.rst)
