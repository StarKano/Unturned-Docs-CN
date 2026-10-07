---
pageLayout: home
pageClass: unturned-home
signDown: true
config:
  -
    type: hero
    full: true
    effect: tint-plate
    hero:
      name: UNBBS · Unturned 中文文档
      tagline: 由未转变着中文社区维护的未转变着技术资料库
      text: 从服务器搭建、配置与运维，到 Mod、地图制作、数据与开发资料。同步Unturned官方文档更新，由未转变着中文社区共同翻译、校对与维护。
      actions:
        -
          theme: brand
          text: 开始阅读
          link: /docs/
          icon: material-symbols:menu-book-outline
        -
          theme: alt
          text: 未转变者中文社区
          link: https://www.unbbs.net/
          icon: mdi:forum-outline
        -
          theme: alt
          text: 参与维护
          link: https://github.com/StarKano/Unturned-Docs-CN
          icon: mdi:github
  -
    type: features
    title: 从这里开始
    description: 面向玩家、服主、地图作者和开发者的 Unturned 中文资料。
    features:
      -
        icon: material-symbols:dns-outline
        title: 服务器
        details: U3DS、SteamCMD、GSLT、端口转发、Fake IP、运维与插件框架。
        link: /servers/
        linkText: 浏览服务器文档
      -
        icon: material-symbols:deployed-code-outline
        title: 资源与 Mod
        details: Asset、Bundle、资源定义和 Mod 制作相关技术资料。
        link: /assets/
        linkText: 浏览资源文档
      -
        icon: material-symbols:map-outline
        title: 地图制作
        details: 地图编辑器、导航、对象、道路与关卡配置。
        link: /mapping/
        linkText: 浏览地图文档
      -
        icon: material-symbols:database-outline
        title: 数据与物品
        details: 数据格式、内置类型、物品以及各种资源字段说明。
        link: /data/
        linkText: 浏览数据文档
      -
        icon: material-symbols:record-voice-over-outline
        title: NPC
        details: NPC、对话、任务、条件和奖励系统。
        link: /npcs/
        linkText: 浏览 NPC 文档
      -
        icon: material-symbols:code-blocks-outline
        title: U3 SDK
        details: U3 SDK、开发接口和高级开发资料。
        link: /u3-sdk/
        linkText: 浏览 SDK 文档
  -
    type: features
    title: 来自未转变者中文社区
    description: 文档不是孤立的网站，而是 UNBBS 中文社区知识体系的一部分。
    features:
      -
        icon: mdi:forum
        title: 社区交流
        details: 在 UNBBS 与玩家、服主、Mod 作者和开发者交流问题与经验。
        link: https://www.unbbs.net/
        linkText: 进入中文社区
      -
        icon: mdi:translate
        title: 社区翻译
        details: 中文内容以官方 stable 文档为基线，通过 GitHub 持续同步、翻译和复核。
        link: /contributing/
        linkText: 参与翻译
      -
        icon: mdi:source-pull
        title: 开放协作
        details: 发现错误、术语问题或上游更新时，可以直接提交 Pull Request。
        link: https://github.com/StarKano/Unturned-Docs-CN
        linkText: 前往 GitHub
---

## 当前进度

服务器顶层文档已完成第一轮中文初译，共 **18 篇**。后续将继续扩展资源、数据、地图制作、NPC 与 U3 SDK 等分类。

- 上游分支：`stable`
- 上游 Commit：`e0e8bb4fd08847edb9173eef498e104bc5d2d4cb`
- 维护方式：UNBBS 中文社区 + GitHub 协作

::: tip 中文社区项目
本站由 **未转变者中文社区（UNBBS）** 发起并维护，是面向中文玩家的非官方 Unturned 文档项目。若中文内容与官方英文文档存在差异，请以官方英文文档为准。
:::
