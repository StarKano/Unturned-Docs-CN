---
title: 资源定义（Asset Definitions）
translation:
  source: assets/asset-definitions.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 资源定义（Asset Definitions）

Unturned 的 **资源定义（Asset Definition）** 用于把游戏数据与 Unity Asset Bundle 关联起来。这些定义存储在 `.dat` 或 `.asset` 文件中。

文件语法请参阅[数据文件格式](/assets/data-file-format.html)。

## 文件头

每个资源都有通用的 `GUID` 和 `Type`：

- **`GUID`**：资源的全局唯一标识，用于把不同资源互相引用。如果留空，游戏会在启动时自动生成一个 GUID 并写入文件。
- **`Type`**：字符串。各类资源文档会列出对应类型名，它决定游戏要读取哪些字段；也可以填写任意模块中类的完整限定名称。

::: note
`Type` 和 `GUID` 默认直接写在根字典中，也可以放到 `Metadata` 子字典，例如：

~~~text
Metadata
{
    GUID 7e4b847061b64272b42ea8869fd053c7
    Type SDG.Unturned.Asset
}
~~~

如果 `GUID` 放在 `Metadata` 子字典中，截至 2023-04-13，游戏启动时无法自动为其补写新生成的 GUID。
:::

## 正文

正文部分存放具体类的属性。每种资源类型的文档会进一步说明这些字段。

- **`ID`** `uint16`：16 位标识符。由于历史原因，它必须在同一资源分类中保持唯一，例如载具、物品、动物各自独立。对象（Object）是例外，因为这一类型已经升级为完整使用 GUID。

正文属性也可以放进 `Asset` 子字典中，例如：

~~~text
GUID [...]
Type [...]
Asset
{
    ID [...]
    Key1 Value
    Key2 Value
}
~~~

这与下面的写法等价：

~~~text
GUID [...]
Type [...]
ID [...]
Key1 Value
Key2 Value
~~~

## Unity Asset Bundles

每个 Unturned 资源都会关联一个 Unity Asset Bundle。如果当前文件层级中存在 Master Bundle，则优先使用它；否则游戏会查找与 `.dat` 文件同名的 `.unity3d` 资源包。

可用以下字段控制资源包加载方式：

- **`Asset_Bundle_Version`** `int`：表示这个 `.unity3d` 资源包是用哪个 Unity 版本构建的。Unturned 升级 Unity 后会依据该值尽量保持向后兼容。`1` = Unity 5.5，`2` = 2017.4 LTS，`3` = 2018/2019 LTS，`4` = 2020 LTS，`5` = 2021 LTS，`6` = 当前最新版（Unity 2022 LTS）。
- **`Master_Bundle_Override`** `string`：指定要使用的 Master Bundle 名称，覆盖同名 `.unity3d` 或文件层级中自动找到的 Master Bundle。
- **`Exclude_From_Master_Bundle`**：只要该字段存在，就改为查找 `.unity3d`，而不是使用文件层级中的 Master Bundle。
- **`Bundle_Override_Path`** `string`：指定要从 Master Bundle 内哪个路径读取资源，而不是使用当前资源文件自身的路径。

## 本地化

每个资源会根据当前语言，在同目录中查找对应的本地化 `.dat` 文件，例如 `English.dat` 或 `French.dat`。

## 加载顺序

扫描某个资源目录时，游戏按以下顺序检查：

1. 是否存在与文件夹同名的 `.asset` 文件，例如 `Eaglefire/Eaglefire.asset`。
2. 是否存在与文件夹同名的 `.dat` 文件，例如 `Eaglefire/Eaglefire.dat`。
3. 是否存在 `Asset.dat`。
4. 如果以上都没有，则加载目录中所有 `.asset` 文件。

> 上游原文：[assets/asset-definitions.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/asset-definitions.rst)