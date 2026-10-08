---
title: Asset Bundles（资源包）
translation:
  source: assets/asset-bundles.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Asset Bundles（资源包）

游戏会在运行时通过 **Unity Asset Bundles** 加载纹理、音频、网格、预制体等资源。Unturned 使用资源包的方式这些年经历了多次演进，从单独的 `*.unity3d`，到 `*.content`，再到现在的 `*.masterbundle`。

对于几乎所有新项目，都应该使用 **Master Bundle（主资源包）**。

## 工具准备

使用下面任何工具前，都需要先把 Unturned 提供的工具导入 Unity 项目：

1. 在 Unity 中打开 **Assets > Import Package > Custom Package...**。
2. 找到 Unturned 安装目录。
3. 进入 `Extras/Sources` 目录。
4. 导入 `Project.unitypackage`。

## Master Bundles

Master Bundle 是打包和分发资源效率最高的方式。只要项目计划分享给其他玩家，基本都应该使用它。

只有少数资源类型不支持 Master Bundle。

### 文件结构

Master Bundle 可以放在任何游戏会扫描 `*.dat` 文件的目录中。除非显式设置覆盖项，否则游戏会使用文件层级中距离当前资源最近的 Master Bundle。

加载目录时，游戏会检查其中是否存在 `MasterBundle.dat`，用来标记这里有一个 Master Bundle。例如，游戏 `Bundles` 目录中的 `core.masterbundle` 就采用这种结构。

`MasterBundle.dat` 可以设置以下字段：

~~~text
// Name of asset bundle file in the same directory as MasterBundle.dat.
Asset_Bundle_Name core.masterbundle

// Path to the asset bundle within Unity.
// Unity subfolders should match 1:1 with dat subfolders.
Asset_Prefix Assets/CoreMasterBundle

// Version 3 is Unity 2018.4 LTS. Older versions have shader consolidation enabled for backwards compatibility.
Asset_Bundle_Version 3
~~~

单个资源的 `*.dat` 文件还可以设置：

~~~text
// Name of master bundle to load files from.
Master_Bundle_Override core.masterbundle

// If included, look for an individual *.unity3d asset bundle instead.
Exclude_From_Master_Bundle

// Path within master bundle to load files from.
// Used by notes to share a common object prefab.
Bundle_Override_Path /Objects/Medium/Furniture/Note

// If true, path within master bundle appends asset file name as subdirectory.
// For example:
// Guns/Eaglefire.asset → Guns/Eaglefire/Item.prefab
Bundle_Path_Include_Filename true
~~~

### 工具用法

1. 先完成上面的“工具准备”。
2. 从 **Window > Unturned > Master Bundle Tool** 打开工具。
3. 在 Project 窗口中选择资源目录。
4. 在 Inspector 中把它们标记到任意 Asset Bundle。
5. 在工具中勾选资源包名称旁的复选框，将它标记为 Master Bundle。这样会筛选显示的资源包，并记录对应导出路径。
6. 点击 `...` 选择资源包文件的导出位置。
7. 点击 **Export**。
8. **（可选）** 如果要把资源包分发给其他玩家，应启用 **multiplatform**。这样会包含各平台专用 Shader，并导出 `.hash` 文件，服务器可以用它校验客户端资源包完整性。

### 导出的文件

导出 Master Bundle 后，导出目录中还会生成以下文件：

- `*_linux.masterbundle` 与 `*_mac.masterbundle`：分别包含 Linux 和 macOS 平台专用 Shader。仅在启用 **multiplatform** 时生成。
- `*.masterbundle.hash`：服务器用于验证其他平台资源包完整性的哈希文件。例如 Windows 服务器可用它校验 macOS 和 Linux 客户端资源包。

::: warning
删除 `.hash` 文件后，作弊者可能篡改资源包，例如让某些材质在黑暗中发光，或让物体变得可透视。分发 Mod 的 Master Bundle 时应始终包含 `.hash` 文件。
:::

- `*.masterbundle.manifest`：列出资源包内所有资源、路径及哈希值的清单。启用 multiplatform 时，每个平台都会生成一个 manifest。它也非常适合排查 Mod 打包问题：可以确认资源是否按预期进入资源包，并辅助使用 Master Bundle Pointer。

## 单独的 Asset Bundle

绝大多数官方文件已经迁移到 Master Bundle，但仍有少量内容使用单独的 `*.unity3d` 资源包，例如：

- 每张地图自己的道路纹理。
- Chart 使用的颜色资源。
- 关卡环境音效。

### 工具用法

1. 先完成“工具准备”。
2. 从 **Window > Unturned > Bundle Tool** 打开工具。
3. 在 Project 窗口中选择单个资源或资源目录。
4. 点击 **Grab** 预览将要导出的资源。
5. 点击 **Bundle** 并选择资源包保存位置。

### 历史原因

Unturned 3.0 早期开发时，一个重要目标就是支持运行时加载玩家制作的 Mod 内容。当时资源包中的文件按“不带扩展名的名称”读取，因此不同游戏资源类型会查找固定名字，例如 `Item`、`Object`、`Animal` 等。`.unity3d` 扩展名则是为了兼容当时的网页浏览器环境。

这个系统随着时间推移逐渐显得不够理想，因此后来被 Master Bundle 体系取代。

## Content Bundles（`*.content`）

::: warning 已弃用
自 Unturned 3.22.4.0 起，Content Bundle 已弃用；从 2022 年 2 月 25 日起已经移除支持，应改用 Master Bundle。
:::

Content Bundle 过去主要用于地形、材质调色板和电台歌曲。

虽然更推荐把旧资源正确迁移到 Master Bundle，但已有的 Content Bundle 可以直接复用：把 `*.content` 重命名为 `*.masterbundle`，然后按照前文的 Master Bundle 文件结构添加对应的 `MasterBundle.dat` 即可。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/assets/asset-bundles.html)
