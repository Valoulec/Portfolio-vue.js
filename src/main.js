import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


import router from '../src/router/index'
App.use(router)