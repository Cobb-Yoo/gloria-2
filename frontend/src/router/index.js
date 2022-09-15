import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Gloria",
    },
  },
  {
    path: "/register/offerData",
    name: "register_OfferData",
    component: () => import("../views/register/OfferData.vue"),
    meta: {
      title: "Gloria - 헌금",
    },
  },
  {
    path: "/register/expenditure",
    name: "register_Expenditure",
    component: () => import("../views/register/Expenditure.vue"),
    meta: {
      title: "Gloria - 지출",
    },
  },
  {
    path: "/manage/offerCate",
    name: "manage_offerCate",
    component: () => import("../views/manage/OfferCate.vue"),
    meta: {
      title: "Gloria - 헌금",
    },
  },
  {
    path: "/manage/expenditure",
    name: "manage_Expenditure",
    component: () => import("../views/manage/Expenditure.vue"),
    meta: {
      title: "Gloria - 지출",
    },
  },
  {
    path: "/manage/saint",
    name: "manage_Saint",
    component: () => import("../views/manage/Saint.vue"),
    meta: {
      title: "Gloria - 성도",
    },
  },
  {
    path: "/manage/region",
    name: "manage_Region",
    component: () => import("../views/manage/Region.vue"),
    meta: {
      title: "Gloria - 구역",
    },
  },
  {
    path: "/manage/position",
    name: "manage_Position",
    component: () => import("../views/manage/Position.vue"),
    meta: {
      title: "Gloria - 직책",
    },
  },
  {
    path: "/manage/team",
    name: "manage_Team",
    component: () => import("../views/manage/Team.vue"),
    meta: {
      title: "Gloria - 부서",
    },
  },
  {
    path: "/manage/family",
    name: "manage_Team",
    component: () => import("../views/manage/Family.vue"),
    meta: {
      title: "Gloria - 가족 관계 관리",
    },
  },
  {
    path: "/register/invitation",
    name: "Invitation",
    component: () => import("../views/register/Invitation.vue"),
    meta: {
      title: "Gloria - 심방",
    },
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
    meta: {
      title: "Gloria - 로그인",
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/sign/signup.vue"),
    meta: {
      title: "Gloria - 회원가입",
    },
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/sign/setting.vue"),
    meta: {
      title: "Gloria - 설정",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta != undefined) {
    document.title = to.meta.title;
  } else {
    document.title = from.name;
  }

  return next();
});

export default router;
