---
title: 资源重定向器类（Redirector Asset）
translation:
  source: assets/redirector-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 资源重定向器类（Redirector Asset）

**Redirector Asset** 是只在解析资源引用（GUID 和 Legacy ID）时使用的特殊资源。当某个引用指向 Redirector 时，资源系统会返回 Redirector 的目标资源。

::: note
多数功能保存的仍是原始资源引用，而不是解析后的目标。例如重定向某些 Object 后重新保存地图，地图仍保存原 Object 引用，而不会改写成重定向目标。
:::

`TargetAsset` 是资源正常工作的必填字段。

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| `AssetCategory` | enum | `None` |
| `TargetAsset` | GUID | — |

## AssetCategory

如果设置，可同时重定向资源的 Legacy ID。

例如 Redirector 配置 `AssetCategory Item`，并指向 Legacy ID 为 `4` 的资源，那么使用 `/give 4` 时也会找到该 Redirector。

## TargetAsset

实际目标资源的 [GUID](/data/guid.html)。当引用指向 Redirector 时，最终使用这个资源。

> 上游原文：[assets/redirector-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/redirector-asset.rst)
