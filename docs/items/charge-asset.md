---
title: 遥控炸药资源（Charge Asset）
translation:
  source: items/charge-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 遥控炸药资源（Charge Asset）

Charge / Remote Explosive 由 `ItemChargeAsset` 创建，可放置后用 [Detonator](/items/detonator-asset.html) 遥控引爆。继承 BarricadeAsset。

- `GUID`
- `Type Charge`
- `Useable Barricade`
- `Build Charge`
- `ID`

## 专属属性

- **`Animal_Damage`** `float`：AoE 对 Animal 伤害。
- **`Barricade_Damage`** `float`：对 Barricade 伤害。
- **`Explosion2`** `uint16` / GUID：引爆时播放的 Effect。
- **`Explosion_Launch_Speed`** `float`：被爆炸影响的 Player Launch Speed（m/s），默认 `Player_Damage × 0.1`。
- **`Object_Damage`** `float`：对 Object 伤害，默认等于 `Resource_Damage`。
- **`Player_Damage`** `float`：对 Player 伤害。
- **`Resource_Damage`** `float`：对 Resource 伤害。
- **`Structure_Damage`** `float`：对 Structure 伤害。
- **`Vehicle_Damage`** `float`：对 Vehicle 伤害。
- **`Range2`** `float`：伤害 AoE 半径。
- **`Zombie_Damage`** `float`：对 Zombie 伤害。

> 上游原文：[items/charge-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/items/charge-asset.rst)
