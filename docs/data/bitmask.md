---
title: Bitmask（位掩码）
translation:
  source: data/bitmask.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# Bitmask（位掩码）

位掩码使用不同二进制位表示独立开关，可参考 [Mask (computing)](https://en.wikipedia.org/wiki/Mask_(computing))。

## 天气示例

雨默认 Mask 为 `1`（`0b01`），雪为 `2`（`0b10`）。Ambience Volume 用 `3`（`0b11`）可同时允许雨雪，用 `0`（`0b00`）则两者都不允许。

> 上游原文：[data/bitmask.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/data/bitmask.rst)
