---
title: 服务器配置
translation:
  source: servers/server-configuration.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 服务器配置

大多数服务器选项位于服务器的 `Config.txt` 中，例如 `Servers/Default/Config.txt`。如果服务器创建于 **3.25.8.0** 之前，请参阅下文的旧版配置转换说明。

启动时添加 `-LogGameplayConfig`，可以在控制台查看配置文件覆盖了哪些选项。留空的选项使用默认值；除非添加 `-NoLevelConfigOverrides`，地图仍可能覆盖这些默认值。

## `Config.json` 如何转换为 `Config.txt`？

**3.25.8.0** 之前创建的服务器使用 `Config.json`，其中同时保存简单、普通、困难三种难度的选项。服务器启动时会按当前难度转换出独立的 `.txt` 文件。例如服务器 ID 为 `ExampleServer`、难度为默认的普通难度时，生成位置是：

```text
Servers/ExampleServer/Config_NormalDifficulty.txt
```

转换时只写入偏离默认值的选项，因为 `Config.txt` 中的空值代表沿用默认值。

## 如何指定加载的配置文件？

使用 `-GameplayConfigFile` 指定路径。例如服务器 ID 为 `ExampleServer` 时：

```text
-GameplayConfigFile="SpecialEventConfig.txt"
```

会创建 `Servers/ExampleServer/SpecialEventConfig.txt`。也可以指定绝对路径，例如 `-GameplayConfigFile="C:/SpecialEventConfig.txt"`。

## 如何移除自动生成的注释？

添加 `-GameplayConfigNoGeneratedComments`，可删除 `Config.txt` 中所有以 `>` 开头的选项说明，使文件更简洁。

## 如何隐藏未使用的选项？

添加 `-GameplayConfigNoEmptyValues`，只保留已覆盖默认值的选项。

## 如何阻止地图覆盖配置？

`Config.txt` 中明确赋值的选项优先于地图覆盖项；留空的默认值仍可能被地图修改。若要完全禁止地图覆盖配置，添加 `-NoLevelConfigOverrides`。

## 旧版 `Config.json`

旧服务器目录中的 `Config.json` 会在启动时按当前难度自动转换。旧格式有以下不足：

1. 地图覆盖项优先于默认值。服务器通过比较 JSON 中的值与默认值来决定是否覆盖。因此，如果你希望保留某项默认设置（例如开启命中标记），而地图将其关闭，除使用 `-NoLevelConfigOverrides` 外无法阻止。
2. 三种难度共用一个文件，容易修改了另一种难度的选项却误以为设置没有生效。
3. 容易漏写逗号，导致文件无法加载。
4. 不支持注释。

新格式为各难度分别生成文件，可通过 `-GameplayConfigFile` 使用额外配置文件；每项设置附有用途、可选值和默认值说明，用户自己的注释也会保留。文本文件还可直接用记事本编辑，无需处理 JSON 逗号。

如果仍需沿用 `Config.json`，添加 `-UseLegacyJsonGameplayConfig`。

> [官方原文](https://docs.smartlydressedgames.com/en/stable/servers/server-configuration.html)
