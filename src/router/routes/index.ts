import outsideLayout from './outsideLayout';
import type { RouteRecordRaw } from 'vue-router';
// import basic from './basic';

export const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Layout',
  // redirect: '/',
  component: () => import('@/layout/index.vue'),
  meta: {
    title: '根路由',
  },
  children: [
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/about/about.vue'),
      meta: {
        title: "关于",
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/home.vue'),
      meta: {
        title: "主页",
      },
    },
    {
      path: '/index1',
      name: 'Index1',
      component: () => import('@/views/index1/index1.vue'),
    },
    {
      path: '/index2',
      name: 'Index2',
      component: () => import('@/views/index2/index2.vue'),
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/index/index.vue'),
      children: [

      ]
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      component: () => import('@/views/userCenter/userCenter.vue'),
    },
    {
      path: '/sysset',
      name: 'SysSet',
      component: () => import('@/views/sysSet/sysSet.vue'),
    }
  ],
};

export const basicRoutes: Array<RouteRecordRaw> = [
  rootRoute,
  // Layout之外的路由
  ...outsideLayout,
  // 基础路由
];
