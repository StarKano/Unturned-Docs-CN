---
title: 载具物理配置类
translation:
  source: assets/vehicle-physics-profile-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 载具物理配置类

Vehicle Physics Profile 用于批量调节载具物理，而不必重新构建 Asset Bundle，同时提供比单独 Vehicle Asset 更多的控制项。

引入 Profile 的目标之一是改善原版轮式载具操控。可以测试默认 Profile，并向官方提出调整建议。

## 如何测试？

3.19.18.0 加入 `reload` 命令，可在游戏运行中重新加载指定 Asset 或目录。重载 Physics Profile 后重新生成载具即可。

默认 Profile 示例：

```text
/reload 6b91a94f01b6472eaca31d9420ec2367
```

## Vehicle 如何选择 Profile？

单独 Vehicle Asset 可把 **`Physics_Profile`** 设置为 Profile GUID。

如果未设置 Profile，且 Vehicle Prefab Root Rigidbody Mass 为 1.0、Wheel Collider Mass 也为 1.0，则使用：

```text
Bundles/Assets/VehiclePhysicsProfiles/DefaultProfile.asset
```

## 属性

- **`Type`**：`SDG.Unturned.VehiclePhysicsProfileAsset`。
- **`Root_Mass`**：覆盖 Vehicle Rigidbody Mass。
- **`Root_Mass_Multiplier`**：乘算 Vehicle Rigidbody Mass。
- **`Root_Drag_Multiplier`**：乘算 Position Drag Force。
- **`Root_Angular_Drag_Multiplier`**：乘算 Angular Drag Force。
- **`Carjack_Force_Multiplier`**：乘算 Carjack 物品施加的力。
- **`Wheel_Mass`**：覆盖 Wheel Collider Mass。若 Vehicle Asset 已设置 `Wheel_Collider_Mass_Override` 则忽略。
- **`Wheel_Mass_Multiplier`**：乘算 Wheel Collider Mass。
- **`Wheel_Damping_Rate`**：覆盖 Wheel Collider Damping Rate；更低的值加速更快。
- **`Wheel_Suspension_Force`**：覆盖 Suspension Force。
- **`Wheel_Suspension_Damper`**：覆盖 Suspension Damper。
- **`Wheel_Stiffness_Traction_Multiplier`**：在雪地驾驶时 Wheel Collider Stiffness 倍率，默认 0.25。

`Wheel_Friction_Sideways` 和 `Wheel_Friction_Forward` 都包含：

- **`Extremum_Slip`**：覆盖 Friction Curve Extremum Slip。
- **`Extremum_Value`**：覆盖 Extremum Value。
- **`Asymptote_Slip`**：覆盖 Asymptote Slip。
- **`Asymptote_Value`**：覆盖 Asymptote Value。
- **`Stiffness`**：覆盖 Friction Curve Stiffness，并乘算 Extremum / Asymptote Value。Sideways 默认 1.0，Forward 默认 2.0。

其他：

- **`Motor_Torque_Multiplier`**：乘算 Wheel Collider Motor Torque，通常由 Vehicle Speed 驱动。
- **`Motor_Torque_Clamp_Multiplier`**：超过最大速度时的 Motor Torque 倍率，默认 0.5。
- **`Brake_Torque_Multiplier`**：Brake Torque 倍率。
- **`Brake_Torque_Traction_Multiplier`**：雪地时 Brake Torque 倍率，默认 0.5。
- **`Wheel_Drive_Model`**：`Front`、`Rear`、`All`。默认所有原版车都是后驱，这是 2014 年加入载具时对汽车理解不足留下的历史问题。
- **`Wheel_Brake_Model`**：`Front`、`Rear`、`All`。现代汽车通常四轮制动，因此默认 All。

> 上游原文：[assets/vehicle-physics-profile-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/vehicle-physics-profile-asset.rst)
