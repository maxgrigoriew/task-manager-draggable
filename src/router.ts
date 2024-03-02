import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

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
    path: '/kanban',
    name: 'kanban',
    component: () => import('./pages/KanbanPage.vue'),
    meta: {
      layout: 'MainLayout',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
