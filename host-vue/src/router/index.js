import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Dashboard.vue"),
  },
  {
    path: "/remote-vue",
    name: "RemoteVue",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RemoteVue.vue"),
  },
  {
    path: "/remote-react",
    name: "RemoteReact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RemoteReact.vue"),
  },
  {
    path: "/login",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
