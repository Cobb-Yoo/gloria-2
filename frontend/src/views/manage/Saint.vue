<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 성도 등록 </v-card-title>
          <v-card-subtitle>
            여기에 있는 성도에 대해서만 헌금입력이 가능합니다
          </v-card-subtitle>
        </v-card>

        <v-text-field
          label="이름"
          v-model="saintName"
          @keyup.enter="check()"
        ></v-text-field>

        <v-btn @click="check()"> 추가하기 </v-btn>

        <table>
          <thead>
            <tr>
              <td>이름</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="saint in saintList" :key="saint.id">
              <td>{{ saint.name }}</td>

              <td>
                <v-btn @click="editting(saint.id)"> 수정 </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      saintName: null,
    };
  },
  methods: {
    ...mapActions(["setSaintList"]),
    check() {
      this.setSaintList(this.saintName);
      this.saintName = "";
    },
  },
  computed: {
    ...mapGetters({ saintList: "getSaintList" }),
  },
};
</script>

<style scoped>
table {
  border: 1px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 100px;
  padding: 10px 20px;
}

body {
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
