<template>
  <v-app>
    <v-app-bar app color="primary" elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link to="/" style="text-decoration: none, color:black" center>
        <div class="logo_container pl-6 pr-6">
          <strong class="logo-G">GLORIA</strong>
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <div v-if="info.length > 0">
        <v-btn @click="signout"> SignOut </v-btn>
      </div>
      <div v-else>
        <router-link style="text-decoration: none" to="/signin">
          <v-btn> Signin </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" v-if="logined">
            {{ info[0].NAME }}
          </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <div v-if="AUTH == 3">
          <span> 회계 메뉴</span>
          <hr />
        </div>
        <!-- 회계 메뉴 -->
        <div v-if="AUTH == 3 || AUTH == 2">
          <v-list-item
            v-for="item in bookkeeper_list"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>

        <div v-if="AUTH == 3">
          <span> 교역자 메뉴</span>
          <hr />
        </div>

        <!-- 교역자 메뉴 -->
        <div v-if="AUTH == 3 || AUTH == 1">
          <v-list-item
            v-for="item in pastor_list"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>

        <div v-if="AUTH == 3">
          <span> 교회 메뉴</span>
          <hr />
        </div>

        <!-- 관리자 메뉴 -->
        <div v-if="AUTH == 3 || AUTH == 0">
          <v-list-item
            v-for="item in admin_list"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>

        <!-- <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>보고서</v-list-item-title>
          </template>

          <v-list-item
            v-for="report in reports"
            :key="report.title"
            link
            :to="report.to"
          >
            <v-list-item-icon>
              <v-icon>{{ report.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ report.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group> -->
      </v-list>
    </v-navigation-drawer>

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    AUTH: 3,
    drawer: false,
    bookkeeper_list: [
      {
        title: "헌금 등록 · 관리",
        icon: "mdi-view-dashboard",
        to: "/register/offering",
      },
      {
        title: "지출 등록 · 관리",
        icon: "mdi-view-dashboard",
        to: "/register/expenditure",
      },
    ],
    pastor_list: [
      { title: "심방 작성", icon: "mdi-image", to: "/register/invitation" },
    ],
    admin_list: [
      {
        title: "헌금 종류 추가",
        icon: "mdi-view-dashboard",
        to: "/manage/offeringType",
      },
      {
        title: "지출 항목 추가",
        icon: "mdi-view-dashboard",
        to: "/manage/expenditure",
      },
      { title: "성도 등록", icon: "mdi-image", to: "/manage/saint" },
      { title: "구역 추가", icon: "mdi-image", to: "/manage/region" },
      { title: "직책 추가", icon: "mdi-image", to: "/manage/position" },
      { title: "부서 추가", icon: "mdi-image", to: "/manage/team" },
    ],
    // reports: [
    //   { title: "주간보고서", icon: "mdi-help-box", to: "/report/weekly" },
    //   { title: "월간보고서", icon: "mdi-help-box", to: "/report/monthly" },
    //   { title: "분기보고서", icon: "mdi-help-box", to: "/report/quarter" },
    //   { title: "연간보고서", icon: "mdi-help-box", to: "/report/year" },
    // ],
  }),
  methods: {
    ...mapActions(["clearInfo"]),
    signout() {
      this.clearInfo();
    },
  },
  computed: {
    ...mapGetters({
      info: "getInfo",
      logined: "getLoginState",
    }),
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
}
.main {
  background-color: #f2f2f2;
}
v-btn {
  text-decoration-line: none;
}
</style>
