<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="setMemberList({ data })" />
        <v-card>
          <v-card-title> 테스트 </v-card-title>
          <div
            v-for="member in members"
            :key="member.id"
            :v-model="member.name"
          ></div>
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
      data: "이름",
    };
  },
  methods: {
    ...mapActions(["setMemberList"]),
  },
  computed: {
    ...mapGetters({ members: "getMemberList" }),
  },
  components: {},
};
</script>
