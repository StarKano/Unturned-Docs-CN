---
title: U3 SDK 常见问题
translation:
  source: u3-sdk/faq.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# U3 SDK 常见问题

项目文件位于 [SmartlyDressedGames/U3-SDK](https://github.com/SmartlyDressedGames/U3-SDK)。

## 通用

### 为什么公开游戏源代码？
Unturned 最大的优势之一是社区。公开源文件可以让玩家持续扩展游戏，无论官方未来如何变化，都有助于长期延续生态。

### 会让作弊开发更容易吗？
不会增加太多新信息。高质量反编译早已存在，官方过去也发布过代码文档。BattlEye 的 Unturned 专用反作弊代码仍为私有，BattlEye 会继续监控新作弊。

### 可以在 Steam 发布衍生作品吗？
官方希望尽可能支持。参阅 [Steam Community Mods](https://store.steampowered.com/about/communitymods/)。

### Steam 正式版还会更新吗？
会，官方计划继续维护。

### SDK 会与正式版同步吗？
会，源码计划与最新正式发布保持同步。

### 现在算 Open Source 吗？
严格来说不算。当前非商业许可证不符合 [OSI 开源定义](https://opensource.org/osd)。官方理想目标是在未来条件允许时改为 [MIT License](https://opensource.org/license/mit)。

### 需要付费 Unity License 吗？
截至 2026-07-02，使用 Unity 年收入低于 200,000 美元的个人和业余开发者通常可使用 Unity Personal，但仍应自行阅读 [Unity 条款](https://unity.com/products)。

### 独立 Fork 会造成碎片化吗？
官方希望理念相近的开发者围绕共享 Fork 合作，让改进惠及多个项目。

## 技术

### 为什么 SDK 忽略我的设置？
SDK 把多数存档数据和部分设置与正式版分开保存；在 SDK 中重新设置一次后会持久化。

### 如何导出 Development Build？
**Window > Unturned > Build Tool > Build Test**，完成后运行 `Builds/Test/Unturned.exe`。Development Build 启用额外日志、可视化和 Profiler 等调试工具。

### 如何导出 Release Build？
**Window > Unturned > Build Tool > Build Standalone Platforms**，用于构建 Windows、macOS、Linux 独立 Mod。

### 可以托管服务器吗？
可以。服务器按 `Builds/Shared/ModInfo.json` 中 `Name` 筛选。Development Build 可作为客户端或服务器；Editor 可启用 **Playing in Unity > Dedicated Server In Editor**。

### Workshop Mod 能工作吗？
默认情况下普通 Unturned Workshop 文件应兼容并自动加载。升级 Mod 的 Unity 版本可能影响兼容。

### 插件能工作吗？
默认大多数服务器插件应兼容，但代码改动可能破坏依赖，例如重命名或移除插件调用的代码。

## 贡献

### 如何参与？
推荐帮助现有社区 Fork（或创建一个），以及参与 [GitHub Discussions](https://github.com/SmartlyDressedGames/U3-SDK/discussions)。

### 如何报告问题？
U3 SDK 自身问题请提交到 [Issue Tracker](https://github.com/SmartlyDressedGames/U3-SDK/issues)。

### 如何报告安全漏洞？
影响原版游戏的漏洞不要公开提交，请发邮件至 `info@smartlydressedgames.com`。

### 在哪里讨论开发？
[GitHub Discussions](https://github.com/SmartlyDressedGames/U3-SDK/discussions) 是主要交流地点。

### 会接受 Pull Request 吗？
当前重点是允许玩家创建自己的游戏变体，从平衡修改到 Total Conversion。若某个 Mod 获得显著社区支持，官方可能联系合作。

## 依赖项

### 有代码被移除吗？
有。无法重新分发的第三方寻路、反作弊等代码被移除。如果你拥有相应许可证，可以使用正式版集成。

### 为什么僵尸会走进墙？
高级导航依赖 [A* Pathfinding Project](https://arongranberg.com/astar/)。

### 为什么交互高亮整个模型？
边缘高亮依赖 [Highlighting System Plugin](https://deepdreamgames.com/highlightingsystem.html)。

### 为什么水面很简单？
高级水 Shader 和 Planar Reflection 依赖 [Unity 4 Pro Standard Assets](https://docs.unity3d.com/462/Documentation/Manual/HOWTO-Water.html)。

### 为什么某些地图有 Missing Component？
部分 Prefab 包含 [NavmeshCut](https://arongranberg.com/astar/documentation/stable/navmeshcut.html)，缺少寻路库时无法加载。

## 资源

### 可以修改 Core Asset 吗？
SDG 对修改自家内部制作资源没有意见，但 Core Asset Bundle 被排除在 SDK 外，因为其中含第三方授权内容，例如社区皮肤和音频。官方没有简单完整的第三方/自制资源清单，因此无法整体授权重新分发全部 Core Asset，也无法逐项保证可重新授权。

### 大型资源如何版本控制？
官方使用 [Git LFS](https://git-lfs.com/)，SDK 的 `.gitattributes` 已准备好对应规则。

### 公共 Fork 不开 Git LFS 可以吗？
可使用两个仓库：公开仓库存源码，私有下游仓库存资源文件。

## 限制

### 可以商业化吗？
不可以，必须严格非商业，具体以 License 为准。

### 什么是非商业？
玩家必须免费访问 Mod 全部功能和内容。无论游戏内外，收款换取游戏内内容或服务都属于商业用途。

### 可以接受捐赠吗？
可以自愿捐赠；但用“捐赠”换游戏内物品、升级、权益属于商业用途。

### 可以给赞助者游戏外权益吗？
可以，例如特殊 Discord 身份组。

### YouTube 视频可以开广告或赞助吗？
可以，不视为 SDK 商业使用。

### 命名有限制吗？
不能暗示由 SDG 制作或官方背书，例如不能叫“Unturned 2”。

### 支持哪些平台？
Windows、macOS、Linux（包括 Steam Deck）。

### 必须公开 Mod 源码吗？
不需要，可以保持私有。

### Fork 服务器如何管理？
官方服务器托管规则只适用于出现在 Unturned 官方公开服务器列表中的服务器。Fork 服务器默认不显示，但技术上可能做到；只要出现在官方列表，就应遵守官方规则。

Fork 维护者也可以自行制定服务器规则。为某个 Fork 托管服务器时，还需遵守该项目自己的规定。

> 上游原文：[u3-sdk/faq.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/u3-sdk/faq.rst)
