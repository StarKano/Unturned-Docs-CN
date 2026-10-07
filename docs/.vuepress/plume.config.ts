import { defineThemeConfig } from 'vuepress-theme-plume'

const docsSidebar = [
  {
    text: '服务器',
    collapsed: false,
    items: [
      { text: '服务器文档概览', link: '/servers/' },
      { text: '搭建服务器', link: '/servers/server-hosting.html' },
      { text: '使用 SteamCMD', link: '/servers/steamcmd.html' },
      { text: '服务器配置', link: '/servers/server-configuration.html' },
      { text: '游戏服务器登录令牌（GSLT）', link: '/servers/game-server-login-tokens.html' },
      { text: '端口转发', link: '/servers/port-forwarding.html' },
      { text: '服务器代码（Server Code）', link: '/servers/server-codes.html' },
      { text: 'Fake IP', link: '/servers/fake-ip.html' },
      { text: '服务器托管规则', link: '/servers/server-hosting-rules.html' },
      { text: '服务器自动重启', link: '/servers/server-auto-restart.html' },
      { text: '服务器更新通知', link: '/servers/server-update-notifications.html' },
      { text: 'Bookmark Host', link: '/servers/bookmark-host.html' },
      { text: '创意工坊更新监控', link: '/servers/dedicated-workshop-update-monitor.html' },
      { text: 'Command IO', link: '/servers/command-io.html' },
      { text: '异常调试', link: '/servers/debugging-exceptions.html' },
      { text: 'Glazier', link: '/servers/glazier.html' },
      { text: 'OpenMod', link: '/servers/openmod.html' },
      { text: 'Rocket', link: '/servers/rocket.html' },
      { text: '服务器浏览器策展', link: '/servers/server-browser-curation.html' },
    ],
  },
  {
    text: '资源与 Mod',
    collapsed: true,
    items: [
      { text: '资源文档概览', link: '/assets/' },
    ],
  },
  {
    text: '数据',
    collapsed: true,
    items: [
      { text: '数据文档概览', link: '/data/' },
    ],
  },
  {
    text: '物品',
    collapsed: true,
    items: [
      { text: '物品文档概览', link: '/items/' },
    ],
  },
  {
    text: '地图制作',
    collapsed: true,
    items: [
      { text: '地图制作概览', link: '/mapping/' },
    ],
  },
  {
    text: 'NPC',
    collapsed: true,
    items: [
      { text: 'NPC 文档概览', link: '/npcs/' },
    ],
  },
  {
    text: 'U3 SDK',
    collapsed: true,
    items: [
      { text: 'U3 SDK 概览', link: '/u3-sdk/' },
    ],
  },
  {
    text: '参与贡献',
    collapsed: true,
    items: [
      { text: '贡献指南', link: '/contributing/' },
    ],
  },
]

export default defineThemeConfig({
  navbar: [
    { text: '文档', link: '/docs/' },
  ],

  social: [
    { icon: 'github', link: 'https://github.com/StarKano/Unturned-Docs-CN' },
  ],
  navbarSocialInclude: ['github'],

  outline: [2, 4],
  prevPage: true,
  nextPage: true,
  createTime: false,

  sidebar: {
    '/docs/': docsSidebar,
    '/servers/': docsSidebar,
    '/assets/': docsSidebar,
    '/data/': docsSidebar,
    '/items/': docsSidebar,
    '/mapping/': docsSidebar,
    '/npcs/': docsSidebar,
    '/u3-sdk/': docsSidebar,
    '/contributing/': docsSidebar,
  },

  sidebarScrollbar: true,
})
