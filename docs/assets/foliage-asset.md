---
title: 植被类（Foliage Asset）
translation:
  source: assets/foliage-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 植被类（Foliage Asset）

Foliage Asset 有不同子类型，最常见的是 Instanced Mesh（草、小石子）和 Resource（树木）。

与旧系统不同，目前 Tree Baking 还不能直接在 Level Editor 中完整配置，但把烘焙参数与 Tree Asset 分离有两个优点：

1. 不同 Biome 或地图可以复用同一棵树，但使用不同参数，例如森林中心更密、周边更稀；也可以复用其他地图的 Tree Asset 并使用自定义配置。
2. 未来 Resource System 计划迁移为普通 Object（会自动转换），而绝大多数 Object 本身并不需要 Foliage 参数。

## FoliageResourceInfoAsset 属性

- **`Type`**：`SDG.Framework.Foliage.FoliageResourceInfoAsset`。
- **`Resource`** [Asset Pointer](/data/asset-ptr.html)：实际生成的树木 Resource。
- **`Obstruction_Radius`** `float`：如果生成点周围该半径球体与任何物体重叠，则该位置无效。
- **`Density`** `float`：名称并不准确。每这么多平方米尝试生成 1 棵树。例如 4 大约相当于每 2m×2m 区域尝试一次。
- **`Min_Weight`** `float` [0,1]：Landscape Material Weight 大于该值才生成。
- **`Max_Weight`** `float` [0,1]：Landscape Material Weight 小于该值才生成。
- **`Min_Angle`** `float` [0,90]：Surface Angle 大于该值才生成。例如可让 Boulder 只在坡度超过 45° 的地方出现。
- **`Max_Angle`** `float` [0,90]：Surface Angle 小于该值才生成。例如可让树不在超过 30° 的坡上生长。
- **`Tile_Dither`** `bool`：一种性能优化，会更快淡出远处植被，例如靠近 Tile 边界的植被常开启。适合草、小石子这类小型、高密度、大数量内容。默认 true。
- **`Uniform_Scale`** `bool`：true 时最大/最小 Scale 使用 float 而不是 Vector3，可让 Grass/Pebble 等 Instanced Mesh 每批打包更多实例。需要支持 Uniform Scaling 的 Shader，例如 `Framework/Grass (Uniform Scaling)` 和 `Framework/Detail (Uniform Scaling)`。

## Devkit Foliage V1 升级到 V2

::: note
3.22.8.0 更新中自动转换 Terrain 的地图已经同时转换到 V2。
:::

V1 会把每个很小的独立 Region 存成单独文件，导致地图复制、下载和安装很慢。

V2 改为把每个 Region 的 Pointer 存在单一文件中，代价是 Level Editor 中会占用更多 RAM。

自 3.22.20.0 起，仍使用 V1 Foliage 的地图在下次保存时会自动升级到 V2，不再需要 `-SaveFoliageUsingV2`。

旧 V1 文件仍会保留在地图 `Foliage` 目录作为备份。确认转换成功后可以手动删除来释放空间。

> 上游原文：[assets/foliage-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/foliage-asset.rst)
