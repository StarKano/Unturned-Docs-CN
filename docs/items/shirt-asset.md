---
title: 上衣类（Shirt Asset）
translation:
  source: items/shirt-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 上衣类（Shirt Asset）

Shirt 由 `ItemShirtAsset` 创建，可由玩家和 Zombie 穿戴。继承 [BagAsset](/items/bag-asset.html)。

- `GUID`
- `Type Shirt`
- `Useable Clothing`
- `ID`

## 专属属性

- **`Ignore_Hand`** Flag：忽略玩家 Left-handed 设置。

## 角色 Mesh 替换

完整说明参阅[角色网格替换](/assets/character-mesh-replacement.html)。

- **`Has_1P_Character_Mesh_Override`** `bool`：加载名为 `Character_Mesh_1P_Override_0` 的 Prefab，默认 false。
- **`Character_Mesh_3P_Override_LODs`** `uint16`：按每个 LOD Index 加载多少 Prefab，默认 0。
- **`Has_Character_Material_Override`** `bool`：加载 `Character_Material_Override` Material，替换 1P/3P Mesh Material，默认 false。

> 上游原文：[items/shirt-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/shirt-asset.rst)
