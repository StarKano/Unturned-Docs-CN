// node scripts/sync-doc-catalog.mjs         Update the catalog and link labels.
// node scripts/sync-doc-catalog.mjs --check Verify them without writing files.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative, resolve, sep } from 'node:path'
import theme from '../docs/.vuepress/plume.config.ts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const docs = join(root, 'docs')
const catalog = join(docs, 'docs', 'README.md')
const checkOnly = process.argv.includes('--check')
const sidebar = theme.sidebar['/docs/']

function entries(items, depth = 0) {
  return items.flatMap(item => {
    const lines = []
    if (item.link) lines.push(`${'  '.repeat(depth)}- [${item.text}](${item.link})`)
    if (item.items) lines.push(...entries(item.items, depth + (item.link ? 1 : 0)))
    return lines
  })
}

const generated = [
  '---',
  'title: 文档总览',
  '---',
  '',
  '# 文档总览',
  '',
  '以下目录与左侧文档树保持一致。展开分类即可找到全部页面。',
  '',
  ...sidebar.flatMap(group => [`## ${group.text}`, '', ...entries(group.items), '']),
].join('\n')

function routeFile(route) {
  return join(docs, route.endsWith('/')
    ? `${route.slice(1)}README.md`
    : route.slice(1).replace(/\.html$/, '.md'))
}

function titleFor(route) {
  const source = readFileSync(routeFile(route), 'utf8')
  return source.match(/^title:\s*(.+)$/m)?.[1]?.trim()
    ?? source.match(/^#\s+(.+)$/m)?.[1]?.trim()
}

const errors = []

function chapterReadmes(folder = docs) {
  return readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    if (!entry.isDirectory() || entry.name.startsWith('.') || (folder === docs && entry.name === 'docs')) return []
    const child = join(folder, entry.name)
    const nested = chapterReadmes(child)
    const section = relative(docs, child).split(sep).join('/')
    return [section, ...nested]
  })
}

const sections = chapterReadmes().filter(section => {
  try { readFileSync(join(docs, section, 'README.md')); return true } catch { return false }
})

function pagesBelow(folder, section, isRoot = true) {
  return readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    if (entry.isDirectory()) return pagesBelow(join(folder, entry.name), `${section}/${entry.name}`, false)
    if (!entry.name.endsWith('.md')) return []
    if (entry.name === 'README.md') return isRoot ? [] : [`/${section}/`]
    return [`/${section}/${entry.name.slice(0, -3)}.html`]
  })
}

for (const section of sections) {
  const folder = join(docs, section)
  const path = join(folder, 'README.md')
  const original = readFileSync(path, 'utf8')
  const links = [...original.matchAll(/\[([^\]]+)\]\((\/[^)]+)\)/g)]
  const routes = links.map(match => match[2])
  const expectedRoutes = pagesBelow(folder, section)
  for (const route of expectedRoutes) {
    if (!routes.includes(route)) errors.push(`${section}/README.md 缺少 ${route}`)
  }
  for (const route of routes) {
    if (!expectedRoutes.includes(route)) errors.push(`${section}/README.md 多出 ${route}`)
  }
  for (const [route, count] of Object.entries(Object.groupBy(routes, route => route))) {
    if (count.length > 1) errors.push(`${section}/README.md 重复 ${route}`)
  }
  const updated = original.replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, (match, label, route) => {
    const title = titleFor(route)
    if (!title) {
      errors.push(`${section}/README.md 的 ${route} 没有页面标题`)
      return match
    }
    return `[${title}](${route})`
  })
  if (updated !== original) {
    if (checkOnly) errors.push(`${section}/README.md 的链接文字与页面标题不一致`)
    else writeFileSync(path, updated)
  }
}

const originalCatalog = readFileSync(catalog, 'utf8')
if (originalCatalog !== generated) {
  if (checkOnly) errors.push('docs/docs/README.md 与侧栏目录不一致')
  else writeFileSync(catalog, generated)
}

const catalogRoutes = [...generated.matchAll(/\]\((\/[^)]+)\)/g)].map(match => match[1])
const sidebarRoutes = []
function collect(items) {
  for (const item of items) {
    if (item.link) sidebarRoutes.push(item.link)
    if (item.items) collect(item.items)
  }
}
collect(sidebar)
if (catalogRoutes.length !== sidebarRoutes.length ||
  catalogRoutes.some((route, index) => route !== sidebarRoutes[index])) {
  errors.push('总览目录顺序与侧栏不一致')
}
function allDocumentRoutes(folder = docs) {
  return readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.') || (folder === docs && entry.name === 'docs')) return []
      return allDocumentRoutes(join(folder, entry.name))
    }
    if (!entry.name.endsWith('.md') || folder === docs) return []
    const section = relative(docs, folder).split(sep).join('/')
    return [entry.name === 'README.md'
      ? `/${section}/`
      : `/${section}/${entry.name.slice(0, -3)}.html`]
  })
}
const documentRoutes = allDocumentRoutes()
for (const route of documentRoutes) {
  if (!sidebarRoutes.includes(route)) errors.push(`正文未加入侧栏：${route}`)
}
for (const route of sidebarRoutes) {
  if (!documentRoutes.includes(route)) errors.push(`侧栏链接不在文档目录中：${route}`)
}
for (const route of sidebarRoutes) {
  try { readFileSync(routeFile(route)) } catch { errors.push(`侧栏链接无页面：${route}`) }
}

if (errors.length) {
  for (const error of errors) process.stderr.write(`${error}\n`)
  process.exitCode = 1
} else {
  process.stdout.write(`已核对 ${sidebarRoutes.length} 个侧栏链接与 ${sections.length} 个章节目录。\n`)
}
