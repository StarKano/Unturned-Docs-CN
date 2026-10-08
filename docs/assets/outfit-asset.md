---
title: Outfit 类
translation:
  source: assets/outfit-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Outfit 类

`OutfitAsset` 用于定义一组应一起穿戴的服装物品，从而生成整套 Outfit 的预览图。可以在主菜单 Workshop 页按 `F1` 打开工具生成 Outfit Preview。

## Metadata

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`SDG.Unturned.OutfitAsset`。

## Outfit 属性

- **`Items`**：Clothing Item [Asset Pointer](/data/asset-ptr.html) 数组。生成预览图时这些服装会一起穿上。

```text
"Asset"
{
    "Items"
    [
        // Top
        "9fd6032f9a24404eaf28961fc7f2d289"

        // Bottom
        "d4ec52a157f746edbc3a4df8ae79ddef"

        // Mask
        "1adc30f0dbf246eba1c0c6a183206aad"

        // Hat
        "daf02a225ebc4b76ae51ca485706e470"
    ]
}
```

> 上游原文：[assets/outfit-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/outfit-asset.rst)
