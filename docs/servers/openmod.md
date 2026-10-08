---
title: OpenMod
translation:
  source: servers/openmod.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# OpenMod

**OpenMod** 是一个 Unturned 插件框架，由 Rocket 原维护成员参与开发，可与 RocketMod / LDM 共存，并兼容部分现有 Rocket 插件。

## 推荐安装方式

通过 RocketMod Installer Plugin 安装：

1. 从 [OpenMod.Installer.RocketMod 发布页](https://github.com/openmod/OpenMod.Installer.RocketMod/releases/latest)下载最新的 OpenMod Installer Plugin。
2. 将插件放入：

```text
/Rocket/Plugins
```

3. 重启服务器。
4. 执行：

```text
/openmod install
```

5. 按提示完成安装。

安装完成后，可以按照[插件安装文档](https://openmod.github.io/openmod-docs/userdoc/concepts/plugins.html)添加插件。

## 手动安装

1. 从 [OpenMod 发布页](https://github.com/openmod/OpenMod/releases/latest)下载最新的 `OpenMod.Unturned.Module-vX.X.X.zip`。
2. 将其中的 `OpenMod.Unturned` 文件夹复制到 Unturned 安装目录的 `Modules`。
3. 启动服务器。
4. 首次启动时 OpenMod 会自动下载核心组件，因此可能需要等待一段时间。之后可以按照[插件安装文档](https://openmod.github.io/openmod-docs/userdoc/concepts/plugins.html)添加插件。

## 插件与资料

可以在[开源插件列表](http://openmod.github.io/openmod-plugins)中查找 OpenMod 插件。项目源码和使用说明分别见 [GitHub 仓库](https://github.com/openmod/openmod)与[官方文档](https://openmod.github.io/openmod-docs/)。

## 与 RocketMod 共存

OpenMod 可以和 RocketMod 同时安装，并不是必须替代 RocketMod。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/servers/openmod.html)
