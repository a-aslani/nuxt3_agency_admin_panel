import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
// import {md3} from 'vuetify/blueprints'
import colors from 'vuetify/util/colors'


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // blueprint: md3,
        ssr: true,
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: "#4285F4",
                        background: colors.grey.lighten4,
                        // surface: string;
                        // secondary: string;
                        success: '#3cd1c2',
                        info: '#ffaa2c',
                        error: '#f83e70'
                    }
                },
            },
        },
    })
    app.vueApp.use(vuetify)
})
