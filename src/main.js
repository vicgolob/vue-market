import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  iconSet: quasarIconSet
})

app.mount('#app')
