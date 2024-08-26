import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

// 樣式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/index.scss';
import 'virtual:uno.css';
import 'uno.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
