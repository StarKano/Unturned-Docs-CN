---
title: 精选地图（Curated Maps）
translation:
  source: mapping/curated-maps.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 精选地图（Curated Maps）

::: warning
官方的新版 Curated Map Program 仍在演进。随着新版计划开始接受第一批地图，部分细节可能调整。
:::

由社区制作、并在游戏内由官方直接链接的地图称为 **Curated Map（精选地图）**。玩家可以获得更多高质量内容，Mod 作者也可以在作品获得官方曝光的同时获得收入。

官方为 2025 及之后引入了新的 Curation Program，目标是让“做地图”继续保持有趣、有回报，并让更多创作者更容易参与。

## 地图如何被接受？

新版流程更精简：

1. 你在 Steam Workshop 发布一张很棒的地图。
2. 官方主动联系有潜力的地图作者。
3. 完成法律协议，例如共同作者之间 Revenue Share 的确定。
4. 根据需要完成修改。
5. 官方委托 Artist（或由作者自己）制作与地图同时发布的 Store Bundle 内容。
6. Curated Map 加入游戏。

制作期间强烈建议持续收集玩家反馈。地图在发布后的任何阶段都有可能被选中，因此作者可以相对自由地持续发布、修改和完善。

## 资格 / 指南

官方接受地图时会考虑很多因素，其中首要条件是符合以下指南。

::: tip
即使项目并不满足 Curation 资格，也仍然鼓励继续制作。丰富的 Workshop 作品可以成为未来申请 Curation 的作品集，也有机会获得官方 Feature。

不是每张地图都应该成为 Curated Map，但官方经常在 Blogpost 推荐非 Curated Map；部分质量特别高的地图还曾通过 Stockpile Bundle 获得 Revenue Share。
:::

### 包含自定义内容

地图应当给玩家“新鲜、令人兴奋”的体验。

以 Vanilla Asset 为主的地图也可能被接受，但官方强烈认为新地图加入一定量 Custom Content 很重要。

可考虑：

- 新 Item。
- 独特的城镇 Architecture Style。
- 创新使用 Modding Feature。
- 用不同方式探索 Game Mechanic。

### 不使用第三方内容

地图中的内容必须：

- 来自 Base Game 官方 Asset；或
- 是你自己制作的 Custom Asset。

不能接受使用其他人 Mod Asset 的地图，包括其他 Curated Map 的 Asset。

### 美术风格

Curated Experience 仍应看起来、玩起来像 *Unturned*。Custom Content 通常应匹配 Base Game Art Style，类似已有 Curated Map。

脸、头骨等类人绘图应保持 Blocky，接近游戏角色风格。这是官方经常要求返修的地方。

### 质量保证

**Asset Validation**  
使用 `-ValidateAssets` 启动游戏不应产生 Warning / Error。

**英文文本**  
Mod Team 至少有一位熟练英语成员会很有帮助。清晰的 Grammar / Spelling / Punctuation 不仅让英语母语玩家更容易理解，也能让非母语玩家阅读和后续翻译更容易。

**项目组织**  
为防止无意 Asset 被打进 Asset Bundle，惯例是把项目文件分成 Sources 与 MasterBundle 目录。

例如 Hawaii 项目根目录有 `HawaiiMasterBundle`，而 `Sources` 中放 `.blend`、`.mb`、`.xcf`、`.psd`、`.ai` 等源文件。这样导出 Bundle 时只会包含 `.fbx`、`.prefab` 等实际游戏文件。

**Asset Duplication**  
多个 Object 使用相同 Prefab 或 Vanilla Content 时，应复用同一个 Prefab 来减小 Bundle。Vanilla Note 使用 `Bundle_Override_Path` 就是示例。

**Water Reflections**  
使用多个 Water Volume 时，只允许一个启用 Planar Reflection。每个启用的 Volume 都需要把世界额外再 Render 一遍，是游戏中最昂贵的效果之一。

**Overlapping Navmeshes**  
Navmesh Bounds 不应重叠，否则 Multiplayer 中 Zombie 会异常出现/消失。

**Visibility Overlay**  
Editor Visibility Menu 会累计每个 Region 的 Mesh Complexity。理想情况下只应有少量红色区域。

**Item Icons**  
每个 Item 都应有正确 Inventory Icon。Unity 中临时加一个 Orthographic Camera 可以快速预览。

### 内容适宜性

内容应符合通常意义上的 “Family-friendly”。

- 文本不要包含强烈 Profanity、轻度咒骂、Slur 或明显暗示。可用虚构词（gosh/darn/dang/drats/heck）、截断、`[REDACTED]` / `[UNINTELLIGIBLE]` 等替代。
- 不允许直接描绘 Drug、Alcohol 和类似物质。关联更弱的概念允许，例如用 Berry Mix 替代 Alcohol；Vineyard、Bottle、Keg、Distillery 也允许。Cigarette、Vaping、Smoking、Tobacco 不允许。
- 文本应尽量 Gender-neutral，例如用 “Firefighter” 而不是 “Fireman”。
- 不要链接游戏外内容，例如网站和电话号码。电话号码通常会被要求改为 555 号段。

## 主菜单曝光

Curated Map、热门 Workshop Item 或官方特别 Feature 的地图可能出现在主菜单 Spotlight。

主菜单会在最近 News / Announcement 上方显示 Preview Image 和可展开 Description。

Description 支持 BBCode：

- `[b]`
- `[i]`
- `[list]`
- `[*]`
- `[h1]`
- `[img]`
- `[url]`

描述最好简洁。很长的内容（例如 ID List）更适合放在单独 Discussion Topic。

默认会自动推荐热门 Item；官方也可以手动 Feature 花费大量心血的项目和 Curated Map，包括新发布和大型更新。更新可链接到独立 Release Notes URL。

Curated Map 还会出现在 Singleplayer 的 Curated Maps List，并继承主菜单的 “new” / “updated” 标签。

## Stockpile 准备

Curated Map 发布通常会伴随一些 Cosmetic / Skin 上架 Item Store，销售 Royalty 会与地图作者分享。

**File Sharing**  
理想情况下，Item 已按游戏服装正确设置，并导出为 `.unitypackage`，随后由官方导入 Vanilla Project。

**Curated Workshop Item**  
Payment Split 通过一个隐藏的 Curated Workshop Item 管理。新 Contributor 的 Bank / Tax 信息处理通常需要数周。

**Bundles**  
通常准备 2–3 个 Bundle，每个包含 4–6 个 Item。可以是松散主题集合，也可以是完整 Outfit。Outfit Bundle 应避免多个 Item 占同一个 Cosmetic Slot。

**Mystery Boxes**  
通常 15–20 个 Rare / Epic / Legendary Item。Box 可以有主题，但每个 Item 应能单独使用；不适合放必须配套才能成立的 Shirt + Pants Set。

**Craftable Items**  
通常 10–20 个 Uncommon Item。与 Mystery Box 相反，这里更适合 Matching Set 和简单 Recolor。

## FAQ

### Curated Map 会更新吗？

官方可能建议 Bug Fix 或其他达到质量标准所需修改，但额外内容主要由地图作者决定。

### 哪些 Game Mode 的地图可能被接受？

官方支持的 **Survival** 和 **Arena** 最可能被接受。偶尔也会考虑热门 Custom Game Mode 地图。

### 多张地图可以一起发布吗？

可能，但需要一起发布在设计上有意义。例如一张 Arena Map 与一张偏 PvE 的 Survival Map。官方仍在探索这种形式。

> 上游原文：[mapping/curated-maps.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/mapping/curated-maps.rst)
