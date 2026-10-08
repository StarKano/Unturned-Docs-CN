---
title: Flag（标志字段）
translation:
  source: data/flag.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Flag（标志字段）

有些资源属性只检查某个键**是否存在**，而不读取值，这类字段称为 **Flag**，因此值可以留空。

例如物品会检查 `Pro` Flag；包含它的物品会被标记为 Steam Economy Item。

```text
Flag1
Flag2
Flag3
```

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/data/flag.html)
