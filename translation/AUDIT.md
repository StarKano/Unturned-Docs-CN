# 官方文档对照记录（2026-10-08）

对照对象：[SmartlyDressedGames/Unturned-Docs `stable`](https://github.com/SmartlyDressedGames/Unturned-Docs/tree/stable)，提交 `e0e8bb4fd08847edb9173eef498e104bc5d2d4cb`。该提交与 `translation/upstream.json` 一致，官网 `/en/` 当前重定向至 `/en/stable/`。

## 页面和目录

- 官方仓库有 163 个 `.rst` 文件：159 篇公开分类正文、首页和 `sdg/` 下 3 篇未进入公开目录的文件。
- 159 篇公开正文在 `docs/` 中均有对应页面。首页分类和侧栏层级已按官方目录整理；物品页顺序按官方 `items/*` 顺序排列。
- 页面 frontmatter 的标题与正文一级标题一致。侧栏标签从 frontmatter 读取。

## 全量正文结构核对

运行 `py -3 translation/audit_coverage.py <上游仓库路径>`，逐篇读取官方 RST 和本地 Markdown，并生成 [`coverage-report.json`](coverage-report.json)。本轮检查结果：

| 检查项 | 159 篇中的结果 |
| --- | --- |
| 目标页面 | 159 篇均存在 |
| 以粗体定义的属性名 | 无遗漏 |
| `code-block` / `literalinclude` 示例块数量 | 无页面少于官方原文 |
| 官方图片路径 | 无遗漏 |
| 官方外部 URL | 无遗漏 |
| RST 行内代码原样匹配 | 16 篇存在差异，逐项检查后属于写法转换：例如把 `*` 改写成 `×`、把 `÷` 改写成 `/`，把 `Type X` 合并为枚举说明，或省略示例路径前的 `...` |

该脚本只检查结构锚点，**不等于逐句语义一致性证明**。尤其是长篇字段页，所有字段名都出现，也可能有说明被压缩。`translation.status: translated` 表示已有中文初译，不能作为逐段校对完成标记。

## 本轮正文修正

- 补全物品基础、蓝图、弹匣、枪械、瞄具、口径、服装等页面的字段说明和使用条件。
- 补回服务器自动重启的 Windows 批处理和 Linux Shell 脚本；补全 SteamCMD 安装、首次启动与安全关闭步骤，以及端口转发操作。
- 修正战术附件近战伤害的表述，并展开 NPC 条件、奖励和战术附件中的完整字段名与枚举值。
- 补上路障与结构资源的默认库存音效、路障热源标签转换、放置例外和官方警告。
- 补全 Glazier 各 UI 模式的适用背景和限制，以及若干资源页中的技术路径和示例。

## 验证

- `vuepress build docs`：成功渲染 171 个页面。
- 本地开发服务可启动；抽查物品、服务器和载具页面可访问。
- Markdown 内部 `.html` 路径扫描：0 个缺失目标。
- `git diff --check`：无空白错误。VuePress 提示 `vuepress` / `@vuepress/bundler-vite` 安装版本为 rc.30，而主题建议 rc.31；当前构建仍成功。
