import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/MainLayout.vue'),
    redirect: 'main-content',
    children: [
      {
        path: '/main-content',
        name: 'main-content',
        meta: {
          title: 'main-content',
          requireAuth: false,
        },
        component: () =>
          import(
            /* webpackChunkName: "MainContent" */ '@/views/home/MainContent.vue'
          ),
      },
    ],
  },
  {
    path: '*',
    name: '404Page',
    component: () => import('@/views/error-page/404.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
