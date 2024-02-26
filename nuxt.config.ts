// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        head: {
            meta: [

            ],
            htmlAttrs: {
                class: 'nuxt-ui-scrollbars',
                lang: 'en',
            },
        },
    },
    css: [
        '~/assets/css/main.css',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        viewer: true,
    },
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxt/ui',
        '@vueuse/nuxt',
    ],
    ui: {
        global: true,
        icons: ['mdi', 'heroicons']
    },
    typescript: {
        strict: false
    },
});
