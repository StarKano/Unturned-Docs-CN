// Verify that every translated page points to the matching official stable page.
// Usage: node translation/verify_official_sources.mjs [upstream-checkout]
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const project = resolve(import.meta.dirname, '..')
const upstream = process.argv[2] ? resolve(process.argv[2]) : null
const status = JSON.parse(readFileSync(resolve(project, 'translation/status.json'), 'utf8'))
const base = 'https://docs.smartlydressedgames.com/en/stable/'
const entries = Object.entries(status)
const results = []
let next = 0

function normalized(text) {
  return text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').trimEnd()
}

async function get(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(20000) })
      if (response.ok && new URL(response.url).hostname === 'docs.smartlydressedgames.com') {
        return { status: response.status, text: await response.text(), finalUrl: response.url }
      }
      if (response.status < 500 && response.status !== 429) return { status: response.status, text: '' }
    } catch (error) {
      if (attempt === 2) return { status: 0, text: String(error) }
    }
    await new Promise(resolve => setTimeout(resolve, 500 * (attempt + 1)))
  }
  return { status: 0, text: 'request failed' }
}

async function worker() {
  while (next < entries.length) {
    const [source, meta] = entries[next++]
    const htmlUrl = base + source.replace(/\.rst$/, '.html')
    const rstUrl = base + '_sources/' + source + '.txt'
    const [page, original] = await Promise.all([get(htmlUrl), get(rstUrl)])
    const local = readFileSync(resolve(project, meta.target), 'utf8')
    const declared = local.match(/^  source:\s*(.+)$/m)?.[1]?.trim()
    const sourceMatch = upstream
      ? normalized(original.text) === normalized(readFileSync(resolve(upstream, source), 'utf8'))
      : null
    results.push({ source, target: meta.target, htmlUrl, rstUrl,
      htmlStatus: page.status, sourceStatus: original.status,
      metadataMatches: declared === source, sourceMatchesPinnedCheckout: sourceMatch })
  }
}

await Promise.all(Array.from({ length: 8 }, worker))
results.sort((a, b) => a.source.localeCompare(b.source))
const problems = results.filter(row => row.htmlStatus !== 200 || row.sourceStatus !== 200 ||
  !row.metadataMatches || row.sourceMatchesPinnedCheckout === false)
console.log(`检查 ${results.length} 页：官方页面 ${results.filter(x => x.htmlStatus === 200).length}，官方 RST ${results.filter(x => x.sourceStatus === 200).length}，元数据匹配 ${results.filter(x => x.metadataMatches).length}`)
if (upstream) console.log(`与本地上游检出内容相同：${results.filter(x => x.sourceMatchesPinnedCheckout).length}`)
for (const row of problems) console.error(JSON.stringify(row))
if (problems.length) process.exitCode = 1
