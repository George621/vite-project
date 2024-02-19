import { createRouter, createWebHistory } from 'vue-router';
import { basicRoutes } from './routes';
import type { App } from 'vue';

export const router = createRouter({
  history: createWebHistory(''),
  routes: basicRoutes,
});

export async function setupRouter(app: App) {
  // 创建路由守卫
  // createRouterGuards(router, whiteNameList);

  app.use(router);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
}
 
export default router;
