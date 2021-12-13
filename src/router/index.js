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
    path: "/manage/saint",
    name: "Saint",
    component: () => import("../views/manage/Saint.vue"),
  },
  {
    path: "/manage/expenditure",
    name: "Saint",
    component: () => import("../views/manage/Expenditure.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
