---
title: 材质调色板资源
translation:
  source: assets/material-palette-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 材质调色板资源

`MaterialPaletteAsset` 允许一个 Object 从多个候选 Material 中选择。每次在 Level Editor 生成 Object 时，会从 Material Palette 随机选择一个材质；编辑器中也可以给已选择的 Object 手动指定 Palette。

## Metadata

- **`GUID`**：参阅 [GUID](/data/guid.html)。
- **`Type`**：`SDG.Unturned.MaterialPaletteAsset`。

## 属性

**`Materials`**：由 [Master Bundle Pointer](/data/master-bundle-ptr.html) 字典组成的数组，每项都应指向 Unity Bundle 内的一个 Material。

```text
"Asset"
{
    "Materials"
    [
        {
            "Name" "core.masterbundle"
            "Path" "Objects/Material_Palettes/House/House_00.mat"
        }
        {
            "Name" "core.masterbundle"
            "Path" "Objects/Material_Palettes/House/House_01.mat"
        }
    ]
}
```

> 上游原文：[assets/material-palette-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/material-palette-asset.rst)
