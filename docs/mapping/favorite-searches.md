---
title: 收藏搜索
translation:
  source: mapping/favorite-searches.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 收藏搜索

Object Editor 支持 **Favorite Searches**，可以快速加载一组常用 Object 搜索条件。

在搜索栏输入：

```text
fv:xyz
```

游戏会从游戏目录读取 `xyz.txt`，并匹配文件中的任意一行。空行和以 `//` 开头的注释行会忽略。使用 `.txt` 是因为它是 Notepad 默认文本扩展名。

例如下面会匹配名称包含 `fire` 的任何对象，以及 `Road Line Cap #1`：

```text
// Fire 相关 Props
Fire

// 指定道路 Prop
Cap #1 Road Line
```

Filter 支持递归组合，因此 Favorite Search 可以嵌套其他 Favorite Search，也可以包含其他过滤语法。例如：

```text
Tunnel mb:core
```

会搜索 Vanilla Objects 中的 Tunnel。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/mapping/favorite-searches.html)
