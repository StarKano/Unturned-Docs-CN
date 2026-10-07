---
title: 启动参数
translation:
  source: about/launch-options.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 启动参数

**启动参数（Launch Options）**可以在 *Unturned* 启动前修改某些游戏设置，常用于恢复错误的分辨率或 UI 缩放、排查问题，以及开启游戏内设置界面没有提供的功能。

可以按照 [Steam 官方说明](https://help.steampowered.com/en/faqs/view/7D01-D2DD-D75E-2955)添加启动参数：

1. 在 Steam 库中右键 **Unturned**。
2. 点击 **Properties...（属性）**。
3. 在 **General（通用）** 页底部找到 **Launch Options（启动选项）**。
4. 多个参数之间用空格分隔。例如 `-TimeOverlay -Width=1920 -Height=1080` 会开启 TimeOverlay，并把宽高设置为 1920×1080。

## 游戏参数

其中部分参数主要面向 Unturned Dedicated Server。

- **`+connect`**：连接服务器，格式为 `+connect <ip address>:<port>`。
- **`-Cinematic`**：关闭大量 LOD 优化，性能开销非常高。效果包括：4 km 绘制距离和太阳阴影范围；LOD Group 始终显示最高质量；灯光始终可见；对象和资源始终可见；地形始终使用 splatmap shader；地形始终使用最高质量高度图；太阳 Shadowmap 使用 GPU 支持的最大分辨率（部分现代 GPU 可到 16384×16384）；平面反射以 100% 分辨率渲染而不是 50%。
- **`-DisableCullingVolumes`**：关闭对象裁剪距离覆盖。参阅[手动对象裁剪](/mapping/manual-object-culling.html)。
- **`-DisableLightLODs`**：关闭动态灯光淡出，适合高质量截图。
- **`-EnableCharacterControllerOverlapRecovery`**：使 `CharacterControllerExtension.CheckedMove` 直接调用 `CharacterController.Move`，并启用 `CharacterController.enableOverlapRecovery = true`。可能提升服务器性能，但会明显增加越界利用风险，因此默认不启用。
- **`-EnableWheeledVehicleGizmos`**：绘制本地驾驶载具的轮胎扭矩、RPM、打滑、预期 RPM 等调试信息。
- **`-FullscreenMode=`**：覆盖窗口模式。
- **`-FallbackGizmos`**：用 Unity 3D Line Renderer 绘制调试可视化，而不是默认的像素精确线条。性能更低，仅用于默认实现不可用的情况。
- **`-FarClipDistance=`** *float*：范围 `[16.0, 2048.0]`，覆盖图形菜单允许的最大绘制距离。默认最低的“最大绘制距离”为 614.4 米，略高于 512 米网络范围。可换取性能，但会造成显著玩法劣势。
- **`-ForceTrustClient`**：关闭载具移动校验，例如 Tick 间位移是否符合速度。**不推荐使用**，会使作弊者更容易让载具飞行。若未来载具移动完全改为服务器权威，此参数可能被移除。
- **`-FrameRateLimit=`** *int*：覆盖显示菜单中的帧率上限。负数表示不限制。可用于避免加载界面跑到数千 FPS 导致过热。
- **`-GameSense`**：启用 GameSense 集成。
- **`-Glazier=`** *enum*（`IMGUI`、`UIToolkit`）：不用默认 uGUI，而切换到旧版 IMGUI 或实验性 UIToolkit。参阅 [Glazier](/servers/glazier.html)。
- **`-h`** *int*：`-height` 的别名。
- **`-height`** *int*：覆盖游戏分辨率高度。
- **`-Holiday=`** *enum*：覆盖当前节日。可用值包括 `AprilFools`、`Christmas`、`Halloween`、`HW`、`PrideMonth`、`Valentines`、`XMAS`、`LunarNewYear`、`LNY`、`UnturnedAnniversary`。
- **`-HostPlayerLimit=`** *int*：把最大玩家人数限制为指定值，适合服务器托管商。
- **`-LegacyConsole`**：使用旧控制台而不是默认的多线程控制台。
- **`-LogAssemblyResolve`**：记录程序集解析失败，适合开发非 Rocket 插件。
- **`-LogBadMessages`**：记录游戏忽略的网络消息及发送者。只建议用于排查连接是否可能通过特定消息拖慢游戏主线程。服务器默认会自动断开持续发送无效消息的客户端，而这里记录的情况可能包含误报。
- **`-LogBallisticDropConversion`**：记录旧枪械 `Ballistic_Drop` 到 `Bullet_Gravity_Multiplier` 的自动转换，适合手动迁移旧枪械。
- **`-LogGunSpreadConversion`**：记录旧枪械 `Spread_Hip` 到 `Spread_Angle_Degrees` 的自动转换。
- **`-LogLevelBatchingTextureAtlasExclusions`**：与 Level Batching 有关，参阅[关卡批处理](/mapping/level-batching.html)。
- **`-LogSpawnTablesAfterLoadingLevel`**：地图加载后记录全部生成概率。
- **`-LogVehicleWheelConfigurations`**：记录旧载具自动生成 `WheelConfigurations` 字段的过程，适合迁移旧载具。
- **`-ModulesPath`** *string*：让游戏从指定目录查找 `.dll` 和 `.module`，而不是 `Unturned/Modules`。
- **`-NetTransport=`** *enum*（`SteamNetworking`、`SteamNetworkingSockets`）：`SteamNetworkingSockets` 过去用于开启 ISteamNetworkingSockets，现已成为默认。`SteamNetworking` 可退回已弃用的旧 ISteamNetworking API。
- **`-NoDefaultLog`**：禁止默认创建日志文件，除非插件调用 `setLogFilePath`。
- **`-NoDeferAssets`**：不再把载具和关卡对象延迟到地图加载阶段，而是在启动时全部加载。
- **`-NoPreserveMissingObjects`**：默认情况下，关卡编辑器会保留资源缺失的对象和植被。启用后会删除这些缺失资源实例。
- **`-NoSteamTextFiltering`**：关闭 Steam 文本过滤，退回旧的简单过滤器。
- **`-NoWorkshopSubscriptions`**：禁止加载所有 Steam Workshop 订阅内容，适合排查问题。
- **`-OfflineOnly`**：关闭互联网请求。LAN 服务器会跳过 Steam 后端连接并使用本地缓存的 Workshop 内容。
- **`-ParseAssetMetadata`**：解析资源文件中的注释、行号等元数据。开发和错误提示很有用，但会增加加载时间和内存占用。
- **`-PreviewLevelBatchingTextureAtlas`**：与 Level Batching 有关。
- **`-PreviewLevelBatchingUniqueMaterials`**：与 Level Batching 有关。
- **`-RazerChroma`**：在兼容设备上启用 Razer Chroma。
- **`-RefreshRate=`**：覆盖显示器刷新率。
- **`-ResaveAssets`**：危险操作，仅在已有自定义资源备份（最好有版本控制）时使用，并且还必须同时启用 `-ParseAssetMetadata`。它会尝试自动修补资源文件并保留注释、行号，但某些注释可能丢失。截至 2025-05-06，游戏会把旧 `Blueprint_***` 蓝图转换为列表格式；包含 NPC 条件或奖励的蓝图暂时不能自动转换。
- **`-ResetSteamStatsAndAchievements`**：重置所有 Steam 成就和统计进度。
- **`-SkipAssets`**：禁止加载 Asset Bundle 和 Workshop 内容，方便快速迭代纯服务器端代码。
- **`-ScrollViewSensitivity`** *float*：uGUI 滚动视图响应鼠标滚轮的移动距离倍率。
- **`-TimeOverlay`**：在左上角 FPS 下方显示启动后经过的秒数。
- **`-ui_scale`**：覆盖 UI 缩放。常见用法 `-ui_scale 1` 可恢复默认比例。
- **`-UnlockSteamAchievements`**：解锁全部 Steam 成就，主要面向希望保留 100% 完成状态的成就玩家。
- **`-UnredactedLogs`**：关闭 BattlEye 日志玩家 IP 和 Workshop 下载公网 IP 的默认脱敏。
- **`-UseLevelBatching`** *bool*：覆盖是否允许启用 Level Batching，但地图本身仍需支持。例如 `-UseLevelBatching=false` 会完全关闭。
- **`-ValidateAssets`**：启动时对资源执行[额外健康检查](/assets/asset-validation.html)。
- **`-ValidateLevelBatchingUVs`**：与 Level Batching 有关。
- **`-w`** *int*：`-width` 的别名。
- **`-width`** *int*：覆盖游戏分辨率宽度。

## Unity 参数

Unity 自带的命令行参数优先级高于 Unturned 的同类参数。完整列表请参考 [Unity User Manual](https://docs.unity3d.com/2019.4/Documentation/Manual/PlayerCommandLineArguments.html)。

- **`-batchmode`**：批处理模式运行。
- **`-force-glcore`**：强制 OpenGL。
- **`-force-vulkan`**：强制 Vulkan。
- **`-nographics`**：批处理模式下不初始化图形设备。

> 上游原文：[about/launch-options.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/about/launch-options.rst)
