---
title: 开始使用
translation:
  source: about/getting-started.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 开始使用

要开始为 *Unturned* 制作 Mod，或者搭建自己的多人服务器，首先需要准备一些工具。本页说明不同用途通常需要哪些工具。

## 安装 Unturned

制作、发布和更新 Mod 都需要安装 *Unturned*。游戏可从 [Steam](https://store.steampowered.com/app/304930/) 免费下载。

游戏文件本身不仅包含制作自定义内容所需的一部分工具，官方资源也可以作为制作物品、对象以及其他游戏资源时的参考示例。

把 *Unturned* 加入 Steam 库后，还会同时获得 **Unturned Dedicated Server** 应用，它用于搭建多人服务器。部分服主也可能更喜欢通过 [SteamCMD](/servers/steamcmd.html) 下载和维护服务器。

## 安装 Unity

要为游戏导出自定义内容，需要安装 Unity Editor。官方建议使用与 *Unturned* 相同的版本，目前是 **2022.3.62f3**。可以从 [Unity 下载归档](https://unity.com/releases/editor/archive) 获取。

大多数 2022.3 LTS 版本通常可以兼容；某些更旧的 LTS 版本经过额外配置也可能可用，但不保证行为完全符合预期。

安装 Unity 时至少建议勾选：

- **Linux Build Support (Mono)**：让你的 Mod 支持 Linux。
- **Mac Build Support (Mono)**：让你的 Mod 支持 macOS。

Unity 安装完成后即可创建项目来存放自定义内容。此时推荐导入 Unturned 提供的 Unity Package。

## Unity Packages

Unturned 基础安装中附带多个 Unity Package，其中包含可供参考的原版内容示例，以及从 Unity 导出游戏内容所需的工具。

这些文件位于：

```text
.../Unturned/Extras/Sources
```

并会随游戏的重要更新持续更新。

导入方式：

1. 打开你的 Unity 项目。
2. 在工具栏选择 **Assets > Import Package > Custom Package...**。
3. 浏览到 `.../Unturned/Extras/Sources`。
4. 导入 `Project.unitypackage`；`ExampleAssets.unitypackage` 可按需导入。

导入 Unity Package 时，默认会勾选其中全部内容。不需要的项目可以取消勾选。

### Project.unitypackage

这是导出自定义内容所需的基础包，包含：

- 默认 Project Settings。
- [Asset Bundle 工具](/assets/asset-bundles.html)。
- [Mod Hooks](/assets/mod-hooks.html)（可选）。

### ExampleAssets.unitypackage

这个包包含原版内容示例和一些实用 Prefab：

- `CoreMasterBundle` 目录包含各种原版资源类型的示例。
- `Game/Sources/Animations` 目录包含原版物品动画。
- `Resources/Characters/Preview.prefab` 适合预览服装。

::: warning
不要把自定义内容放进 `CoreMasterBundle` 目录。应为自己的内容建立独立目录。
:::

## 其他工具

制作 Mod 通常还需要以下工具。

### 文本编辑器

编写资源使用的游戏数据文件，需要文本编辑器（例如记事本）或代码编辑器（例如 Notepad++、Visual Studio Code）。代码编辑器通常还提供跨文件搜索、批量替换等实用功能。

**不推荐**使用 Microsoft Word、LibreOffice、WordPad 这类文字处理器。它们并非为纯文本文件设计，使用不当很容易写入多余字符。

如果你不确定该用什么，Windows 自带的记事本最简单，不会引入太多可能让新手困惑的额外功能。

### 图像编辑软件

如果要制作自定义纹理，例如新衬衫、裤子、自定义对象材质或 2D 特效，需要支持透明通道的图像编辑软件。免费的选择包括 Paint.NET、GIMP 和 Krita。

### Blender

制作自定义模型和动画需要 3D 建模工具，例如 Blender。Unturned 官方也使用 Blender，但并不强制要求只能使用它。

> 上游原文：[about/getting-started.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/about/getting-started.rst)
