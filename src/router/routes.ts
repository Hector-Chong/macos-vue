import { AppRouteRecordRaw } from './types';

const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'Bootstrap',
    meta: {},
    component: () => import('@/views/bootstrap/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {},
    component: import('@/views/login/index.vue'),
  },
  {
    path: '/desktop',
    name: 'desktop',
    meta: {},
    component: () => import('@/views/desktop/index.vue'),
  },
];

export default routes;
