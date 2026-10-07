---
title: 精选物品（Curated Items）
translation:
  source: assets/curated-items.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 精选物品（Curated Items）

社区制作的皮肤、饰品等可以提交到 [Steam Workshop](/about/steam-workshop.html)，供官方评估是否加入正式游戏。投稿位于 [Stockpile Submissions](https://steamcommunity.com/workshop/browse/?appid=304930&section=mtxitems)，玩家可以投票。

被接受的物品可能上架销售，或通过其他方式解锁。大多数会在 [Stockpile](https://store.steampowered.com/itemstore/304930/) 中出售。

默认创作者分成为 **25%**；与地图关联的物品（例如 [Elver Map Bundle](https://store.steampowered.com/itemstore/304930/detail/1103/)）分成为 **50%**。如果物品由多人共同制作，或加入包含多人作品的礼包，你个人获得的比例会进一步拆分。

## 要求

制作皮肤或饰品前先阅读[开始使用](/about/getting-started.html)。相比普通 Mod，还需要：

1. 遵循投稿规范。
2. 整理 Unity 项目。
3. 制作饰品或皮肤。
4. 饰品设置 Mythical 特效位置。
5. 导出 Unity Package。
6. 提交到 Steam Workshop。

## 投稿规范

1. 避免高对比颜色，尤其在强光下会刺眼。
2. 不要暗于 ![#1e1e1e](/img/1e1e1e.png) `#1e1e1e` 或亮于 ![#f0f0f0](/img/f0f0f0.png) `#f0f0f0`。极端亮度和完全饱和色不适合游戏光照；原版多为中等强度颜色。
3. 服装边缘应有 1 像素宽、略深的描边，例如原版衬衫袖口和下摆。
4. 不应使用为了完全融入地形的平坦纹理（类似吉利服），可以使用图案迷彩。
5. 纹理保持合理分辨率。大型物品理想流程是 2048×2048 缩到 1024×1024；小型物品是 1024×1024 缩到 512×512。
6. 避免过高 Metallic / Smoothness。Unturned 不使用 Reflection Probe，金属反射主要依赖天空盒反射、屏幕空间反射等可选功能。
7. 模型边角通常不应 Bevel。原版大多使用锐利边缘。没有硬性顶点/三角形/多边形上限；符合美术风格通常自然会保持合理复杂度。
8. 自定义模型皮肤应尽量尊重原物品轮廓，并保证枪管、战术配件、瞄具、握把等附件仍能正常且美观地安装。
9. 饰品不要让玩家产生误判。例如帽子像头发时，应加入额外配件或细节，避免看起来像没戴物品。
10. 只提交自己制作的内容，不要使用未授权版权素材或商标。
11. 不支持游戏本体之外的自定义 Shader。
12. 目前物理模拟与 Unturned 角色兼容性不好，饰品不能使用物理效果。

这些主要是指导原则。除版权侵权等明确情况外，官方偶尔会接受打破部分建议的作品，但遵循规范会提高入选机会。

## Unity 项目结构

官方希望把项目分成两个目录：一个存放导出到 Asset Bundle 的文件（例如 `Item.prefab`），另一个存放源文件（例如 `.blend`），便于确认最终只加入必要资源。

原版中，Asset Bundle 文件位于 `Assets/CoreMasterBundle`；源文件位于 `Assets/Game/Sources`。

### 饰品目录

- 地图相关饰品放在每张地图自己的目录，并用地图名作为前缀。例如 Arid 的 [Arrowhead](https://unturned.wiki.gg/wiki/Arrowhead) 导出文件位于 `Assets/CoreMasterBundle/Items/Arid/Arid_Arrowhead`，源文件在 `Assets/Game/Sources/Items/Arid`。
- Outfit 按套装分目录，并用 Outfit 名作为前缀。例如 [Cultist's Mask](https://unturned.wiki.gg/wiki/Cultist%27s_Mask) 导出文件位于 `Assets/CoreMasterBundle/Items/Outfits/Cultist/Cultist_Mask`，源文件在 `Assets/Game/Sources/Items/Outfits/Cultist`。
- 其他物品放在对应类型目录。例如 [Backpack Turtle](https://unturned.wiki.gg/wiki/Backpack_Turtle) 导出文件位于 `Assets/CoreMasterBundle/Items/Backpacks/Turtle_Backpack`，源文件也放在对应 Backpacks 子目录。

## 导出 Unity Package

被接受的饰品会进入游戏核心 Asset Bundle，因此除了常规 `.dat` 外，还需要 `.unitypackage`：

1. 选择包含 `Item.prefab`（或其他类型对应 Asset Bundle 文件）的目录。例如 Fedora 会选择 `Assets/CoreMasterBundle/Items/Hats/Fedora`。
2. 在 **Project** 窗口右键。
3. 点击 **Export Package...**。
4. 勾选 **Include dependencies**，包含未直接进入 Bundle 的 Mesh、Material、Texture 等源资源。

::: note
Unity Package 是常规 `.dat` 和 `English.dat` 的补充，不是替代品。一起提供实际使用的 `.dat` 有助于保持最终版本一致。`English.dat` 中附带名称和描述也很有帮助。
:::

## 制作饰品

饰品在 Unity 中与实际 Clothing Item 基本相同。区别是饰品不提供属性收益，会显示在多数实际服装外层，而且玩家可以自由切换可见性。

建议参考 `ExampleAssets.unitypackage` 中的 Clothing 示例。

### Mythical 特效位置

![Effect Transform 位置示例](/img/EffectTransform.png)

*“Effect” Transform 的位置与朝向示例。*

要支持 Mythical 特效，在 `Item.prefab` 和对应 Clothing Prefab（`Backpack.prefab`、`Glasses.prefab`、`Hat.prefab`、`Mask.prefab`、`Vest.prefab`）中添加名为 `Effect` 的子 Transform。

方向为：**+Z 是向上，+Y 是向前**。

## 制作皮肤

理论上任何物品都能支持皮肤，但目前并非全部实现。建议只为已经可换肤的物品制作，包括大多数武器，以及 Canned Beans、Detonator 等少数物品。展开 UV 的 Mesh 在 `ExampleAssets.unitypackage` 中提供。

至少需要自定义 Albedo，也可以添加 Metallic 或 Emission Texture。上传 Workshop 时要包含源文件，便于官方补资源或修复小问题。

![Fiesta Augewehr 材质包示例](/img/FiestaAugewehrBundles.png)

*Fiesta Augewehr 皮肤包含四种材质类型。*

如果没有自定义 Mesh，Bundle 中通常不包含 Prefab，而包含以下 Material：

- **Primary**：`Skin_Primary.mat`，物品自身使用，每个皮肤一个。
- **Secondary**：`Skin_Secondary_#.mat`，`#` 是附件 Legacy ID；可以有多个。狙击枪通常要给瞄准镜准备一个。
- **Attachment**：`Skin_Attachment.mat`，又叫 Layered Attachments Material；当附件有 Texture Mask 且没有 Secondary 时使用。
- **Tertiary**：`Skin_Tertiary.mat`，又叫 Fallback Attachments Material；其他 Material 都不适用时使用。提供 Attachment Material 时通常也应提供 Tertiary。

![Fallback 与 Layered 附件材质对比](/img/FallbackLayered.png)

*Layered Attachments 会保留 8x Scope 的部分原始纹理，而 Fallback Attachments 会完整覆盖。*

Layered 与 Fallback 纹理不必完全相同。Bloodsport Calling Card、Bouquet Bluntforce、Vortex Augewehr 都是差异明显的例子。

### 自定义模型

皮肤可以用自定义模型覆盖原物品。保留原轮廓、并确保附件和 Stat Counter 仍然协调，会更容易入选。

Bundle 中加入 `Override_Mesh_#.prefab`，`#` 为 LOD 索引，例如 `Override_Mesh_0.prefab`；Prefab 只需 Mesh Filter 指向自定义模型。

## 使用 Collections

Collection 可以把多个投稿组合起来，便于用户发现和评价相似内容。常见用法包括同主题皮肤、同一物品的不同配色版，以及组成完整 Outfit 的多个独立饰品。

把版本拆成多个投稿可以让玩家分别投票；Outfit 拆件后，官方也能只接受其中一部分。还可以使用 OutfitAsset 生成整套预览图，用于 Collection 或相关物品的 Workshop 页面。

> 上游原文：[assets/curated-items.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/curated-items.rst)
