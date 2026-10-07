---
title: Asset Bundle Custom Data
translation:
  source: assets/asset-bundle-custom-data.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Asset Bundle Custom Data

`AssetBundleCustomData` 是一个 Unity `ScriptableObject`，可以选择性地创建在 Master Bundle 的根目录中，用来保存 Unturned 专用的资源包元数据。

目前提供的主要字段：

- **`Owner Workshop File Id`** `uint64`：Steam Workshop 已发布文件的 ID。如果 Unturned 正在从某个 Workshop 文件加载这个资源包，但实际 Workshop File ID 与这里填写的值不一致，加载会被取消。这个机制可以降低资源包被直接复制或盗用的风险。

## 设置 Owner Workshop File

1. 在 Unity 的 Project 窗口中找到 Master Bundle 的根目录。它就是 `MasterBundle.dat` 中 `Asset_Prefix` 指定的目录。例如 Hawaii 的根目录是 `Assets/HawaiiMasterBundle`。
2. 在该目录中右键，选择 **Create > Unturned > Asset Bundle Custom Data**，创建 `AssetBundleCustomData` 对象。
3. 找到 Workshop 文件 ID。它就是 Workshop 页面 URL 中 `https://steamcommunity.com/sharedfiles/filedetails/?id=` 后面的数字。
4. 将 **Owner Workshop File Id** 设置为这个 Workshop 文件 ID。
5. **（可选）** 查看日志确认 Unturned 是否正确读取了自定义数据。成功时会看到类似 `Loaded (your asset bundle name) custom data from (path)`；未找到时会看到 `Tried loading (your asset bundle name) optional custom data from (path)`。

> 上游原文：[assets/asset-bundle-custom-data.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/asset-bundle-custom-data.rst)