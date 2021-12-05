<template>
  <app> </app>
</template>

<script>
export default {
  name: "sideBar",
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-view-dashboard", to: "/" },
      { title: "헌금관리", icon: "mdi-image", to: "/about" },
      { title: "보고서", icon: "mdi-help-box" },
      { title: "교인관리", icon: "mdi-help-box" },
    ],
    right: null,
  }),
};
</script>
