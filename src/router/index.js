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
    path: "/report/monthly",
    name: "Monthly",
    component: () => import("../views/report/Monthly.vue"),
  },
  {
    path: "/report/quarter",
    name: "Quarter",
    component: () => import("../views/report/Quarter.vue"),
  },
  {
    path: "/report/weekly",
    name: "Weekly",
    component: () => import("../views/report/Weekly.vue"),
  },
  {
    path: "/report/year",
    name: "Year",
    component: () => import("../views/report/Year.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
