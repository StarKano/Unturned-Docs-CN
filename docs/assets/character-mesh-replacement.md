---
title: 角色网格替换
translation:
  source: assets/character-mesh-replacement.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 角色网格替换

玩家角色 Mesh 可以通过特殊的 Shirt Item 完整替换。官方提供了 `CharacterMeshReplacementTest`（ID 1522）示例，`ExampleAssets.unitypackage` 的 Shirts 目录中也包含源文件。

有两个限制：

1. 必须使用 Shirt，因为第一人称（1P）只会加载 Shirt。
2. 1P 模型应只包含手臂，因为身体其他部位在第一人称中没有动画。

## 属性参考

- **`Has_1P_Character_Mesh_Override`**：`true`
- **`Character_Mesh_3P_Override_LODs`**：大于 0
- **`Has_Character_Material_Override`**：`true`
- **`Hair_Visible`**：`true/false`
- **`Beard_Visible`**：`true/false`

如果 `Has_1P_Character_Mesh_Override` 为 true，游戏会加载名为 `Character_Mesh_1P_Override_0` 的 Prefab。它应包含 MeshFilter，并指向第一人称手臂替换 Mesh。

如果 `Character_Mesh_3P_Override_LODs` 大于 0，游戏会按每个 LOD 索引加载 Prefab，例如 `Character_Mesh_3P_Override_0`。这些 Prefab 应包含第三人称替换 Mesh 的 MeshFilter。

如果 `Has_Character_Material_Override` 为 true，游戏会加载 `Character_Material_Override` Material，替换 1P/3P Mesh 材质。若未设置，则默认使用当前装备 Shirt 和 Pants 的纹理。

> 上游原文：[assets/character-mesh-replacement.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/character-mesh-replacement.rst)
