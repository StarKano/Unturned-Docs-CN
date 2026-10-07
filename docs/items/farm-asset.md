---
title: 农作物资源（Farm Asset）
translation:
  source: items/farm-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 农作物资源（Farm Asset）

Farm / Plant 由 `ItemFarmAsset` 创建，是可放置、会成长并可收获的 Seed。种下后会随时间成熟；Rain 或 [Growth Supplement](/items/grower-asset.html) 可以立即完成生长。成熟作物每次收获会受到 2 点伤害，直到 Health 归零。继承 [BarricadeAsset](/items/barricade-asset.html)。

必需字段：

- `GUID`
- `Type Farm`
- `Useable Barricade`
- `Build Farm`
- `ID`

## 专属属性

- **`Affected_By_Agriculture_Skill`** `bool`：true 时，收获数量受 Agriculture Skill 影响。默认 true。
- **`Allow_Fertilizer`** `bool`：允许使用 Fertilizer 立即成熟。默认 true。
- **`Grow`** `ushort`：收获时生成 Item 的 Legacy ID。
- **`Grow_SpawnTable`** GUID：收获时用于生成 Item 的 Spawn Table GUID。
- **`Growth`** `uint`：完全成熟所需秒数。
- **`Harvest_Reward_Experience`** `uint`：收获奖励 Experience，默认 1。
- **`Ignore_Soil_Restrictions`** `bool`：false 时只能放在 Soil Material；true 时允许任意位置。默认 false。
- **`Rain_Affects_Growth`** `bool`：true 时 Rain 会让作物立即成熟，默认 true。
- **`Harvest_Rewards`**：成熟作物被收获时授予的 NPC Rewards List。

::: tip
父类 ItemAsset 的 `Health` 可用于让作物可多次收获：最大次数等于 `Health / 2`。例如 Health=10 可收获 5 次。
:::

> 上游原文：[items/farm-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/farm-asset.rst)
