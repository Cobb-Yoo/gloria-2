<template>
  <v-app>
    <v-app-bar app color="primary" elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>등록</v-list-item-title>
          </template>

          <v-list-item
            v-for="register in registers"
            :key="register.title"
            link
            @click.stop="drawer = !drawer"
            :to="register.to"
          >
            <v-list-item-icon>
              <v-icon>{{ register.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ register.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>관리</v-list-item-title>
          </template>

          <v-list-item
            v-for="mamage in mamages"
            :key="mamage.title"
            link
            @click.stop="drawer = !drawer"
            :to="mamage.to"
          >
            <v-list-item-icon>
              <v-icon>{{ mamage.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ mamage.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>보고서</v-list-item-title>
          </template>

          <v-list-item
            v-for="report in reports"
            :key="report.title"
            link
            @click.stop="drawer = !drawer"
            :to="report.to"
          >
            <v-list-item-icon>
              <v-icon>{{ report.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ report.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,

    registers: [
      {
        title: "헌금 등록",
        icon: "mdi-view-dashboard",
        to: "/register/offering",
      },
      {
        title: "지출 등록",
        icon: "mdi-view-dashboard",
        to: "/register/expenditure",
      },
    ],
    mamages: [
      {
        title: "헌금 항목 관리",
        icon: "mdi-view-dashboard",
        to: "/manage/offering",
      },
      {
        title: "지출 항목 관리",
        icon: "mdi-view-dashboard",
        to: "/manage/expenditure",
      },
      { title: "성도 등록", icon: "mdi-image", to: "/manage/saint" },
      { title: "구역 등록", icon: "mdi-image", to: "/manage/region" },
      { title: "직책 등록", icon: "mdi-image", to: "/manage/position" },
      { title: "부서 등록", icon: "mdi-image", to: "/manage/team" },
    ],
    reports: [
      { title: "주간보고서", icon: "mdi-help-box", to: "/report/weekly" },
      { title: "월간보고서", icon: "mdi-help-box", to: "/report/monthly" },
      { title: "분기보고서", icon: "mdi-help-box", to: "/report/quarter" },
      { title: "연간보고서", icon: "mdi-help-box", to: "/report/year" },
    ],
    right: null,
  }),
};
</script>

<style>
body {
  overflow: hidden;
}
</style>
