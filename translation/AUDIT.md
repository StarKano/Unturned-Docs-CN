# 官方文档对照记录（2026-10-07）

对照对象：[SmartlyDressedGames/Unturned-Docs `stable`](https://github.com/SmartlyDressedGames/Unturned-Docs/tree/stable)，提交 `e0e8bb4fd08847edb9173eef498e104bc5d2d4cb`。该提交与 `translation/upstream.json` 记录一致。官网的 `/en/` 当前指向 `/en/stable/`。

## 页面与结构

- 官方仓库共有 163 个 `.rst` 文件：159 篇公开分类正文、站点首页，以及 `sdg/` 下 3 篇未列入公开目录的文件。
- 159 篇公开正文在 `docs/` 中均有对应 Markdown 页面，没有缺页。
- 官方首页的目录顺序已反映在侧栏：入门、Mod 入门、物品、载具、对象、NPC、其他资源、地图、服务器、数据、U3 SDK。官方 `data/enum/` 和 `data/struct/` 的目录页现作为三级菜单。
- 物品栏先列“入门、蓝图、上下文操作”，其余按官方 `items/*` 通配目录的文件名顺序排列。侧栏标签从页面 frontmatter 读取，与页面一级标题一致。

## 正文差异

**有对应页面不等于全文同步。** 一些现有译文只覆盖英文原文的概要。以下是优先复核的明显案例（文件长度仅用来筛选，中文与 RST 标记会影响比例，不能作为准确完成率）：

| 页面 | 上游约字符数 | 原译文约字符数 | 主要风险 |
| --- | ---: | ---: | --- |
| `items/gun-asset.rst` | 63,306 | 4,009 | 大量枪械字段、说明及示例未逐段覆盖 |
| `items/blueprints.rst` | 28,021 | 2,039 | 合成蓝图属性表和用法高度缩略 |
| `items/introduction.rst` | 26,841 | 3,574 | 物品通用字段与制作步骤缩略 |
| `items/magazine-asset.rst` | 12,593 | 1,577 | 弹匣字段说明缩略 |
| `items/sight-asset.rst` | 10,737 | 2,005 | 瞄具字段说明缩略 |

原译文长度不足原文 35% 的页面还有 `servers/steamcmd`、`items/caliber-asset`、`items/clothing-asset`、`items/tactical-asset`、`servers/glazier`、`items/gear-asset`、`items/blueprints_inputitem`、`servers/server-auto-restart`、`items/actions`、`servers/server-hosting-rules`、`items/weapon-asset`、`servers/port-forwarding`、`assets/vehicle-asset`、`items/barrel-asset`、`npcs/rewards`、`servers/server-browser-curation`、`items/barricade-asset`。应以原文的段落、字段和示例逐项核对，不宜仅凭长度判定。

本轮已将 `servers/server-hosting` 和 `servers/server-configuration` 按官方原文补全。后续优先处理上表的物品基础页，再复核高风险的枪械、载具和服务器参数页。页面内原有的 `translation.status: translated` 表示已有中文初译，**不表示逐段校对完成**。
