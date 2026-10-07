import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
  navbar: [
    { text: '首页', link: '/' },
    { text: '文档', link: '/servers/' },
    { text: 'GitHub', link: 'https://github.com/StarKano/Unturned-Docs-CN' },
  ],

  sidebar: {
    '/': [
      {
        text: '服务器',
        link: '/servers/',
        collapsed: false,
        items: [
          { text: '搭建服务器', link: '/servers/server-hosting/' },
          { text: '使用 SteamCMD', link: '/servers/steamcmd/' },
          { text: '服务器配置', link: '/servers/server-configuration/' },
          { text: '游戏服务器登录令牌（GSLT）', link: '/servers/game-server-login-tokens/' },
          { text: '端口转发', link: '/servers/port-forwarding/' },
          { text: '服务器代码（Server Code）', link: '/servers/server-codes/' },
          { text: 'Fake IP', link: '/servers/fake-ip/' },
          { text: '服务器托管规则', link: '/servers/server-hosting-rules/' },
          { text: '服务器自动重启', link: '/servers/server-auto-restart/' },
          { text: '服务器更新通知', link: '/servers/server-update-notifications/' },
          { text: 'Bookmark Host', link: '/servers/bookmark-host/' },
          { text: '创意工坊更新监控', link: '/servers/dedicated-workshop-update-monitor/' },
          { text: 'Command IO', link: '/servers/command-io/' },
          { text: '异常调试', link: '/servers/debugging-exceptions/' },
          { text: 'Glazier', link: '/servers/glazier/' },
          { text: 'OpenMod', link: '/servers/openmod/' },
          { text: 'Rocket', link: '/servers/rocket/' },
          { text: '服务器浏览器策展', link: '/servers/server-browser-curation/' },
        ],
      },
      {
        text: '资源与 Mod',
        link: '/assets/',
        collapsed: true,
        items: [
          { text: '资源文档概览', link: '/assets/' },
        ],
      },
      {
        text: '数据',
        link: '/data/',
        collapsed: true,
        items: [
          { text: '数据文档概览', link: '/data/' },
        ],
      },
      {
        text: '物品',
        link: '/items/',
        collapsed: true,
        items: [
          { text: '物品文档概览', link: '/items/' },
        ],
      },
      {
        text: '地图制作',
        link: '/mapping/',
        collapsed: true,
        items: [
          { text: '地图制作概览', link: '/mapping/' },
        ],
      },
      {
        text: 'NPC',
        link: '/npcs/',
        collapsed: true,
        items: [
          { text: 'NPC 文档概览', link: '/npcs/' },
        ],
      },
      {
        text: 'U3 SDK',
        link: '/u3-sdk/',
        collapsed: true,
        items: [
          { text: 'U3 SDK 概览', link: '/u3-sdk/' },
        ],
      },
      {
        text: '参与贡献',
        link: '/contributing/',
        collapsed: true,
        items: [
          { text: '贡献指南', link: '/contributing/' },
        ],
      },
    ],
  },

  sidebarScrollbar: true,
})
