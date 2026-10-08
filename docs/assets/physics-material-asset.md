---
title: 物理材质类
translation:
  source: assets/physics-material-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 物理材质类

这是一个仍在开发中的功能，用于把物理表面效果从硬编码改为可配置资源。

`PhysicsMaterialAsset` 可以把玩法属性和效果关联到自定义 Unity **Physic Material**。例如没有内置材质适合火星表面时，可以创建 Unity Physic Material `MarsDirt`，再建立 Physics Material Asset，把 `UnityName` 设为 `MarsDirt`，并把 `Fallback` 指向内置 Gravel（`33650ff924b34f8d9c5a0fd97418cd3e`），从而给火星地面附加自定义效果。

`PhysicsMaterialExtensionAsset` 则用于向内置物理材质追加自定义属性。例如自定义激光枪希望在表面留下烧灼痕而不是弹孔，可以让 Extension Asset 的 `Base` 指向内置材质并添加自己的效果。

## 属性

- **`Type`**：`SDG.Unturned.PhysicsMaterialAsset` 或 `SDG.Unturned.PhysicsMaterialExtensionAsset`。
- **`UnityName`** `string` / **`UnityNames`** `string[]`：关联的 Unity Physic Material 名称。Extension Asset 不设置。支持多个名称，是因为旧内置材质过去为特殊场景存在多个变体。
- **`Fallback`** [Asset Pointer](/data/asset-ptr.html)：指向另一个 Physics Material Asset。当某属性未配置时从 Fallback 获取。例如 Snow 没有弹壳反弹音效时可回退到 Gravel。
- **`Base`** Asset Pointer：Extension Asset 要扩展的基础物理材质；扩展属性会追加到 Base。
- **`AudioDefs`** `dictionary`：键名到 OneShotAudioDefinition 的 [Master Bundle Pointer](/data/master-bundle-ptr.html) 映射。`ParticleSystemCollisionAudio.MaterialPropertyName` 等组件会引用这些键。

官方 `AudioDefs` 键包括：

- `BulletCasingBounce`：原版非霰弹枪弹壳碰撞声。
- `BulletImpact`：子弹命中表面。
- `BipedLand`：玩家坠落落地；未来也可用于其他双足角色。
- `FootstepWalk`：非冲刺脚步。
- `FootstepRun`：冲刺脚步。
- `LegacyImpact`：旧字段，未来可能逐步移除；目前仍用于载具保险杠碰撞，也作为近战命中回退。
- `MeleeImpact`：近战攻击命中表面。
- `ShotgunShellBounce`：原版霰弹壳碰撞声。
- `ZombieBipedLand`：僵尸版 BipedLand；未设置时使用 BipedLand，并把 Pitch 缩放到 85%。
- `ZombieFootstepRun`：僵尸版 FootstepRun；未设置时 Pitch 85%。
- `ZombieFootstepWalk`：僵尸版 FootstepWalk；未设置时 Pitch 85%。
- `MegaZombieFootstep`：Mega Zombie 脚步；未设置时使用 FootstepWalk，Pitch 72%，音量 +50%。
- `MegaZombieLand`：Mega Zombie 落地；未设置时使用 BipedLand，Pitch 72%，音量 +50%。

其他属性：

- **`TireMotionEffect`**：指向 Effect Asset。车辆在该材质上行驶时生成；Transform 放在轮胎触地点，Z 轴与轮胎 Up Vector 对齐，并按前进/倒车速度旋转。原版效果使用 Rate over Distance Emission。
- **`IsArable`** `bool`：true 时允许在该材质上种植作物。
- **`HasOil`** `bool`：true 时允许放置 Oil Drill。截至 2022-02-10，Oil Drill 仍只能放在 Terrain Material 上。
- **`Character_Friction_Mode`** `enum`（`ImmediatelyResponsive`、`Custom`）：Custom 时使用下面的加速、减速和最高速度属性，用来替代旧版硬编码冰面/滑金属。
- **`Character_Acceleration_Multiplier`** `float`：默认加速度等于目标移动速度。
- **`Character_Deceleration_Multiplier`** `float`：默认减速度为 2 m/s²。
- **`Character_Max_Speed_Multiplier`** `float`：允许最高速度达到目标移动速度乘以该倍率。

> 上游原文：[assets/physics-material-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/physics-material-asset.rst)
