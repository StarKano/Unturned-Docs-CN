---
title: Unity 版本升级
translation:
  source: assets/unity-upgrade.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Unity 版本升级

本页记录 *Unturned* 历次 Unity 引擎升级和重要变化。旧信息主要用于迁移老 Mod 或阅读旧教程。

## Unity 5 LTS → 2017 LTS

Unity 5.5 到 2017.4 变化很大，Unity 5 制作的 Mod 已不再兼容当前游戏。归档版本仍可从 `unity-5.5` Beta 分支获取。

升级原因主要是：Unity 2017 开始年度稳定版本，可移除旧 Bug 的绕过逻辑；以及 Apple 弃用 OpenGL，需要 Metal 支持。

Master Bundle 也在这一时期引入，以降低未来升级 Mod 的成本。

### Master Bundles

多个独立 `.unity3d` 可以合并导出为 `.masterbundle`。它不是强制要求，但通常构建和运行效率更高；快速迭代时独立 `.unity3d` 仍可能方便。

如果 `MyModBundles/Items/Guns/MyGunItem.dat` 的上级 `MyModBundles` 有 Master Bundle，游戏会按相对路径 `/Items/Guns` 查找 Unity 文件，因此 `.dat` 目录与 Unity 目录必须一一对应。

### 安装工具

旧版流程是把 `Unturned/Bundles/Sources/Tools` 复制进 Unity 项目的 `Assets/Editor`，随后从 **Window > Unturned** 使用 **MasterBundleTool**。先给目录分配 AssetBundle，再导出到有 `MasterBundle.dat` 的位置。

Shader 可从 `All_Shaders.unitypackage` 导入；官方推荐使用原版 Shader 以提高兼容性。

### 从 Unity 导出

::: warning
这一节历史较久，但截至 2024 年 11 月步骤仍然准确。
:::

在 Project Browser 选择包含 Bundle 的目录，在 Inspector 分配 AssetBundle。原版使用 `core.masterbundle`，Hawaii 使用 `hawaii.masterbundle`。

打开 Master Bundle Tool 选择 AssetBundle。需要完整支持 macOS/Linux 时勾选 **Multi-platform**。

::: tip
开发期间可以关闭 Multi-platform，只在发布候选版本开启，以减少构建时间。
:::

点击 `...` 选择导出目录。目标目录必须包含 `MasterBundle.dat`。关键字段：

- **`Asset_Bundle_Name`**：Windows Master Bundle 文件名，例如 `hawaii.masterbundle`。
- **`Asset_Prefix`**：Unity 中 AssetBundle 目录路径，例如 `Assets/MyModBundles`；游戏随后可到 `Assets/MyModBundles/Items/Guns` 等相对目录查找物品资源。

Bundled Asset 还可使用：`Exclude_From_Master_Bundle` 强制使用单独 `.unity3d`；`Master_Bundle_Override` 重定向到指定 Master Bundle；`Bundle_Override_Path` 让多个资源复用 Unity 路径或引用其他 Bundle 的模型。

#### 颜色过亮或过暗

打开 **Edit > Project Settings > Player > Other Settings**，把 **Color Space** 改为 **Linear**。若仍异常，确认纹理启用 sRGB。

#### Devkit Foliage

新版 Material 默认关闭 Instancing。启用 **Instancing** 后重新构建 Asset Bundle。

## Unity 2017 LTS → 2018 LTS

归档版可从 `unity-2017.4` Beta 分支获取。

### Asset Bundles

旧 `.unity3d`、`.content`、`.masterbundle` 通常无需更新，除非使用自定义 Shader。游戏加载时会尝试把旧 Shader 合并为新版。

重新导出后，可把 `Asset_Bundle_Version` 设为 `3`，关闭 Shader 合并。

较慢的检查（例如 Missing Mesh）变成可选，开发新内容时推荐 `-ValidateAssets`。

### Unity Packages

示例内容更新到 2018 LTS。过去独立 Package（如 `All_Shaders.unitypackage`）合并进 `Extras/Sources/Examples/ExampleAssets.unitypackage`。

### 日志 / 服务器控制台

Unity `Debug.Log` 改为写 `Logs/Client.log` 或 `Server_XYZ.log`，解决 Linux 标准输出冲突，通常无需再用 `-logfile` 绕过。`-ThreadedConsole` 成为默认，可用 `-LegacyConsole` 回退。

### Workshop

2018 LTS 上传的内容与旧版不兼容；2017 LTS 加载新版内容时会警告。

### 平台

Linux 32 位和 macOS 32 位被移除，保留 64 位。旧 Linux 32 位服务器应升级。

Player Linux Depot 不再包含 Headless Server 文件，只在 Dedicated Server Linux Depot 提供；Windows Dedicated Server 在 2018 LTS 支持并启用 Headless Mode。

## Unity 2018 LTS → 2019 LTS

变化很少。Unity 2018 LTS 归档版仍可从 `unity-2018` Beta 分支获取。

Unity 默认不再支持从单个 `.blend` 导入多个动画，推荐导出为 `.fbx` 等交换格式；Mesh / Model 同样推荐这样做，原版一直采用这一流程。

更多细节见 Unity Issue Tracker [case #1186253](https://issuetracker.unity3d.com/issues/using-multiple-animation-clips-in-blender-not-all-animation-clips-are-imported-using-a-blend-file)。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/assets/unity-upgrade.html)
