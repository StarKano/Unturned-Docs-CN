---
title: 立体声歌曲资源
translation:
  source: assets/stereo-song-asset.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# 立体声歌曲资源

定义可在游戏内 Stereo（或自定义音乐播放器物品）播放的音乐。可参考 Songs 目录中的 `Unturned_Theme.asset`。

- **`Type`**：`SDG.Unturned.StereoSongAsset`。
- **`Title`** `string`：音乐播放器菜单中的显示文字。如果存在本地化 `.dat`，可使用其中 `Name`；也可使用 Translation Reference。

直接文本：

```text
"Title" "My song"
```

或在 `{Language}.dat` 中填写 `Name`。

也可使用翻译引用：

```text
"Title"
{
    "Namespace" "SDG"
    "Token" "Stereo_Songs.Unturned_Theme.Title"
}
```

- **`Song`** [Master Bundle Pointer](/data/master-bundle-ptr.html)：要播放的 Audio Clip。支持新版 Master Bundle Pointer，也兼容旧 Content Pointer。

新版：

```text
"Song"
{
    "MasterBundle" "core.masterbundle"
    "AssetPath" "Effects/Ambience/Cave_0/Cave_0.ogg"
}
```

旧版：

```text
"Song"
{
    "Name" "core.content"
    "Path" "assets/resources/bundles/songs/unturned_theme.mp3"
}
```

- **`Link_URL`** `string`：点击外部链接按钮时在浏览器打开的可选 URL。
- **`Is_Loop`** `bool`：是否循环播放。循环音乐**不推荐**使用 MP3。

> 上游原文：[assets/stereo-song-asset.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/assets/stereo-song-asset.rst)
