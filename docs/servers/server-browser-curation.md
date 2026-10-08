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

规则可以作为[服务器浏览器筛选资源](/assets/server-browser-curation-asset.html)通过 Steam Workshop 分享，也可以从互联网 URL 自动下载。比如服务器网络可以先按 `ServerID` 允许真正的服务器，再用名称正则表达式拒绝冒用品牌的服务器。

## 基本属性

### Name

显示在用户界面中的规则列表名称，例如“MyNetwork 已验证服务器”或某位作者的服务器推荐列表。

### IconURL

可选的 32×32 图标 URL；服务器网络可复用服务器浏览器中使用的图标。

### Labels

定义可由规则应用到服务器上的标签。每个标签的 `Name` 是规则引用的名称，`Text` 是浏览器中显示的富文本。

例如：

```text
Labels
[
    {
        Name Verified
        Text <color=green>MyNetwork Verified</color>
    }
    {
        Name Fake
        Text <color=red>MyNetwork Imposter</color>
    }
]
```

## Rules

规则按照从上到下的顺序执行。

### Action

支持：

- `Label`：添加标签后继续处理后续规则。
- `Allow`：允许服务器并停止继续匹配。
- `Deny`：拒绝服务器并停止继续匹配；根据玩家设置，它会被隐藏或移到列表底部。

`Allow` 和 `Deny` 同样可以附加标签。

### Inverted

设为 `true` 时反转匹配结果。

### Description

规则说明。它会显示在规则列表，以及被移至服务器列表底部的服务器提示中；建议解释规则存在的原因。

### Label

指定匹配后应用的标签名称。

### Type

支持三种匹配来源：

- `Name`：使用[正则表达式](https://en.wikipedia.org/wiki/Regular_expression)匹配服务器名称，对应 `Regex` 或 `Regexes`。
- `IPv4`：使用 IP、CIDR 和端口范围匹配服务器的公网地址，对应 `Filter` 或 `Filters`。
- `ServerID`：按照服务器 Steam ID / Server Code 匹配。

使用 `ServerID` 类型时，填 `Value`（单个 `uint64` Steam ID）或 `Values`（`uint64` 列表）。列表中任意一个 ID 匹配服务器的 Steam ID 即视为命中。

`Regex` 可写单个正则，`Regexes` 可写字符串列表；任一正则匹配名称即命中。`Filter` 可写单个 IPv4 规则，`Filters` 可写列表；任一规则匹配地址即命中。列表都采用“或”关系。

## Name 正则示例

忽略大小写匹配 `MyNetwork`：

```text
Regex (?i)(MyNetwork)
```

还可以在服务器浏览器的名称过滤框中输入 `regex:` 加正则，快速测试表达式。

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

## 完整示例

下面是官方为假设中的 NelsonNet 网络提供的验证列表。第一条规则允许指定的 Steam ID，并添加“官方”标签；第二条规则拒绝名称中含 NelsonNet 的仿冒服务器：

```text
Name NelsonNet Verification Example
IconURL https://cdn.smartlydressedgames.com/ShareX/2024/12/ExampleIcon.png

Labels
[
    {
        Name Verified
        Text <color=#708fbd>NelsonNet Official</color>
    }
]

Rules
[
    {
        Action Allow
        Description Verify NelsonNet's Steam IDs
        Label Verified
        Type ServerID
        Values
        [
            85568392932910946
        ]
    }
    {
        Action Deny
        Description Hide fake NelsonNet servers (case-insensitive check for "NelsonNet" in the name)
        Type Name
        Regex (?i)(NelsonNet)
    }
]
```

也可从下方“示例 Curation List”的 URL 在线添加这份列表。

## 常见问题

### 如何取得其他服务器的公开信息？

在服务器大厅界面按“Clipboard Debug”热键（默认 **PageDown**），会复制服务器的公开信息。例如：

![服务器大厅公开信息示例](/img/ServerInfoScreen.png)

```text
Name: Nelson's PEI Server
Description:
Thumbnail:
Address: 192.168.48.73
Connection Port: 27016
Query Port: 27015
SteamId: 85568392932910946 (k_EAccountTypeGameServer)
Ping: 1ms
0 workshop file(s):
```

其中 `Name` 可用于名称规则，`Address` 可用于 IPv4 规则，`SteamId` 可用于 ServerID 规则。正则表达式可先从上文的 `(?i)(your text here)` 开始，再用下方工具测试更复杂的表达式。

## 官方示例与工具

- [示例 IconURL](https://cdn.smartlydressedgames.com/ShareX/2024/12/ExampleIcon.png)
- [示例 Curation List](https://cdn.smartlydressedgames.com/ShareX/2024/12/ExampleCurationList.txt)
- [Case sensitivity](https://en.wikipedia.org/wiki/Case_sensitivity)
- [regex101](https://regex101.com/)
- [RegExr](https://regexr.com/)
- [Regex Generator](https://regex-generator.olafneumann.org/)
- [Regex Tester](https://www.regextester.com/)

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/server-browser-curation.html)
