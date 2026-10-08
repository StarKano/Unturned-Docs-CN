import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineThemeConfig } from 'vuepress-theme-plume'

const docsRoot = fileURLToPath(new URL('../', import.meta.url))

// Use each page's frontmatter title as its sidebar label.
function page(path: string) {
  const file = path.endsWith('/') ? `${path}README.md` : path.replace(/\.html$/, '.md')
  const source = readFileSync(new URL(`..${file}`, import.meta.url), 'utf8')
  const title = source.match(/^title:\s*(.+)$/m)?.[1]?.trim()
  if (!title) throw new Error(`Missing page title: ${path}`)
  return { text: title, link: path }
}

function pages(section: string, names: string[]) {
  return names.map(name => page(`/${section}/${name}.html`))
}

type SidebarEntry = ReturnType<typeof page> | {
  text: string
  link?: string
  collapsed?: boolean
  items: SidebarEntry[]
}

function group(text: string, items: SidebarEntry[], collapsed = true) {
  return { text, collapsed, items }
}

function namesIn(directory: string, exclude: string[] = []) {
  return readdirSync(`${docsRoot}/${directory}`)
    .filter(name => name.endsWith('.md') && name !== 'README.md' && !exclude.includes(name.slice(0, -3)))
    .map(name => name.slice(0, -3)).sort()
}

// Match the toctree in the official stable branch. Its item glob follows these first three pages.
const itemFirst = ['introduction', 'blueprints', 'actions']
const docsSidebar = [
  group('入门', [page('/about/'), ...pages('about', ['getting-started', 'launch-options', 'steam-workshop'])], false),
  group('Mod 入门', [page('/assets/'), ...pages('assets', [
    'asset-bundles', 'asset-definitions', 'data-file-format', 'asset-validation',
    'asset-bundle-custom-data', 'curated-items', 'animation', 'layers', 'mod-hooks', 'unity-upgrade',
  ])]),
  group('物品', [page('/items/'), ...pages('items', [...itemFirst, ...namesIn('items', itemFirst)])]),
  group('载具', pages('assets', ['vehicle-asset', 'vehicle-physics-profile-asset', 'vehicle-redirector-asset'])),
  group('对象', pages('assets', ['object-asset', 'material-palette-asset'])),
  group('NPC 与逻辑', [page('/npcs/'), ...pages('npcs', [
    'introduction', 'npc-asset', 'dialogue-asset', 'quest-asset', 'vendor-asset',
    'conditions', 'rewards', 'rewards-list-asset', 'currency-asset',
  ])]),
  group('其他资源', pages('assets', [
    'airdrop-asset', 'animal-asset', 'character-mesh-replacement', 'crafting-asset',
    'crafting-blacklist-asset', 'effect-asset', 'foliage-asset', 'road-asset',
    'level-asset', 'mythical-asset', 'outfit-asset', 'physics-material-asset',
    'redirector-asset', 'resource-asset', 'server-browser-curation-asset',
    'spawn-asset', 'stereo-song-asset', 'tag-asset', 'weather-asset', 'zombie-difficulty-asset',
  ])),
  group('地图制作', [page('/mapping/'), ...pages('mapping', [
    'charts', 'curated-maps', 'editor-asset-redirectors', 'favorite-searches',
    'level-batching', 'level-config', 'manual-object-culling',
  ])]),
  group('服务器与开发', [page('/servers/'), ...pages('servers', [
    'server-hosting', 'steamcmd', 'server-hosting-rules', 'bookmark-host',
    'command-io', 'debugging-exceptions', 'dedicated-workshop-update-monitor',
    'fake-ip', 'game-server-login-tokens', 'glazier', 'openmod', 'port-forwarding',
    'rocket', 'server-auto-restart', 'server-browser-curation', 'server-codes',
    'server-configuration', 'server-update-notifications',
  ])]),
  group('数据类型', [
    page('/data/'), page('/data/built-in-types.html'),
    ...pages('data', ['asset-ptr', 'bitmask', 'color']),
    { ...page('/data/enum/'), collapsed: true, items: pages('data/enum', namesIn('data/enum')) },
    ...pages('data', ['flag', 'guid', 'master-bundle-ptr', 'rich-text']),
    { ...page('/data/struct/'), collapsed: true, items: pages('data/struct', namesIn('data/struct')) },
    page('/data/vector3.html'),
  ]),
  group('U3 SDK', [page('/u3-sdk/'), ...pages('u3-sdk', ['faq', 'unity-project', 'legacy-id-availability'])]),
  group('参与贡献', [page('/contributing/')]),
]

export default defineThemeConfig({
  logo: '/img/unturnedlogo.png',
  logoDark: '/img/unturnedlogo.png',
  navbar: [
    { text: '文档总览', link: '/docs/', icon: 'material-symbols:menu-book-outline' },
    { text: '物品类', link: '/items/', icon: 'material-symbols:inventory-2-outline' },
    { text: '资源与 Mod', link: '/assets/', icon: 'material-symbols:deployed-code-outline' },
    { text: '地图与 NPC', icon: 'material-symbols:map-outline', items: [
      { text: '地图制作', link: '/mapping/' },
      { text: 'NPC制作', link: '/npcs/' },
    ] },
    { text: '服务器', link: '/servers/', icon: 'material-symbols:dns-outline' },
    { text: '数据公开', icon: 'material-symbols:database-outline', items: [
      { text: '数据类型', link: '/data/' },
      { text: 'U3 SDK', link: '/u3-sdk/' },
    ] },
    { text: '中文社区', link: 'https://www.unbbs.net/', icon: 'mdi:forum-outline' },
  ],
  social: [{ icon: 'github', link: 'https://github.com/StarKano/Unturned-Docs-CN' }],
  navbarSocialInclude: ['github'],
  outline: [2, 4],
  prevPage: true,
  nextPage: true,
  createTime: false,
  footer: {
    message: '由未转变者中文社区（UNBBS）维护 · Unturned 非官方中文文档',
    copyright: 'UNBBS 未转变者中文社区',
  },
  sidebar: {
    '/docs/': docsSidebar,
    '/about/': docsSidebar,
    '/assets/': docsSidebar,
    '/items/': docsSidebar,
    '/mapping/': docsSidebar,
    '/npcs/': docsSidebar,
    '/servers/': docsSidebar,
    '/data/': docsSidebar,
    '/u3-sdk/': docsSidebar,
    '/contributing/': docsSidebar,
  },
  sidebarScrollbar: true,
})
