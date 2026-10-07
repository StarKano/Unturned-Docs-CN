---
title: 工具资源（Tool Asset）
translation:
  source: items/tool-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 工具资源（Tool Asset）

Tool 由 `ItemToolAsset` 创建，具体功能取决于 `Useable`。继承 ItemAsset。

- `GUID`
- `Type Tool`：如果实际使用子类，应改用子类文档要求的 Type。
- `Useable`：
  - `Carjack`：对 Vehicle 使用，把其向上抛起。
  - `Carlockpick`：对任意 Locked Vehicle 使用一次，强制解锁。
  - `Housing_Planner`：快速访问玩家 Inventory 中的 Structure Piece。
  - `Walkie_Talkie`：与其他玩家进行远距离 Voice Chat。
- `ID`

Tool 本身没有其他独有属性，主要通过 `Useable` 决定行为。

> 上游原文：[items/tool-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/tool-asset.rst)
