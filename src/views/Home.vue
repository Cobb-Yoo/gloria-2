<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-btn @click="setMemberList({ name, offering })" />
        <v-card>
          <v-card-title> 테스트 </v-card-title>
        </v-card>

        <v-text-field label="이름" v-model="name"></v-text-field>
        <v-text-field label="금액" v-model="offering"></v-text-field>

        <thead>
          <tr>
            <td>id</td>
            <td>이름</td>
            <td>금액</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members.slice().reverse()" :key="member.id">
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.offering }}</td>
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
      name: "",
      offering: "",
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
