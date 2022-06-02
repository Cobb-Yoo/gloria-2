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
    path: "/register/offering",
    name: "register_Offering",
    component: () => import("../views/register/Offering.vue"),
  },
  {
    path: "/register/expenditure",
    name: "register_Expenditure",
    component: () => import("../views/register/Expenditure.vue"),
  },
  {
    path: "/manage/offeringType",
    name: "manage_OfferingType",
    component: () => import("../views/manage/OfferingType.vue"),
  },
  {
    path: "/manage/expenditure",
    name: "manage_Expenditure",
    component: () => import("../views/manage/Expenditure.vue"),
  },
  {
    path: "/manage/saint",
    name: "manage_Saint",
    component: () => import("../views/manage/Saint.vue"),
  },
  {
    path: "/manage/region",
    name: "manage_Region",
    component: () => import("../views/manage/Region.vue"),
  },
  {
    path: "/manage/position",
    name: "manage_Position",
    component: () => import("../views/manage/Position.vue"),
  },
  {
    path: "/manage/team",
    name: "manage_Team",
    component: () => import("../views/manage/Team.vue"),
  },
  {
    path: "/register/invitation",
    name: "Invitation",
    component: () => import("../views/register/Invitation.vue"),
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
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/sign/signin.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/sign/signup.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/sign/setting.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
