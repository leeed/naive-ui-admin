import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RedirectRoute } from '@/router/base';
import { PageEnum } from '@/enums/pageEnum';
import { createRouterGuards } from './guards';
import type { IModuleType } from './types';

const modules = import.meta.glob<IModuleType>('./modules/**/*.ts', { eager: true });

const routeModuleList: RouteRecordRaw[] = Object.keys(modules).reduce((list, key) => {
  const mod = modules[key].default ?? {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  return [...list, ...modList];
}, []);

function sortRoute(a, b) {
  return (a.meta?.sort ?? 0) - (b.meta?.sort ?? 0);
}

routeModuleList.sort(sortRoute);

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: 'Login', // 登录 -> Login
  },
};

// Routes that require authentication
export const asyncRoutes = [...routeModuleList];

// Public routes (no authentication required)
export const constantRouter: RouteRecordRaw[] = [LoginRoute, RootRoute, RedirectRoute];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  // Create router guards
  createRouterGuards(router);
}

export default router;
