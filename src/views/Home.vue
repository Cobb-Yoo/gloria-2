<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="setMemberList({ name })" />
        <v-card>
          <v-card-title> 테스트 </v-card-title>
          <v-card-text v-for="i in members" :v-model="i" :key="i"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      //data: null,
    };
  },
  methods: {
    ...mapActions["setMemberList"],
  },
  computed: {
    ...mapGetters[{ members: "getMemberList" }],
  },
  components: {},
};
</script>
