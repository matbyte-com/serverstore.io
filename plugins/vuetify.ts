import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        ssr: true,
        theme: {
            defaultTheme: 'dark',
        },
    })
    app.vueApp.use(vuetify)
})
