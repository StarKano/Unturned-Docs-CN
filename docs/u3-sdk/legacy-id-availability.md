---
title: Legacy ID 可用性
translation:
  source: u3-sdk/legacy-id-availability.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Legacy ID 可用性

新内容应尽可能使用 GUID。

物品等部分资源类型仍高度依赖 Legacy ID，但很多引用场景已支持 GUID，例如 NPC 服装和物品 Spawn Table。

查询可用 Legacy ID：

1. 主菜单 **Workshop** 子菜单按 `F1`。
2. 点击 **Export Asset IDs**。
3. 打开 `Extras/AssetIDs/All Assets/Grouped by Legacy Category`。
4. 每个 Legacy 分类（例如 Items）都有 `Legacy ID Availability.csv`，列出 ID 以及是否被 Core Content 保留。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/u3-sdk/legacy-id-availability.html)
