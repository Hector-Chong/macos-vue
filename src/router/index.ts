import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import routes from "./routes";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { setTitle } from "@/utils";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export const setupRouter = (app: App) => app.use(router);

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to) => {
  NProgress.done();
  setTitle(to.meta.title as string);
});
