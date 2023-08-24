import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "HighOrder 高阶开发",
    description: "HighOrder",
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    themeConfig: {
    },
    vite: {
        ssr: {
            noExternal: ["primevue"]
        }
    }
})
