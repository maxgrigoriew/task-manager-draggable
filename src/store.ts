import MainPage from '@/pages/MainPage.vue';

const routes = [{ path: '/', component: MainPage }];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
