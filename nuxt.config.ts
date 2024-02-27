import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        head: {
            meta: [

            ],
            htmlAttrs: {

            },
        },
    },
    css: [
        '~/assets/css/main.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@vueuse/nuxt',
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    typescript: {
        strict: false
    },
});
