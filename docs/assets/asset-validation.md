---
title: 资源校验（Asset Validation）
translation:
  source: assets/asset-validation.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 资源校验（Asset Validation）

游戏启动并加载资源时会执行快速的基础健康检查，同时还提供一组耗时更高的深入检查。可以通过命令行参数启用：

~~~text
-ValidateAssets
~~~

发现的问题会写入 `Client.log`，同时显示在 **Asset Errors** 菜单中。

## 检查项目

- **Navmesh Readable**：Object 的 Navmesh 应在 Unity 中启用 **CPU Readable**。Recast 需要读取这些数据，才能生成关卡 Navmesh。
- **Mesh Readable**：绝大多数非 Navmesh 的 Mesh 不需要启用 **CPU Readable**。目前不会强制报错，因为官方核心内容中仍有不少旧资源需要整理。
- **Missing Meshes**：查找并记录没有 Mesh 的 Mesh Filter，或缺少 Mesh Filter 的 Mesh Renderer。
- **Mesh Vertex Counts**：顶点数异常高的 Mesh 会被提示优化。多数情况下只需要删除未使用的面和顶点。Collider 的建议上限会更低，因为复杂网格的碰撞计算通常比复杂网格的渲染更昂贵。
- **Missing Materials**：查找并记录没有 Material 的 Renderer。由游戏设置的 `DepthMask` Renderer 是例外。
- **Material Counts**：Material 数量过多的 Renderer 会被建议合并和简化。通常每个 Material 都需要单独渲染，因此数量越少越好。常见做法是每种渲染类型使用一个 Material，例如不透明表面一个、透明表面（如有）一个。
- **Texture Readable**：绝大多数纹理不需要启用 **CPU Readable**。关闭后，Unity 不会在内存中额外保留一份可由 CPU 访问的副本。衬衫和裤子的纹理是例外，因为它们需要在 CPU 上进行叠加处理。
- **Texture NPOT**：绝大多数纹理应使用 2 的幂次尺寸，例如 `1×2`、`4×4`、`64×32`。GPU 更适合处理这些分辨率。Unity 的导入设置可以自动缩放到最接近的 2 的幂次尺寸。
- **Audio Samples**：会查找并记录采样频率较高、时长较长的音频片段。一般来说，这类音频文件本身体积仍然较小。

> 上游原文：[Unturned 官方文档](https://docs.smartlydressedgames.com/en/stable/assets/asset-validation.html)
