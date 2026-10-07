---
title: Unity Layers
translation:
  source: assets/layers.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Unity Layers

Unturned 对 Unity Layer 的使用方式有较多历史包袱。这套 Layer 从 2013 年最早期版本沿用至今，因此这里完整列出供 Mod 作者参考。

## 概览

### Unity 内置 Layer

- **0 Default**
- **1 TransparentFX**
- **2 Ignore Raycast**
- **4 Water**：海洋和水面 Tile。
- **5 UI**：使用 [uGUI Glazier](/servers/glazier.html) 的菜单和插件自定义菜单。

### 用户 Layer

- **8 Logic**：编辑器位置、旋转、缩放操作柄等可点击叠加层；穿墙可见的调试图形也在这里。
- **9 Player**：角色胶囊体，不是身体 Hitbox。服务器端所有玩家都有；客户端仅本地玩家使用。
- **10 Enemy**：玩家身体 Hitbox。
- **11 Viewmodel**：本地第一人称手臂与武器。
- **12 Debris**：布娃娃、手榴弹、倒下树干、被摧毁结构和碎片等小型模拟物体。
- **13 Item**：掉落且可交互的物品。
- **14 Resource**：树木与岩石；附着载具的 Barricade 也会移到这里。
- **15 Large**：关卡编辑器中的大型 Prop。
- **16 Medium**：中型 Prop。
- **17 Small**：无碰撞的小型 Prop。
- **18 Sky**：云、星星等无碰撞远景效果。
- **19 Environment**：道路、草、小石子。
- **20 Ground**：Landscape / Terrain。
- **21 Clip**：不可见碰撞。
- **22 Navmesh**：僵尸专用不可见碰撞；既用于生成 Navmesh，也在服务器加载以辅助推动僵尸。
- **23 Entity**：僵尸和动物身体 Hitbox。
- **24 Agent**：僵尸和动物角色胶囊体。
- **25 Ladder**：不可见可攀爬 Trigger。
- **26 Vehicle**：所有载具 Collider。
- **27 Barricade**：世界中的 Barricade；附着载具后转到 Resource。
- **28 Structure**：世界中的 Structure。
- **29 Tire**：车轮 Collider。
- **30 Trap**：通常是 Trigger Collider，包括火箭弹和 Kill Volume。
- **31 Ground2**：旧地图转为 Terrain Tile 后不再使用，过去用于边界外地形，现为未来保留。

## Layer Collision Matrix

以下说明**不适用于** Raycast、Spherecast 等碰撞查询。

### 不发生物理碰撞

Default、TransparentFX、Ignore Raycast、Water、UI、Logic、Enemy、Viewmodel、Small、Sky、Environment、Ground、Entity、Ladder、Ground2。

### 会参与物理碰撞

- **Player**：Character Controller Layer 被 Unity 用作底层 Query Mask。
- **Debris**
- **Item**
- **Resource**
- **Large**
- **Medium**
- **Environment**
- **Ground**
- **Clip**：原用途会与 Player、Vehicle 碰撞；部分自制载具有本层不可见 Collider，用来扩大模拟尺寸且不影响 Barricade 放置，因此也与部分 Vehicle Layer 发生碰撞。
- **Navmesh**
- **Agent**：Character Controller Layer 被用作底层 Query Mask。
- **Vehicle**
- **Barricade**
- **Structure**
- **Tire**：Wheel Collider Layer 被用作底层 Query Mask。
- **Trap**

> 上游原文：[assets/layers.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/layers.rst)
