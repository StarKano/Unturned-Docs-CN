---
title: 蓝图输出物品
translation:
  source: items/blueprints_outputitem.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 蓝图输出物品

用于配置 [Blueprint](/items/blueprints.html) 生产的 Item。

## 简写格式

简单情况支持单行：

- `{ID}`
- `{ID} x {Amount}`
- `this`
- `this x {Amount}`

示例：

```text
// Canned Beans GUID
78fefdd23def4ab6ac8301adfcc3b2d4

// Legacy ID
13

// 两罐
13 x 2

// 当前拥有此 Blueprint 的 Asset
this

// 两个当前 Asset
this x 2
```

## 字典格式

需要设置额外属性时使用字典：

```text
OutputItems
[
    {
        // 第一项
    }
    {
        // 第二项
    }
]
```

## 属性

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Amount` | uint8 | `1` |
| `ID` | Item Asset Pointer | — |
| `Origin` | [EItemOrigin](/data/enum/eitemorigin.html) | `Craft` |

- **`Amount`**：生产数量，最小 1。
- **`ID`**：目标 Item Asset Pointer。也可以填 `this`，表示使用 Owner Asset 自身 ID，适合“Blueprint 生产自己”的情况，可避免误填 ID。
- **`Origin`**：覆盖部分生成属性。例如设为 `Admin` 会以满 Quality 生成。

> 上游原文：[items/blueprints_outputitem.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/blueprints_outputitem.rst)
