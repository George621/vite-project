import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import {visualizer} from "rollup-plugin-visualizer"
const BUILD_DIR = 'dist'
// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),  // 项目根目录index.html 所在位置
  base: '/',  // 开发或者生产环境服务公共基础路径配，置引入相对路径
  plugins: [
    vue(),
    visualizer({
      open: true
    })
  ],
  build: {
    outDir: BUILD_DIR,     // 指定打包文件的目录
    emptyOutDir: true,  // 打包时先清空上一次构建的目录
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id: any) {
          if (id.includes('node_modules')) { // node_modules依赖文件打包成vendor
            return 'vendor'
            // return id.toString().split("node_modules/")[1].split("/")[0].toString()
          }
        },
        // 入口文件，就是indexhtml 引入的文件名字
        entryFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        // assetFileNames: '[ext]/[name].[hash].[ext]',
        assetFileNames: (assetInfo) => {
          if (assetInfo.type === 'asset' && /\.(jpe?g|png|gif|svg)$/i.test(assetInfo.name)) {
            return 'img/[name].[hash][ext]';
          }   if (assetInfo.type === 'asset' && /\.(ttf|woff|woff2|eot)$/i.test(assetInfo.name)) {
            return 'fonts/[name].[hash][ext]';
          } 
          return '[ext]/[name].[hash].[ext]';
        },
        // 分包的js 也打入js文件夹下
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
          return `js/${fileName}/[name].[hash].js`;
        },
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss:{
        additionalData: '@import "@/assets/scss/globalVar.scss";@import "@/assets/scss/globalMixins.scss";'
      }
    }
  },
  server:{
    host: '127.0.0.1',
    port: 9091,
    strictPort: true,
    open: true,
    // proxy:{
    //   '/api':{
    //     target: '',
    //     changeOrigin: true,
    //   }
    // }
  }
})
