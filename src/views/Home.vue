<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="setMemberList({ data })" />
        <v-card>
          <v-card-title> 테스트 </v-card-title>
        </v-card>

        <thead>
          <tr>
            <th>id</th>
            <th>이름</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="member in members.slice().reverse()" :key="member.id">
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
          </tr>
        </tbody>
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
