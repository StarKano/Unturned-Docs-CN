---
title: ENPCHoliday
translation:
  source: data/enum/enpcholiday.rst
  branch: stable
  status: translated
  upstreamCommit: e0e8bb4fd08847edb9173eef498e104bc5d2d4cb
---

# ENPCHoliday

`ENPCHoliday` 包含游戏识别的 Holiday / Seasonal Event。计划中的节日持续时间可从启动游戏后生成的 `Client.log`，或源码 `HolidayUtil.cs` 查看。

所有 Holiday 的起止时间均按玩家**本地时间**计算，因此受时区影响。Lunar New Year 的日期会自动计算，持续时间配置在游戏 `Status.json`。

::: note
部分 Asset 只支持少数 Holiday。例如 Landscape Material Asset 只支持 Halloween、Christmas 和 April Fools' Day。
:::

官方原文当前列出的 2025/2026 时间：

| 值 | 说明 | 持续时间 |
| --- | --- | --- |
| `None` | 无节日/季节事件。 | — |
| `Halloween` | 万圣节。 | 2025-10-20 00:00 – 2025-11-01 12:00 |
| `Christmas` | 圣诞节及 Festive Season。 | 2025-12-07 00:00 – 2026-01-02 12:00 |
| `April_Fools` | 愚人节。 | 2025-04-01 全天 |
| `Valentines` | 情人节。 | 2025-02-14 全天 |
| `Pride_Month` | Pride Month（六月）。 | 2025-06-01 – 2025-06-30 |
| `Lunar_New_Year` | 农历新年。 | 按农历自动计算：除夕前一天到新年后 15 天。例如 2025-01-28 – 2025-02-13。 |
| `Unturned_Anniversary` | Unturned Steam 周年。 | 2025-07-07 全天 |
| `Max` | 仅源码内部使用，不用于游戏 Asset。 | — |

::: tip
这些日期是上游文档在当前翻译基线中的示例，并不是永久固定值；实际活动时间应以当前游戏 `Client.log` / `Status.json` 为准。
:::

## 官方原文外部链接

以下链接来自官方 stable 文档，保持原地址跳转：

- <https://en.wikipedia.org/wiki/Halloween>
- <https://en.wikipedia.org/wiki/Christmas>
- <https://en.wikipedia.org/wiki/April_Fools%27_Day>
- <https://en.wikipedia.org/wiki/Valentine%27s_Day>
- <https://en.wikipedia.org/wiki/Pride_Month>
- <https://en.wikipedia.org/wiki/Lunar_New_Year>

> 上游原文：[data/enum/enpcholiday.rst](https://github.com/SmartlyDressedGames/Unturned-Docs/blob/stable/data/enum/enpcholiday.rst)
