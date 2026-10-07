---
title: 载具资源（Vehicle Asset）
translation:
  source: assets/vehicle-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 载具资源（Vehicle Asset）

**VehicleAsset** 类用于定义载具。载具可以由玩家驾驶，支持枪塔、储物空间、可喷漆部件、不同发动机类型、车轮物理、燃料/电池系统等。

## 游戏数据文件

所有 Vehicle Asset 都必须包含 `GUID` 和 `Type`。大多数载具还应设置 `Engine` 和 `Rarity`。`ID` 过去是必填字段，现在已不再强制。

推荐/必需的基础字段：

| 类 | 字段 | 必需值 |
| --- | --- | --- |
| Asset | `GUID` | 唯一 GUID |
| Asset | `ID` | 可选 Legacy ID |
| Asset | `Type` | `Vehicle` |
| VehicleAsset | `Engine` | 载具发动机类型 |

## 属性总览

### 通用

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `AdditionalTransparentSections` | PaintableVehicleSection 列表 | — |
| `Bicycle` | Flag | — |
| `Bicycle_Anim_Speed` | float32 | `0` |
| `Buildable_Placement_Rule` | EVehicleBuildablePlacementRule | `None` |
| `Bypass_Hash_Verification` | Flag | — |
| `Cam_Driver_Offset` | float32 | `0` |
| `Cam_Follow_Distance` | float32 | `5.5` |
| `Cam_Passenger_Offset` | float32 | `0` |
| `Can_Be_Locked` | bool | `true` |
| `Crawler` | Flag | 已弃用 |
| `CrawlerTrackTilingMaterials` | CrawlerTrackTilingMaterial 列表 | — |
| `Drops_Max` | uint8 | `7` |
| `Drops_Min` | uint8 | `3` |
| `Drops_Table_ID` | uint16 | `962` |
| `Engine` | EEngine | `Car` |
| `Exit` | float32 | `2` |
| `GUID` | GUID | — |
| `Has_Clip_Prefab` | bool | `true` |
| `Has_Horn` | bool | 见说明 |
| `HornAudioClip` | Master Bundle Pointer | — |
| `ID` | uint16 | `0` |
| `IgnitionAudioClip` | Master Bundle Pointer | — |
| `LockMouse` | Flag | — |
| `Num_Steering_Tires` | int32 | 已弃用 |
| `Rarity` | EItemRarity | `Common` |
| `Reclined` | Flag | — |
| `Should_Spawn_Seat_Capsules` | bool | `false` |
| `Steering_Tire_#` | int32 | 已弃用 |
| `Tire_ID` | uint16 | `1451` |
| `Trunk_Storage_X` | uint8 | `0` |
| `Trunk_Storage_Y` | uint8 | `0` |
| `Valid_Speed_Down` | float32 | 见说明 |
| `Valid_Speed_Horizontal` | float32 | 见说明 |
| `Valid_Speed_Up` | float32 | 见说明 |
| `Zip` | Flag | — |

### 操控 / 物理

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Air_Steer_Max` | float32 | `Steer_Max` |
| `Air_Steer_Min` | float32 | `Steer_Min` |
| `Air_Turn_Responsiveness` | float32 | `2` |
| `Brake` | float32 | — |
| `Center_Of_Mass` | Vector3 | — |
| `Carjack_Force_Multiplier` | float32 | `1.0` |
| `CrawlerTrackSteering_Torque` | float32 | `1.0` |
| `CrawlerTrackSteering_SidewaysFrictionMultiplier` | float32 | `1.0` |
| `CrawlerTrackSteering_MaxSpeedScale` | float32 | `1.0` |
| `Engine_Force_Multiplier` | float32 | `1.0` |
| `Lift` | float32 | `0` |
| `Override_Center_Of_Mass` | bool | `false` |
| `Physics_Profile` | GUID | 见说明 |
| `RollAngularVelocityDamping` | float32 | `-1.0` |
| `Sleds` | Flag | — |
| `Speed_Max` | float32 | `0` |
| `Speed_Min` | float32 | `0` |
| `Steering_Angle_FullSpeed_Factor` | float32 | `0` |
| `Steering_Angle_Max` | float32 | `0` |
| `Steering_Angle_Turn_Speed` | float32 | 见说明 |
| `Steering_LeaningForceMultiplier` | float32 | `-1.0` |
| `Steering_LeaningForce_ScaleWithSpeed` | bool | `false` |
| `Steering_LeaningForce_SpeedExponent` | float32 | `1.0` |
| `Traction` | Flag | — |
| `Wheel_Collider_Mass_Override` | float32 | `null` |
| `WheelBalancing_ForceMultiplier` | float32 | `-1.0` |
| `WheelBalancing_UprightExponent` | float32 | `1.5` |
| `WheelConfigurations` | VehicleWheelConfiguration 列表 | — |

### 发动机 RPM / 挡位

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `EngineIdleRPM` | float32 | `1000.0` |
| `EngineMaxRPM` | float32 | `7000.0` |
| `EngineMaxTorque` | float32 | `1.0` |
| `EngineRPM_DecreaseRate` | float32 | `-1.0` |
| `EngineRPM_IncreaseRate` | float32 | `-1.0` |
| `EngineRPMMismatch_TorqueReduction_Enabled` | bool | `false` |
| `EngineRPMMismatch_TorqueReduction_Threshold` | float | `0.0` |
| `EngineRPMMismatch_GearShift_PreventShifting` | bool | `false` |
| `EngineRpmMismatch_GearShift_UpMinThreshold` | float | `0.0` |
| `EngineRpmMismatch_GearShift_UpMaxThreshold` | float | `0.0` |
| `EngineRpmMismatch_GearShift_DownMinThreshold` | float | `0.0` |
| `EngineRpmMismatch_GearShift_DownMaxThreshold` | float | `0.0` |
| `ForwardGearRatios` | float32 列表 | — |
| `GearShift_AllowSkippingGears` | bool | `true` |
| `GearShift_DownThresholdRPM` | float32 | `1500.0` |
| `GearShift_Duration` | float32 | `0.5` |
| `GearShift_Interval` | float32 | `1.0` |
| `GearShift_UpThresholdRPM` | float32 | `5500.0` |
| `GearShift_VisibleInHUD` | bool | `true` |
| `ReverseGearRatio` | float32 | `1.0` |

### 发动机声音

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `EngineSound` | RpmEngineSoundConfiguration | — |
| `EngineSound_Type` | EVehicleEngineSoundType | `Legacy` |
| `Pitch_Drive` | float32 | 见说明 |
| `Pitch_Idle` | float32 | 见说明 |

### 生命 / 装甲

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Bumper_AnimalDamage` | float32 | `15.0` |
| `Bumper_Invulnerable` | Flag | — |
| `Bumper_Multiplier` | float32 | `1.0` |
| `Bumper_ObjectDamage` | float32 | `30.0` |
| `Bumper_PlayerDamage` | float32 | `10.0` |
| `Bumper_ResourceDamage` | float32 | `85.0` |
| `Bumper_SelfDamageMultiplier` | float32 | `1.0` |
| `Bumper_SpeedDamageThreshold` | float32 | `3.0` |
| `Bumper_ZombieDamage` | float32 | `15.0` |
| `Can_Repair_While_Seated` | bool | `false` |
| `Child_Explosion_Armor_Multiplier` | float32 | `0.2` |
| `Environment_Invulnerable` | Flag | — |
| `Explosions_Invulnerable` | Flag | — |
| `Health` | uint16 | `0` |
| `Health_Max` | uint16 | `0` |
| `Health_Min` | uint16 | `0` |
| `Invulnerable` | Flag | — |
| `Passenger_Explosion_Armor` | float32 | `1` |
| `Tires_Invulnerable` | Flag | — |

### 燃料

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Fuel` | uint16 | `0` |
| `Fuel_Burn_Rate` | float32 | 见说明 |
| `Fuel_Min` | uint16 | `0` |
| `Fuel_Max` | uint16 | `0` |

### 电池

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Battery_Burn_Rate` | float32 | `20` |
| `Battery_Charge_Rate` | float32 | `20` |
| `Battery_Powered` | Flag | — |
| `Battery_Spawn_Charge_Multiplier` | float32 | `1` |
| `BatteryMode_Driving` | EBatteryMode | `Charge` |
| `BatteryMode_Empty` | EBatteryMode | `None` |
| `BatteryMode_Headlights` | EBatteryMode | `Burn` |
| `BatteryMode_Sirens` | EBatteryMode | `Burn` |
| `Can_Steal_Battery` | bool | `true` |
| `Cannot_Spawn_With_Battery` | Flag | — |
| `Default_Battery` | GUID | `098b13be34a7411db7736b7f866ada69` |

### 体力驱动

| 字段 | 类型 |
| --- | --- |
| `Stamina_Boost` | float32 |
| `Stamina_Powered` | Flag |

### 喷漆

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `DefaultPaintColor_Configuration` | VehicleRandomPaintColorConfiguration | — |
| `DefaultPaintColor_Mode` | EVehicleDefaultPaintColorMode | 见说明 |
| `DefaultPaintColors` | Color 列表 | — |
| `IsPaintable` | bool | 见说明 |
| `PaintableSections` | PaintableVehicleSection 列表 | — |

### 爆炸

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Explosion` | GUID / uint16 | — |
| `ExplosionBurnMaterialSections` | PaintableVehicleSection 列表 | — |
| `Explosion_Force_Multiplier` | float32 | `1.0` |
| `Explosion_Max_Force` | Vector3 | `(0, 1024, 0)` |
| `Explosion_Min_Force` | Vector3 | `(0, 1024, 0)` |
| `ShouldExplosionBurnMaterials` | bool | 见说明 |
| `ShouldExplosionCauseDamage` | bool | 见说明 |

### 枪塔

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Turret_#_Ignore_Aim_Camera` | Flag | — |
| `Turret_#_Item_ID` | uint16 | `0` |
| `Turret_#_Pitch_Max` | float32 | `0` |
| `Turret_#_Pitch_Min` | float32 | `0` |
| `Turret_#_Seat_Index` | uint8 | `0` |
| `Turret_#_Yaw_Max` | float32 | `0` |
| `Turret_#_Yaw_Min` | float32 | `0` |
| `Turrets` | uint8 | `0` |

### 火车

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Train_Car_Length` | float32 | `0` |
| `Train_Track_Offset` | float32 | `0` |
| `Train_Wheel_Offset` | float32 | `0` |

### Economy

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Shared_Skin_Lookup_ID` | GUID / uint16 | 见说明 |
| `Shared_Skin_Name` | string | — |
| `Size2_Z` | float32 | `0` |

## 枚举

### EEngine

| 值 | 说明 |
| --- | --- |
| `Car` | 汽车类载具。 |
| `Plane` | 飞机。 |
| `Blimp` | 飞艇。 |
| `Boat` | 船只。 |
| `Train` | 火车。 |

### EVehicleBuildablePlacementRule

- **`None`**：载具不覆盖放置规则。Barricade 默认可挂到载具上，除非 Barricade 自身把 `Allow_Placement_On_Vehicle` 设为 false（床、Sentry Gun 等常如此）。
- **`AlwaysAllow`**：无论 Barricade 自身设置如何，都允许放到载具上。Train 过去使用该模式，但可能被利用把 Bed 移到地图边界外或其他 Object 内。
- **`Block`**：禁止任何 Barricade 放在该载具上。

### EVehicleDefaultPaintColorMode

- **`None`**：未配置。
- **`List`**：从 `DefaultPaintColors` 中随机选取。
- **`RandomHueOrGrayscale`**：依据 `DefaultPaintColor_Configuration` 随机生成 HSV / 灰阶颜色。

### EVehicleEngineSoundType

- **`Legacy`**：默认旧声音逻辑。
- **`EngineRPMSimple`**：根据 Engine RPM 调整单个 Audio Clip 的 Pitch 和 Volume。

### EWheelMotionEffectsMode

- **`None`**：关闭车轮地面粒子。未使用 Collider Pose 的 Wheel 默认如此。
- **`BothDirections`**：前进/后退都启用。使用 Collider Pose 的 Wheel 默认如此。
- **`ForwardOnly`**：仅向前移动时启用。
- **`BackwardOnly`**：仅后退时启用。

### EWheelSteeringMode

- **`None`**：Wheel 不参与转向。
- **`SteeringAngle`**：按转向输入设置 WheelCollider Steering Angle。
- **`CrawlerTrack`**：通过增加/减少 Motor Torque 让履带载具原地转向。

### ECrawlerTrackForwardMode

- **`Auto`**：根据 Wheel Collider 位置自动决定。左侧 Wheel 为 `Clockwise`，右侧为 `CounterClockwise`。
- **`Clockwise`**：正 Motor Torque 使载具顺时针旋转。
- **`CounterClockwise`**：正 Motor Torque 使载具逆时针旋转。

## 字典结构

### CrawlerTrackTilingMaterial

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Path` | string | — |
| `MaterialIndex` | int32 | `0` |
| `WheelIndices` | int32 列表 | — |
| `RepeatDistance` | float32 | `0.0` |
| `UV_Direction` | Vector2 | `(0.0, 0.0)` |

### PaintableVehicleSection

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `Path` | string | — |
| `MaterialIndex` | int32 | `0` |
| `AllMaterials` | bool | `false` |

### RpmEngineSoundConfiguration

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `IdlePitch` | float32 | `0.0` |
| `IdleVolume` | float32 | `0.0` |
| `MaxPitch` | float32 | `0.0` |
| `MaxVolume` | float32 | `0.0` |

### VehicleRandomPaintColorConfiguration

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `MinSaturation` | float32 | `0.0` |
| `MaxSaturation` | float32 | `0.0` |
| `MinValue` | float32 | `0.0` |
| `MaxValue` | float32 | `0.0` |
| `GrayscaleChance` | float32 | `0.0` |

### VehicleWheelConfiguration

| 字段 | 类型 | 默认值 |
| --- | --- | --- |
| `CanExplode` | bool | `true` |
| `CopyColliderRpmIndex` | int32 | `-1` |
| `CrawlerTrackForwardMode` | ECrawlerTrackForwardMode | `Auto` |
| `IsColliderPowered` | bool | `false` |
| `IsColliderSteered` | bool | `false`（已弃用） |
| `IsModelSteered` | bool | `false` |
| `ModelPath` | string | — |
| `ModelRadius` | float32 | `-1.0` |
| `ModelSuspensionOffset` | float32 | `0.0` |
| `ModelSuspensionSpeed` | float32 | `-1.0` |
| `ModelUseColliderPose` | bool | `false` |
| `MotionEffects` | EWheelMotionEffectsMode | 见说明 |
| `SteeringAngleMultiplier` | float32 | `1.0` |
| `SteeringMode` | EWheelSteeringMode | `None` |
| `WheelColliderPath` | string | — |

## 属性说明

### 透明材质与视角

**`AdditionalTransparentSections`**  
注册需要透明排序的 Material。游戏会根据每个 Section Pivot 是否处于水下，定期调整 Render Queue。

**`Cam_Driver_Offset`**  
驾驶员第一人称 Camera 的垂直偏移（米），会与 `Cam_Passenger_Offset` 相加。

**`Cam_Passenger_Offset`**  
所有乘员（包括驾驶员）第一人称 Camera 的垂直偏移（米）。

**`Cam_Follow_Distance`**  
第三人称 Camera 放在玩家身后多远，默认 5.5 米。

**`LockMouse`**  
驾驶时锁定第一人称 Camera 移动。对 Plane / Helicopter 特别有用，因为第一人称鼠标输入可以直接用于操控载具。

### 基础状态与交互

**`GUID`**  
Vehicle 必须具有 GUID。若文件省略 GUID，成功加载时游戏会尝试自动生成一个随机且唯一的 GUID。

**`ID`**  
Legacy ID，必须唯一，但现在不再要求所有 Vehicle 必须设置。官方保留范围为 `[1, 2000)`。

**`Type`**  
必须为 Vehicle 对应的 Asset Type。

**`Engine`**  
决定载具类别。部分属性只对特定 Engine 有效。

**`Rarity`**  
菜单文字和高亮颜色使用的稀有度，默认 `Common`。

**`Can_Be_Locked`**  
玩家是否可以锁车，默认 true。

**`Exit`**  
离开载具时把玩家传送到离车体多远的位置，默认 2 米。

**`Has_Clip_Prefab`**  
是否存在 `Clip.prefab`。若服务器和客户端应使用同一 Prefab，则设为 false。多数官方载具使用 `Has_Clip_Prefab false`。

**`Should_Spawn_Seat_Capsules`**  
为 true 时在 `Seat` GameObject 上创建 Capsule Collider，防止乘员穿进地面，适合 Bicycle 等无车顶载具。

**`Bicycle`**  
玩家角色使用骑自行车动画。

**`Bicycle_Anim_Speed`**  
骑行动画速度倍率。

**`Reclined`**  
玩家使用后仰坐姿 Idle Animation。

**`Zip`**  
玩家使用 Handlebar Idle Animation。

### Horn / Ignition

**`Has_Horn`**  
是否有喇叭。如果载具包含名为 `Horn` 的 AudioClip，或 `HornAudioClip` 指向有效资源，默认 true；否则 false。

**`HornAudioClip`**  
按喇叭时播放的 AudioClip。

**`IgnitionAudioClip`**  
玩家进入 Driver Seat 后播放的启动音频。

### 建筑放置

**`Buildable_Placement_Rule`**  
覆盖 Barricade 能否附着到载具。`Bypass_Buildable_Mobility` Gameplay Config 为 true 时优先级高于这里。

旧 `Supports_Mobile_Buildables` Flag 已弃用；对应行为可用 `AlwaysAllow` 实现。

### 储物 / 掉落

**`Trunk_Storage_X`**  
储物空间横向列数。

**`Trunk_Storage_Y`**  
储物空间纵向行数。

**`Drops_Min` / `Drops_Max`**  
载具被摧毁时生成的最少/最多 Item 数量，默认 3 / 7。

**`Drops_Table_ID`**  
摧毁时使用的 Item Spawn Table ID，默认 `962`（`Destroyed_Vehicle_Default`）。

### 电池系统

**`Battery_Burn_Rate`**  
每秒电量减少速度，默认 20。

**`Battery_Charge_Rate`**  
每秒充电速度，默认 20。

**`Battery_Powered`**  
载具不使用 Fuel，可用于纯电动车。

**`Battery_Spawn_Charge_Multiplier`**  
新生成载具电量倍率，范围 [0,1]。小于 1 时出生电量低于正常值。

**`BatteryMode_Driving`**  
玩家驾驶时电池行为，默认 `Charge`。

**`BatteryMode_Empty`**  
载具无人时电池行为，默认 `None`。

**`BatteryMode_Headlights`**  
车灯开启时电池行为，默认 `Burn`。

**`BatteryMode_Sirens`**  
警笛开启时电池行为，默认 `Burn`。

**`Can_Steal_Battery`**  
玩家能否拆下车辆电池，默认 true。

**`Cannot_Spawn_With_Battery`**  
载具生成时不自带电池。

**`Default_Battery`**  
如果还没有手动安装具体 Battery Item，给玩家拆出的默认 Battery。默认是官方 Vehicle Battery GUID `098b13be34a7411db7736b7f866ada69`。

### Fuel

**`Fuel`**  
总燃料容量。

**`Fuel_Burn_Rate`**  
每秒燃料消耗速度。`Engine Car` 默认 `2.05`，其他 Engine 默认 `4.2`。

**`Fuel_Min` / `Fuel_Max`**  
新生成载具可能拥有的最少/最多 Fuel。

### 体力驱动

**`Stamina_Powered`**  
载具既不消耗 Fuel，也不使用 Vehicle Battery。

**`Stamina_Boost`**  
允许消耗 Stamina 加速。该值表示“不加速时的最高速度倍率”。例如 `Stamina_Boost 0.5` 表示平时只能达到最高速度的 50%，消耗体力 Boost 后才能达到完整最高速度。常与 `Stamina_Powered` 一起使用，但不是必须。

## 操控与物理

### 飞行

**`Air_Steer_Max`**  
`Engine Plane` 高速移动时的转向角，默认使用 `Steer_Max`。

**`Air_Steer_Min`**  
`Engine Plane` 低速移动时的转向角，默认使用 `Steer_Min`。

**`Air_Turn_Responsiveness`**  
Plane 在空中时转向灵敏度，默认 2。

**`Lift`**  
`Engine Plane` 向上 Lift Force。

**`Engine_Force_Multiplier`**  
乘算目前尚未完全开放配置的 Plane / Helicopter / Boat 等推进力，建议按载具 Mass 调整。

### 制动与速度

**`Brake`**  
施加的制动力。

**`Speed_Max`**  
前进时目标最高速度（m/s）。除 Train 外，内部会乘以 1.25，因为系统通过 Wheel Torque 尝试追踪目标速度。

例如 `Speed_Max 12.5` 的 `Engine Car` 实际最高前进速度约 56.25 km/h（34.95 mph）。

**`Speed_Min`**  
倒车目标最高速度（m/s），通常为负值。例如 `Speed_Min -7` 对应约 25.2 km/h（15.66 mph）的最大倒车速度。

### 重心

**`Override_Center_Of_Mass`**  
为 true 时使用 `Center_Of_Mass` 覆盖 Vehicle Rigidbody Center of Mass，不需要在 Unity 移动 `Cog` GameObject。

**`Center_Of_Mass`**

```text
Override_Center_Of_Mass true
Center_Of_Mass (0, -50, 0)
```

### Carjack

**`Carjack_Force_Multiplier`**  
使用 Carjack 时施加力的倍率，建议依据 Vehicle Mass 调整。

如果使用官方 Example Asset 作为模板、或质量与官方载具相近，通常推荐约 `2`。未来官方若重新调整载具 Mass，推荐值可能再次变化。

### 履带

**`Crawler`**  
已在 3.23.4.0 弃用，由 `WheelConfigurations` 取代。旧行为是让默认 `Num_Steering_Tires` 为 0，避免 `Wheel_#` GameObject 通过普通轮式转向旋转。

**`CrawlerTrackSteering_Torque`**  
CrawlerTrack Steering Mode 中加到或减自 Wheel Motor Torque 的数值。

例如载具向左转，Wheel 的 `CrawlerTrackForwardMode` 为 `Clockwise` 时，会从 Motor Torque 中减去该值。

**`CrawlerTrackSteering_SidewaysFrictionMultiplier`**  
CrawlerTrack 模式且有 Steering Input 时，把 Wheel Collider Sideways Friction Stiffness 乘以该值。可帮助履带原地转向克服横向摩擦。

**`CrawlerTrackSteering_MaxSpeedScale`**  
达到最高速度时，对履带 Steering Torque 和 Sideways Friction Multiplier 的倍率，类似高速时降低普通 Steering Angle，帮助保持可控。

**`CrawlerTrackTilingMaterials`**  
让履带 Material UV Offset 与 Wheel 滚动同步。

### Steering

**`Steering_Angle_Max`**  
静止/零速时的最大 Steering Angle Range。例如 45 表示参与 Steering 的 Wheel 可旋转 ±45°。

**`Steering_Angle_FullSpeed_Factor`**  
达到当前方向目标最高速度时 Steering Angle Range 的倍率。高速降低转角可让键盘等数字输入更可控。

**`Steering_Angle_Turn_Speed`**  
Wheel 追踪玩家 Steering Input 的速度，单位度/秒。默认 `Steer_Max * 5.0`。

**`Steer_Max`**  
旧字段。已由 `Steering_Angle_Max` 取代；旧字段会额外乘 `0.75`。

**`Steer_Min`**  
旧字段。已由 `Steering_Angle_FullSpeed_Factor` 取代。

### 摩托 / 自平衡

**`Steering_LeaningForceMultiplier`**  
大于 0 时，Bike/Motorcycle 会依据 Steering Input 在 Z 轴施加 Torque。

**`Steering_LeaningForce_ScaleWithSpeed`**  
true 时 Leaning Force 再乘以“归一化速度 ^ `Steering_LeaningForce_SpeedExponent`”。

**`Steering_LeaningForce_SpeedExponent`**  
上述速度倍率的指数。

**`RollAngularVelocityDamping`**  
大于 0 时，对 Z 轴 Angular Velocity 施加朝 0 的加速度。

**`WheelBalancing_ForceMultiplier`**  
大于 0 时，在 Z 轴施加 Torque，使 Vehicle Up 朝 Ground Up 对齐。

::: note
使用该力时 `RollAngularVelocityDamping` 对抑制振荡非常重要。
:::

**`WheelBalancing_UprightExponent`**  
0–1 的“车体 Up 与 Ground Up 对齐程度”因子指数。例如 2 会在接近直立时明显减少力，0.5 则在接近直立时仍保持较强修正力。

### Wheel Collider

**`Wheel_Collider_Mass_Override`**  
覆盖所有 WheelCollider Mass，无需重新 Bundle。若车辆使用真实质量，可能需要设置很高，例如 `500`。

**`Sleds`**  
让 Tire 更容易滚动；大多数 Plane 会使用。

**`Traction`**  
让 Tire 在 Snow Position 中仍具 Traction。

**`Tires_Invulnerable`**  
轮胎不可被破坏。

**`Steering_Tire_#`**

把对应的 `Wheel_#` 游戏对象设为会随转向可视旋转的前轮。旧版默认根据 `Num_Steering_Tires` 自动设置，从 `Steering_Tire_0 0`（对应 `Wheel_0`）开始依次递增；该配置已弃用，应优先使用 `WheelConfigurations`。

**`Tire_ID`**  
使用 `Mode Remove` 的轮胎工具手动拆轮胎时，给玩家的 Tire Item Legacy ID，默认 `1451`；如果该 ID 对应使用 `Mode Add` 的轮胎工具，也可用于重新装回。

## Physics Profile

**`Physics_Profile`**  
指定 [Vehicle Physics Profile](/assets/vehicle-physics-profile-asset.html) GUID，用于批量控制物理参数，不是必须。

若没有显式设置 Profile，且 Vehicle.prefab Root Rigidbody Mass 为 1.0、所有 Tire WheelCollider Mass 也为 1.0，则部分 Engine 自动采用默认 Profile：

- Boat：`47258d0dcad14cb8be26e24c1ef3449e`
- Car：`6b91a94f01b6472eaca31d9420ec2367`
- Helicopter：`bb9f9f0204c4462ca7d976b87d1336d4`
- Plane：`93a47d6d40454335b4784e803628ac54`

其他 Engine 没有默认 Profile。

## 发动机 RPM 与挡位

### RPM 范围

**`EngineIdleRPM`**  
发动机 RPM 不会低于该值，即使 Wheel RPM × Gear Ratio 更低。否则发动机无法让静止车轮从 0 开始转动。

**`EngineMaxRPM`**  
发动机 RPM 不会超过该值，即使 Wheel RPM × Gear Ratio 更高。应保持合理，因为归一化 RPM 会用于 Torque Curve、网络同步等多处逻辑。

### EngineMaxTorque

`EngineMaxTorque` 是发动机输出 Torque 的总倍率。RPM 到 Wheel Torque 的流程：

1. 按 `EngineIdleRPM` 与 `EngineMaxRPM` 把 RPM 归一化到 0–1。
2. Vehicle Root 需要 `EngineCurvesComponent`，用于把归一化 RPM 映射到归一化 Torque Multiplier。一般中段（约 0.3–0.8）接近 1，两端降低。
3. 使用归一化 RPM 采样 Torque Curve。
4. 采样值乘 `EngineMaxTorque`。
5. 换挡过程中 Torque 为 0。
6. 倒车时乘 `ReverseGearRatio`。
7. 前进时乘当前 `ForwardGearRatio`。
8. 最终 Torque 在所有 `IsColliderPowered` Wheel 之间平均分配。

### RPM 变化速率

**`EngineRPM_IncreaseRate`** / **`EngineRPM_DecreaseRate`**  
单位 RPM/s。比如值 1000，从 2000 到 4000 RPM 需要 2 秒。默认 -1，表示立即变化。

官方注：实践中调好 Torque 和 Gear Ratio 往往更自然，这两个字段保留给可能有特殊用途的作者。

### RPM mismatch

**`EngineRPMMismatch_TorqueReduction_Enabled`**  
开启后，会根据“预期 Wheel RPM 与实际 RPM 的差值”减少 Torque。

**`EngineRPMMismatch_TorqueReduction_Threshold`**  
当差值达到此阈值时 Torque 降为 0。需要非线性曲线时，可在 Engine Curves Component 开启 **Use Engine RPM Mismatch Torque Reduction Curve**。

**`EngineRPMMismatch_GearShift_PreventShifting`**  
开启后，RPM 差值不满足阈值条件时禁止换挡。

- `EngineRpmMismatch_GearShift_UpMinThreshold`：若 `expected - actual < min`，禁止升挡。
- `EngineRpmMismatch_GearShift_UpMaxThreshold`：若 `expected - actual > max`，禁止升挡。
- `EngineRpmMismatch_GearShift_DownMinThreshold`：若 `expected - actual < min`，禁止降挡。
- `EngineRpmMismatch_GearShift_DownMaxThreshold`：若 `expected - actual > max`，禁止降挡。

### Gear Ratio

**`ForwardGearRatios`**  
每个前进挡的 Engine RPM / Wheel RPM 比率。例如 Wheel RPM=6，Ratio=5，则 Engine RPM=30。

官方给出的调参思路：假设目标 80 km/h、Wheel Radius=0.6m：

1. 80 km/h ≈ 22.2 m/s。
2. 轮周长 = `2 × π × r` ≈ 3.77m。
3. 每分钟行驶距离 = `22.2 × 60` = 1333.2m/min。
4. Wheel RPM = `1333.2 / 3.77` ≈ 353.6776。
5. 如果目标 Engine RPM=3500，则 Gear Ratio 初始值约 `3500 / 353.6776 = 9.89`。

**`ReverseGearRatio`**  
倒挡使用的 Gear Ratio。

### 自动换挡

- **`GearShift_AllowSkippingGears`**：true 时，如果能让 RPM 进入合理范围，可以从 1 挡直接跳到 3 挡等。
- **`GearShift_DownThresholdRPM`**：低于该 RPM 且有更低挡位时降挡，默认 1500。
- **`GearShift_UpThresholdRPM`**：高于该 RPM 且有更高挡位时升挡，默认 5500。
- **`GearShift_Duration`**：换挡耗时，默认 0.5 秒；期间 Wheel 不提供 Torque。
- **`GearShift_Interval`**：上一次换挡后至少等待多久才再次换挡，默认 1 秒，给 RPM 留出稳定时间。
- **`GearShift_VisibleInHUD`**：配置挡位后，true 时 HUD 显示 RPM 和挡位。

## 发动机音频

**`EngineSound_Type Legacy`**  
使用旧 `Pitch_Idle` / `Pitch_Drive` 逻辑。

**`EngineSound_Type EngineRPMSimple`**  
`EngineSound` 应设置为 RpmEngineSoundConfiguration，根据 RPM 在 Idle 与 Max 之间控制 AudioSource Pitch/Volume。

**`Pitch_Idle`**  
Idle Audio Pitch Multiplier。Audio Clip 名为 `Engine_Large` 时默认 0.625，`Engine_Small` 时默认 0.75，其他默认 0.5。

**`Pitch_Drive`**  
驾驶时 Pitch Multiplier：

- Helicopter：0.03
- Blimp：0.1
- `Engine_Large`：0.025
- `Engine_Small`：0.075
- 其他：0.05

## 生命、装甲与碰撞伤害

### Health

**`Health`**  
总生命值。

**`Health_Min` / `Health_Max`**  
新生成 Vehicle 的生命值随机范围。

::: note
官方原文当前对 `Health_Min` / `Health_Max` 的两句描述出现了“Minimum/Maximum”互换的笔误；字段名语义如上。
:::

### Invulnerability

**`Invulnerable`**  
低威力 Weapon 如果没有 `Invulnerable` Flag，则无法伤害此 Vehicle。

**`Environment_Invulnerable`**  
Animal、Zombie Melee、Mega Zombie Boulder 无法伤害 Vehicle。Zombie / Animal 仍会追逐载具并尝试直接攻击乘员；其他伤害来源仍可伤车。

这个设计最早用于 Boss 战中的固定 Turret：玩家可用 Vehicle Turret 攻击 Boss，而 Turret 本身不会被摧毁/Despawning，但乘员仍不安全。

**`Explosions_Invulnerable`**  
Vehicle 免疫爆炸伤害。

**`Bumper_Invulnerable`**  
Vehicle 不会因撞击其他 Vehicle、Object、Placeable 或 Entity 而受 Collision Damage。

### Bumper Damage

各字段给出载具以 1 m/s 撞击时的基础伤害，之后还会乘速度和其他倍率：

- `Bumper_AnimalDamage`：Animal，默认 15。
- `Bumper_ObjectDamage`：Object，默认 30。
- `Bumper_PlayerDamage`：Player，默认 10。
- `Bumper_ResourceDamage`：Resource，默认 85。
- `Bumper_ZombieDamage`：Zombie，默认 15。

**`Bumper_Multiplier`**  
先乘 Collision Speed。如果结果低于 `Bumper_SpeedDamageThreshold`，不造成伤害；否则该速度再用于乘算对外伤害。

例：速度 4 m/s，Multiplier=2，Base Damage=10，则最终 `4 × 2 × 10 = 80` Damage。

**`Bumper_SpeedDamageThreshold`**  
乘完 Bumper Multiplier 后低于该速度不造成撞击伤害，默认 3。

**`Bumper_SelfDamageMultiplier`**  
Vehicle 撞东西后对自身伤害的倍率；`Bumper_Invulnerable` 时不适用。

**`Child_Explosion_Armor_Multiplier`**  
爆炸伤害 Vehicle 上 Barricade / Buildable 时的伤害倍率，默认 0.2。

**`Passenger_Explosion_Armor`**  
坐在 Vehicle 内的玩家受到爆炸伤害的倍率，默认 1。

**`Can_Repair_While_Seated`**  
true 时坐在载具里的玩家也可以修理它。

## 爆炸

**`Explosion`**  
Vehicle 摧毁时播放的 Effect Asset GUID 或 Legacy ID。

**`Explosion_Force_Multiplier`**  
Vehicle 爆炸施加 Force 的倍率，建议随 Vehicle Mass 调整。质量接近官方 Example Asset 的自定义 Vehicle 常可从 `2` 左右开始调。

**`Explosion_Min_Force` / `Explosion_Max_Force`**  
爆炸在 X/Y/Z 轴施加的最小/最大 Force，默认都为 `(0, 1024, 0)`。

**`ShouldExplosionBurnMaterials`**  
true 时摧毁后把 Vehicle 的 `Model_#` Material 染黑。若配置 `Explosion`，默认 true。

**`ExplosionBurnMaterialSections`**  
仅 `ShouldExplosionBurnMaterials=true` 使用。手动指定爆炸后哪些 Material 应被变暗。

**`ShouldExplosionCauseDamage`**  
true 时 Vehicle 摧毁产生的爆炸会伤害附近 Entity，并杀死所有乘员。若配置 `Explosion`，默认 true。

## 喷漆

**`IsPaintable`**  
true 时 Vehicle Paint Tool 可以给该 Vehicle 喷漆。若配置了 `PaintableSections`，默认 true。

**`PaintableSections`**  
每个 Section 指定 Renderer Path / Material Index；对应 Material 的 `_PaintColor` 会设为 Vehicle Paint Color。

### 默认颜色模式

**`DefaultPaintColor_Mode`**

- 若配置 `DefaultPaintColors`，默认 `List`。
- 否则默认 `None`。
- 可手动设为 `RandomHueOrGrayscale`。

**`DefaultPaintColors`**  
`List` 模式随机选择的 Color：

```text
DefaultPaintColor_Mode List
DefaultPaintColors
[
    "#353535" // Classic Black
    "#37658c" // Classic Blue
    "#2e642e" // Classic Green
    "#bd6e27" // Classic Orange
    "#6a466d" // Classic Purple
    "#9a2525" // Classic Red
    "#d4d4d4" // Classic White
    "#cdaa1e" // Classic Yellow
]
```

**`DefaultPaintColor_Configuration`**  
`RandomHueOrGrayscale` 模式的 HSV 随机范围：

```text
DefaultPaintColor_Mode RandomHueOrGrayscale
DefaultPaintColor_Configuration
{
    MinSaturation 0.15
    MaxSaturation 0.7
    MinValue 0.15
    MaxValue 0.9
    GrayscaleChance 0.1
}
```

Vehicle Redirector 的 `LoadPaintColor` / `SpawnPaintColor` 可覆盖默认随机颜色。

## 枪塔

**`Turrets`**  
Vehicle 上 Turret 总数。其他所有 `Turret_#_*` 属性都要求先配置它。

**`Turret_#_Seat_Index`**  
该 Turret 可从哪个 `Seat_#` 使用。例如 0 对应 `Seat_0`。

**`Turret_#_Item_ID`**  
Turret Seat 可使用的 Item Legacy ID。常用带 `Turret` 属性的 Gun Asset；技术上也可使用其他 Item，但大多行为不符合预期。

**`Turret_#_Yaw_Min` / `Yaw_Max`**  
水平旋转（Azimuth）最小/最大角度。Max=360 可无限向右转；Min=-360 可无限向左转。

**`Turret_#_Pitch_Min` / `Pitch_Max`**  
Elevation 最小/最大角度。

**`Turret_#_Ignore_Aim_Camera`**  
默认玩家 Camera 会移动到 `Aim` GameObject；该 Flag 禁用这一行为。

Fighter Jet 示例：

```text
Turrets 1
Turret_0_Seat_Index 0
Turret_0_Item_ID 1471
Turret_0_Yaw_Min -135
Turret_0_Yaw_Max 135
Turret_0_Pitch_Min 85
Turret_0_Pitch_Max 180
Turret_0_Ignore_Aim_Camera
```

## Train

以下属性用于 `Engine Train`：

- **`Train_Car_Length`**：相邻 Train Car 之间距离（米）。
- **`Train_Track_Offset`**：Train Car 高于 Track 的偏移（米）。
- **`Train_Wheel_Offset`**：Wheel 之间偏移（米）。

## 网络速度校验

**`Valid_Speed_Down`**  
覆盖 Y 轴向下速度合理性检查（m/s）。多人游戏速度超过它时 Movement 标记 Invalid。

- Car / Boat 默认 25。
- 其他默认 100。

**`Valid_Speed_Up`**

- Car 默认 12.5。
- Boat 默认 3.25。
- 其他默认 100。

**`Valid_Speed_Horizontal`**  
覆盖 XZ 平面的速度合理性检查。适合服务器无法准确预测速度的载具，例如由 Unity Component 额外施加 Force 的对象。

默认：

- Helicopter / Blimp：`(Speed_Max * 0.125)^2`
- 其他：`(Speed_Max * 0.1)^2`

## Economy / Skin

**`Shared_Skin_Lookup_ID`**  
另一个 Vehicle 的 GUID / Legacy ID，与其共享 Skin。过去官方不同颜色常是独立 Vehicle，例如 Rally Car，因此使用此属性共享 Skin。现在一般不再需要，但旧 Mod 可能仍依赖。默认使用本 Vehicle 的 GUID。

**`Shared_Skin_Name`**  
生成图片时，用这个字符串替代 Vehicle 文件名，常与 `Shared_Skin_Lookup_ID` 一起使用。

**`Size2_Z`**  
Economy Icon 使用的 Orthographic Camera Size。

## CrawlerTrackTilingMaterial 字典说明

**`Path`**  
从 Vehicle Root Transform 到 Renderer Component 的 Scene Hierarchy Path。

**`MaterialIndex`**  
Renderer Materials List 的索引。0=第 1 个 Material，1=第 2 个，以此类推。

**`WheelIndices`**  
WheelConfigurations List 的索引列表。系统取这些 Wheel RPM 的平均值，计算履带移动速度。

**`RepeatDistance`**  
移动多远让 UV Offset 完成 1 次重复。

可选择一条与履带平行的边，用 UV 距离 ÷ 实际 3D 距离计算。例如 UV Length=2、3D Length=1.5m，则约为 1.33 UV/m。

**`UV_Direction`**  
UV Offset 方向。例如 `(-1.0, 0.0)` 表示 Vehicle 前进时 UV 向左移动。

## PaintableVehicleSection 字典说明

**`Path`**  
相对 Vehicle Root 的 Renderer Component 路径。

**`MaterialIndex`**  
Renderer Materials 索引。

**`AllMaterials`**  
true 时应用 Renderer 中全部 Material，而不是只使用某个索引。

## RpmEngineSoundConfiguration 字典说明

- **`IdlePitch`**：Engine RPM = Idle RPM 时 AudioSource Pitch。
- **`IdleVolume`**：Idle RPM 时 AudioSource Volume。
- **`MaxPitch`**：Engine RPM = Max RPM 时 Pitch。
- **`MaxVolume`**：Max RPM 时 Volume。

## VehicleRandomPaintColorConfiguration 字典说明

- **`MinSaturation`**：随机 HSV Saturation 下限。
- **`MaxSaturation`**：Saturation 上限。
- **`MinValue`**：HSV Value/Brightness 下限。
- **`MaxValue`**：Value 上限。
- **`GrayscaleChance`**：范围 [0,1]；随机值低于它时 Saturation=0。例如 0.2 表示约 20% Vehicle 为灰阶。

## VehicleWheelConfiguration 字典说明

**`CanExplode`**  
true 时 Vehicle 爆炸会把该 Wheel 炸飞。默认 true；履带载具可用它简化摧毁效果。

**`CopyColliderRpmIndex`**  
纯视觉 Wheel（无 Collider，例如 Snowmobile 后方附加轮）可从指定有 Collider 的 Wheel 复制 RPM。还必须设置 `ModelRadius`。

**`CrawlerTrackForwardMode`**  
CrawlerTrack Steering Mode 下，定义正 Motor Torque（前进）如何旋转载具。

**`IsColliderPowered`**  
true 时 WheelCollider 连接 Engine，响应玩家 Acceleration Input。

**`IsColliderSteered`**  
true 时 WheelCollider Steering Angle 响应玩家输入。**自 3.23.7.0 起弃用，由 `SteeringMode` 取代。**

**`IsModelSteered`**  
true 时视觉 Wheel Model 按 Steering Input 旋转。

该字段仅为向后兼容。旧系统中可能只有部分 WheelCollider 真正参与物理 Steering，但更多视觉 Wheel 看起来会转。例如 APC 前 4 个轮视觉上转向，但实际只有前 2 个影响物理。

**`ModelPath`**  
相对 Vehicle Root 的视觉 Wheel Scene Hierarchy Path。

**`ModelRadius`**  
大于 0 时，无 Collider 的纯视觉 Wheel 用该半径计算滚动速度。

**`ModelUseColliderPose`**  
true 时忽略 `IsModelSteered`，视觉 Wheel 直接使用 WheelCollider 当前 Pose（未模拟时使用近似 Pose）。

旧高精度 Mod 车辆常用额外 Physics Constraint 模拟 Suspension；现在应由该字段完全替代，因为旧方案会在每个客户端对纯视觉 Wheel 做 Physics Simulation，性能很差，而且仍无法完全匹配真实 Wheel State。

**`ModelSuspensionOffset`**  
视觉 Model 相对模拟 Suspension Position 的垂直偏移。Crawler Track 常用，因为视觉 Wheel 实际落在履带上方，而 Physics Wheel 更低。

**`ModelSuspensionSpeed`**  
视觉 Model 向 Suspension Position 插值的速度（m/s）。负数表示立即 Teleport。

**`MotionEffects`**  
控制 Wheel 是否根据脚下 Physics Material 生成粒子 Kickup Effect。`ModelUseColliderPose=true` 时默认 `BothDirections`，否则默认 `None`。

**`SteeringAngleMultiplier`**  
目标 Steering Angle 倍率。可设为负数实现后轮反向转向。

**`SteeringMode`**  
决定 Wheel 是否参与 Steering，以及使用哪种 Steering Simulation。

**`WheelColliderPath`**  
相对 Vehicle Root 的 WheelCollider Component Scene Hierarchy Path。

### WheelConfigurations 示例

Ambulance 配置示例：

```text
WheelConfigurations
[
    {
        WheelColliderPath Tires/Tire_0
        IsColliderSteered true
        IsColliderPowered true
        ModelPath Wheels/Wheel_0
        ModelUseColliderPose true
    }
    {
        WheelColliderPath Tires/Tire_1
        IsColliderSteered true
        IsColliderPowered true
        ModelPath Wheels/Wheel_1
        ModelUseColliderPose true
    }
    {
        WheelColliderPath Tires/Tire_2
        IsColliderSteered false
        IsColliderPowered false
        ModelPath Wheels/Wheel_2
        ModelUseColliderPose true
    }
    {
        WheelColliderPath Tires/Tire_3
        IsColliderSteered false
        IsColliderPowered false
        ModelPath Wheels/Wheel_3
        ModelUseColliderPose true
    }
]
```

迁移旧 Vehicle 时，可添加启动参数：

```text
-LogVehicleWheelConfigurations
```

游戏会记录与旧设置等效的 Wheel Configuration，方便迁移。

## 本地化

**`Name`** `string`：UI 中显示的载具名称。

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://unturned.wiki.gg/Carjack>
- <https://unturned.wiki.gg/Vehicle_Battery>
- <https://unturned.wiki.gg/Rally_Car>
- <https://unturned.wiki.gg/Fighter_Jet>
- <https://unturned.wiki.gg/Ambulance>

> 上游原文：[assets/vehicle-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/vehicle-asset.rst)
