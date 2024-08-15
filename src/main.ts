import { createApp } from 'vue'
import App from './App.vue'
// 樣式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import 'virtual:uno.css'
import 'uno.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')