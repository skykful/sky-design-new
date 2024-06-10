import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { compression } from 'vite-plugin-compression2'

const ImageExt = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.git', '.ico']

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia']
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    compression({
      threshold: 2000, // 设置只有超过 2k 的文件才执行压缩
      deleteOriginalAssets: false, // 设置是否删除原文件
      skipIfLargerOrEqual: true // 如果压缩后的文件大小与原文件大小一致或者更大时，不进行压缩
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true,
    port: 9003
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        chunkFileNames: 'static/js/[name].[hash].js',
        entryFileNames: 'static/js/[name].[hash].js',
        assetFileNames: (assetInfo: any) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'static/css/[name].[hash].css'
          } else if (ImageExt.some((ext) => assetInfo.name.endsWith(ext))) {
            return 'static/imgs/[name].[hash].[ext]'
          } else {
            return 'static/assets/[name].[hash].[ext]'
          }
        }
      }
    }
  }
})
