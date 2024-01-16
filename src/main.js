import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
  })
createApp(App).use(router).mount('#app')