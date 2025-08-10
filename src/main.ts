import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
}

const app = createApp(App)

app.use(router)

app.mount('#app')
