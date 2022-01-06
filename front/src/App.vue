<template>
  <v-app>
    <v-app-bar app color="primary" elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

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
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
    drawer: true,
    items: [
      { title: "수입 입력", icon: "mdi-view-dashboard", to: "/" },
      { title: "헌금 등록", icon: "mdi-image", to: "/manage/offering" },
      { title: "성도 등록", icon: "mdi-image", to: "/manage/saint" },
      {
        title: "지출 항목 등록",
        icon: "mdi-help-box",
        to: "/manage/expenditure",
      },
      { title: "기부금영수증", icon: "mdi-help-box" },
      { title: "주간보고서", icon: "mdi-help-box", to: "/report/weekly" },
      { title: "월간보고서", icon: "mdi-help-box", to: "/report/monthly" },
      { title: "분기보고서", icon: "mdi-help-box", to: "/report/quarter" },
      { title: "연간보고서", icon: "mdi-help-box", to: "/report/year" },
    ],
    right: null,
  }),
};
</script>
