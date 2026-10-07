import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Unturned 中文文档',
  description: '由社区维护的 Unturned 非官方中文文档。',
  bundler: viteBundler(),
  theme: plumeTheme({
    hostname: 'https://docs.unbbs.net',
  }),
})
