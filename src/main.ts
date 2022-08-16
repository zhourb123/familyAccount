import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from "./router/index"
import "@/plugin/element"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
//全局注册element-plus的所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia()).use(router).mount('#app')
