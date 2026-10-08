---
title: 空投类（Airdrop Asset）
translation:
  source: assets/airdrop-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 空投类（Airdrop Asset）

用于覆盖运输机投下时可见的补给箱模型，以及补给箱落地后生成的 Barricade。该资源由 Level Asset 引用。

- **`Type`** `string`：`SDG.Unturned.AirdropAsset`
- **`Landed_Barricade`** [Asset Pointer](/data/asset-ptr.html)：落地后生成的 Barricade Storage 物品资源。生成的 Barricade Pivot 会与补给箱撞地瞬间的 Pivot 对齐。
- **`Carepackage_Prefab`** [Master Bundle Pointer](/data/master-bundle-ptr.html)：下落过程中生成的模型。

> 上游原文：[assets/airdrop-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/airdrop-asset.rst)
