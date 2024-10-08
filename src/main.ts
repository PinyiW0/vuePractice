import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

// 樣式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/index.scss';
import 'virtual:uno.css';
import 'uno.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus);
app.use(router);
app.mount('#app');
