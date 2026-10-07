# 参与贡献

感谢你参与 Unturned 中文文档。

## 基本流程

1. Fork 本仓库。
2. 从最新的 `main` 创建自己的分支。
3. 修改或新增 Markdown 文档。
4. 本地运行 `pnpm docs:dev` 检查页面。
5. 执行 `pnpm docs:build` 确认可以成功构建。
6. 提交 Pull Request。
7. 等待维护者审核后合并。

## 翻译规则

- 官方目录名和文件名尽量保持不变。
- 页面标题与正文翻译为中文。
- 配置字段、JSON 键名、命令、文件名和代码不得擅自翻译。
- 首次出现的专业术语可以使用“中文（English）”形式。
- 优先遵循 `translation/glossary.json` 中的统一术语。
- 不确定的内容不要猜测，应在 PR 中注明需要复核。

## 文件对应

```text
官方：assets/asset-definitions.rst
中文：docs/assets/asset-definitions.md
```

## 翻译状态

建议页面 Frontmatter 使用：

```yaml
translation:
  source: assets/asset-definitions.rst
  branch: stable
  status: translated
  upstreamCommit: ""
```

状态：

- `todo`：待翻译
- `translated`：已完成初译
- `reviewing`：审核中
- `reviewed`：已审核
- `outdated`：官方已更新，中文版本待同步
