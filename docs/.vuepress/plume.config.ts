import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
  navbar: [
    { text: '首页', link: '/' },
    { text: '服务器', link: '/servers/' },
    { text: '资源', link: '/assets/' },
    { text: '数据', link: '/data/' },
    { text: '物品', link: '/items/' },
    { text: '地图制作', link: '/mapping/' },
    { text: 'NPC', link: '/npcs/' },
    { text: 'U3 SDK', link: '/u3-sdk/' },
    { text: '参与贡献', link: '/contributing/' },
    { text: 'GitHub', link: 'https://github.com/StarKano/Unturned-Docs-CN' },
  ],
  collections: [
    { type: 'doc', dir: 'servers', title: '服务器', sidebar: 'auto' },
    { type: 'doc', dir: 'assets', title: '资源', sidebar: 'auto' },
    { type: 'doc', dir: 'data', title: '数据', sidebar: 'auto' },
    { type: 'doc', dir: 'items', title: '物品', sidebar: 'auto' },
    { type: 'doc', dir: 'mapping', title: '地图制作', sidebar: 'auto' },
    { type: 'doc', dir: 'npcs', title: 'NPC', sidebar: 'auto' },
    { type: 'doc', dir: 'u3-sdk', title: 'U3 SDK', sidebar: 'auto' },
    { type: 'doc', dir: 'contributing', title: '参与贡献', sidebar: 'auto' },
  ],
})
