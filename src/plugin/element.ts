import { createApp } from 'vue'
import { ElMessage,ElLoading,ElMessageBox,ElDrawer } from 'element-plus'
import App from '../App.vue'
const app = createApp(App)
app.use(ElMessage)
app.use(ElLoading)
app.use(ElMessageBox)
app.use(ElDrawer)


