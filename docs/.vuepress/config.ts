import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'UNBBS · Unturned 中文文档',
  description: '由未转变者中文社区（UNBBS）维护的 Unturned 非官方中文文档。',
  bundler: viteBundler(),
  theme: plumeTheme({
    hostname: 'https://docs.unbbs.net',

    docsRepo: 'https://github.com/StarKano/Unturned-Docs-CN',
    docsBranch: 'main',
    docsDir: 'docs',

    editLink: true,
    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
        forceLocale: true,
      },
    },
    contributors: true,
    changelog: true,

    search: {
      provider: 'local',
    },

    readingTime: {},

    markdown: {
      codeTree: true,
    },
  }),
})
