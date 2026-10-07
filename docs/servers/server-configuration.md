---
title: 服务器配置
translation:
  source: servers/server-configuration.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 服务器配置

大多数服务器玩法选项位于服务器目录中的 `Config.txt`，例如：

```text
Servers/Default/Config.txt
```

空值会使用默认设置；地图自身也可能覆盖默认值。若要查看哪些项目被配置文件覆盖，可使用命令行参数：

```text
-LogGameplayConfig
```

## 指定其他配置文件

可以使用：

```text
-GameplayConfigFile="SpecialEventConfig.txt"
```

也可以指定绝对路径。

## 精简 Config.txt

不需要自动生成的解释注释时：

```text
-GameplayConfigNoGeneratedComments
```

只希望保留实际覆盖项时：

```text
-GameplayConfigNoEmptyValues
```

若不希望地图覆盖任何默认配置：

```text
-NoLevelConfigOverrides
```

旧服务器可能仍使用 `Config.json`。新版服务器会按难度将旧格式转换为新的文本配置；如确实需要继续使用旧格式，可添加 `-UseLegacyJsonGameplayConfig`。

> 上游原文：[servers/server-configuration.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/servers/server-configuration.rst)
