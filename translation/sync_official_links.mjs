// Canonicalize footer links using each page's verified translation.source path.
// Usage: node translation/sync_official_links.mjs --write | --check
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const status = JSON.parse(readFileSync(resolve(root, 'translation/status.json'), 'utf8'))
const write = process.argv.includes('--write')
const check = process.argv.includes('--check')
if (write === check) throw new Error('Specify exactly one of --write or --check')

const errors = []
let changed = 0
for (const [source, meta] of Object.entries(status)) {
  const file = resolve(root, meta.target)
  const raw = readFileSync(file, 'utf8')
  const original = raw.replace(/\r\n?/g, '\n')
  const declared = original.match(/^  source:\s*(.+)$/m)?.[1]?.trim()
  if (declared !== source) {
    errors.push(`${meta.target}: translation.source is ${declared ?? 'missing'}, expected ${source}`)
    continue
  }
  const url = `https://docs.smartlydressedgames.com/en/stable/${source.replace(/\.rst$/, '.html')}`
  const footer = `> 上游原文：[Unturned 官方文档](${url})`
  const matches = [...original.matchAll(/^> .*?(?:上游原文|官方原文).*$/gm)]
  if (matches.length > 1) {
    errors.push(`${meta.target}: multiple source footers`)
    continue
  }
  const updated = matches.length === 1
    ? original.replace(/^> .*?(?:上游原文|官方原文).*$/m, footer)
    : `${original.trimEnd()}\n\n${footer}\n`
  if (updated !== original) {
    changed++
    if (check) errors.push(`${meta.target}: official source footer differs`)
  }
  if (write && raw !== updated) writeFileSync(file, updated)
}

if (errors.length) {
  for (const error of errors) console.error(error)
  process.exitCode = 1
} else {
  console.log(`${Object.keys(status).length} 篇官方原文链接一致；本次修改 ${changed} 篇。`)
}
