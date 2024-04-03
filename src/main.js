import { createApp } from 'vue'
import App from './App.vue'
import 'es6-promise/auto';

const app = createApp(App)

//router
import router from './router'
app.use(router)

//ElementPlus
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')




