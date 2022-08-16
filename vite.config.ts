import { defineConfig } from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig({
  base:'./',//公共基础路径
  resolve:{
    //路径的别名
    alias:{
      '@': resolve(__dirname, 'src'),
      component: resolve(__dirname,'src/components'),
      view: resolve(__dirname,'src/views'),
      asset: resolve(__dirname,'src/assets')//在html中引用的时候一定要加~ 否则会被认为是相对路径 
    }
  },
  plugins: [
    vue(),
    AutoImport({
      //自动导入api
      imports: ["vue", "vue-router",'pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({
      mockPath: 'src/mock',
      watchFiles: true, // 监视文件更改
    })
  ],
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: '/api/private',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
     }
  }
})
