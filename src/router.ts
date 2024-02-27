import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/MainPage.vue'),
    meta: {
      layout: 'MainLayout',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/AboutPage.vue'),
    meta: {
      layout: 'MainLayout',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
