import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/manage/offering",
    name: "Offering",
    component: () => import("../views/manage/Offering.vue"),
  },
  {
    path: "/manage/member",
    name: "Member",
    component: () => import("../views/manage/Member.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
