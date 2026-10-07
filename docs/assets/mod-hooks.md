---
title: Mod Hooks
translation:
  source: assets/mod-hooks.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Mod Hooks

## 概览

如果 Unity GameObject 上的 Script Component 与游戏本体代码中的脚本匹配，就可以导出进 Asset Bundle。官方有意允许导出的这类脚本称为 **Mod Hooks**。

它们可以从 `Project.unitypackage` 导入 Unity 项目，再从 **Unturned Components** 菜单添加到 GameObject。每个脚本会暴露若干 Unity Event，用于控制可见性、播放动画等组件属性。每个脚本的用途和成员记录在对应 `*.cs` 文件中。

这一概念最初由 VitaxaRusModding 在 [GitHub Issue #435](https://github.com/SmartlyDressedGames/Unturned-3.x-Community/issues/435) 提出。

## Event Listeners

- **Activation Event Hook**：组件或 GameObject 启用/禁用时触发，适合扩展开关交互。
- **Binary Random Component**：按概率触发两种事件之一。例如概率 `0.05` 时，`OnTrue` 触发 5%，`OnFalse` 触发 95%。
- **Collision Damage**：玩家与 Trigger Collider 重叠时造成伤害。
- **Collision Event Hook**：玩家进入 Trigger Collider 时触发。主要适合服务器端对象。客户端只有本地角色在 Player Layer，其他玩家在 Enemy Layer；服务器端全部角色都在 Player Layer，而该 Hook 只报告 Player Layer 碰撞。
- **Destroy Event Hook**：组件或 GameObject 从场景移除时触发。
- **Explosion Spawner**：让 Unity Event 在球形范围造成伤害，不包含视觉效果；用于替代对 `Grenade.cs`、`Rocket.cs` 的非预期用法。
- **Gun Attachment Event Hook**：枪械 GameObject（含子对象）的瞄具、战术配件、握把、枪管、弹匣安装/替换/拆卸时触发。
- **Interactable Object Binary State Event Hook (IOBS)**：用于可按 F 打开、关闭或切换的关卡对象；状态变化时触发，也可从客户端或服务器控制。
- **Interactable Object Quest Event Hook**：用于 Dropper、Note 或 Quest Interactable Object；成功使用时只在权威端（服务器或单人）触发。
- **NPC Global Event Hook**：对应 NPC Event 奖励触发时触发。例如广播 `Fireworks` 后，所有 Event ID 为 `Fireworks` 的组件都会响应。
- **Text Chat Event Hook**：聊天消息满足频道、半径、秘密短语等过滤条件时触发，仅服务器端。
- **Timer Event Hook**：设置/取消计时器，并在到期时触发。
- **Useable Event Hook**：任意物品类型 `EquipableItem` Prefab 的事件，服务端和客户端都会触发。
- **Useable Gun Event Hook**：`EquipableItem` Prefab 枪械事件，取代 VehicleTurretEventHook，服务端和客户端都会触发。
- **Vehicle Event Hook**：驾驶员进入/离开载具时触发。
- **Vehicle Gear Shift Event Hook**：载具变速箱进入/离开目标挡位时触发。
- **Vehicle Health Event Hook**：载具生命值跨过目标比较值时触发。
- **Vehicle Turret Event Hook**：载具 `Turret_#` GameObject 使用武器时触发。
- **Weather Event Hook**：白天、夜晚、满月和天气事件。
- **Custom Weather Event Hook**：监听某个自定义 Weather Asset；地图可以拥有任意数量天气类型和监听器。

## Event Instigators

- **Airdrop Spawner**：由 Unity Event 呼叫空投，可覆盖货物和目的地。
- **Barricade Spawner**：由 Unity Event 放置 Barricade。
- **Client Text Chat Messenger**：请求客户端代表玩家发送聊天消息，例如执行命令。需在[服务器配置](/servers/server-configuration.html)启用 `UnityEvents.Allow_Client_Messages` 和/或 `UnityEvents.Allow_Client_Commands`；单人模式默认开启。
- **Item Spawner**：生成掉落物品。
- **Server Text Chat Messenger**：服务器广播消息，图标和富文本可选；也能执行 NPC 尚不支持的命令，例如改天气或触发空投。需启用 `UnityEvents.Allow_Server_Messages` 和/或 `UnityEvents.Allow_Server_Commands`；单人默认开启。
- **Effect Spawner**：生成 Effect Asset。`AuthorityOnly` 开启时只由服务器生成并同步给客户端。
- **Mob Alert Spawner**：惊动附近动物和僵尸，可选使用附近玩家作为警报来源。
- **NPC Global Event Messenger**：广播 Event 类型 NPC 奖励，供 NPC Global Event Hook 监听。
- **Vehicle Spawner**：生成载具，可覆盖 Paint Color。

## 其他

- **Barricade Destroyer**：强制移除球形范围内 Barricade，可选播放 Explosion 和生成 `Item_Dropped_On_Destroy`。
- **Fall Damage Override**：让任意 GameObject 覆盖角色落到它或其子对象时的坠落伤害。
- **Crafting Tag Provider**：允许 Barricade、Structure、Vehicle、Resource、Object 修改附近玩家可用的 Crafting Tag（工作站）。原版用它兼容旧 Heat Source。
- **Crafting Tag Modifier**：由 Crafting Tag Provider 引用，用 Unity Event 修改附近玩家可用 Crafting Tag。例如 Fire 关闭时自动移除 Heat Source 标签。
- **Music Audio Source**：把同级 Audio Source 输出切到原版 Music Mixer，并遵守玩家音乐音量设置。
- **Repeat**：固定或随机次数重复触发事件，本质上相当于 Unity Event 的 for 循环。

> 上游原文：[assets/mod-hooks.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/mod-hooks.rst)
