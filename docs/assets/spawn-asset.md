---
title: 生成表类（Spawn Asset）
translation:
  source: assets/spawn-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 生成表类（Spawn Asset）

Spawn Asset 表示某个 Spawn Point 生成单个 Item、Vehicle 或 Animal 的加权概率。自定义 Spawn Table 可用于自定义地图、Curated Map 和官方地图。

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`Spawn`。
- **`ID`** `uint16`：必须唯一。`1–1000` 保留给官方内容。

## Tables

Tables 是 Spawner 实际会生成的条目，通过 ID/GUID 引用。条目可以继续指向另一个 Spawn Table，也可以直接指向 Item、Vehicle、Animal。

**`Tables`** 是字典列表，每项支持：

- **`Guid`**：要生成的 Asset 或递归子 Spawn Table 的 GUID。`LegacySpawnId` 和 `LegacyAssetId` 未设置或为 0 时使用。
- **`LegacySpawnId`** `uint16`：递归子 Spawn Table ID。推荐用 GUID，避免 Mod 间 ID 冲突。
- **`LegacyAssetId`** `uint16`：直接 Asset ID。推荐 GUID。
- **`Weight`** `int32`：该条目权重。

示例：90% Military Magazine，10% Eaglefire：

```text
Tables
[
    {
        // Military Magazine
        Guid dbfb1d0d11ca438e9dffb95f76e61274
        Weight 180
    }
    {
        // Eaglefire
        Guid b03d581a5c1a490f995f8deba57b0f17
        Weight 20
    }
]
```

::: note
多数旧 Spawn Asset 使用另一套格式。新版列表格式更易读，推荐新项目使用；旧格式仍会继续兼容。
:::

旧格式字段：

- **`Tables`** `int32`：Child 数量。
- **`Table_#_Spawn_ID`** `uint16`：递归子 Spawn Table ID。
- **`Table_#_Asset_ID`** `uint16`：直接 Asset ID。
- **`Table_#_Weight`** `int32`：权重。
- **`Table_#_GUID`**：Asset 或子 Spawn Table GUID；当 Spawn_ID/Asset_ID 未设置或为 0 时使用。

## Roots

Roots 是当前 Spawn Table 要挂接到的 Parent Spawner。适合把新的表插入已有 Spawn Table，例如官方地图使用的表。

链条底部的 Spawner 往往几乎全是 Asset ID；越靠上层则更可能全是 Spawn ID。

**`Roots`** 是字典列表，每项支持：

- **`Guid`**：Parent Spawn Table GUID；`LegacySpawnId` 未设置或为 0 时使用。
- **`LegacySpawnId`** `uint16`：Parent Spawn Table ID。推荐 GUID。
- **`IsOverride`** `bool`：true 时把 Parent Table 原有默认生成项的权重清零。适合 Total Conversion 等替换官方内容的 Mod。
- **`Weight`** `int32`：当前条目加入 Parent Table 后的权重。

旧 Roots 格式：

- **`Roots`** `int32`：Parent 数量。
- **`Root_#_Spawn_ID`** `uint16`：Parent Spawn Table ID。
- **`Root_#_Override`** Flag：把 Parent 默认生成权重清零。
- **`Root_#_Weight`** `int32`：权重。
- **`Root_#_GUID`**：Parent GUID；Spawn_ID 未设置或为 0 时使用。

## 导出旧版 Spawn Table

Level Editor 内可以创建 Legacy Spawn Table。普通 Mod 地图继续使用旧系统通常没有问题；但若希望自动跟随官方新内容、并更好兼容其他 Mod，建议改为 Spawn Asset。

转换方法：

1. 在 Level Editor 打开地图。
2. 打开 Pause Menu。
3. 在 **Legacy Spawns** 按钮旁填写一个大于 `1000` 的起始 ID。
4. 点击 **Legacy Spawns**。

通常几秒即可完成。转换过程中，地图上的 Legacy Spawn Table 会自动改为引用新生成的 Spawn Asset。退出前记得保存。

文件会生成到地图目录：

```text
Exported_Legacy_Spawn_Tables
```

Root Table 名会带地图名前缀，转换出的 Tier 会带原 Table 名前缀。

要正式使用它们，在地图目录创建 `Bundles`，把 `Exported_Legacy_Spawn_Tables` 中内容移进去。

::: tip
新地图如果没有旧 Spawn Table 需要转换，可以点击 **Proxy Tables**，直接生成空的 Spawn Asset 文件作为起点。
:::

转换时还会生成 `IDs.csv`，方便追踪每个 Spawn Asset 的 ID。

> 上游原文：[assets/spawn-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/spawn-asset.rst)
