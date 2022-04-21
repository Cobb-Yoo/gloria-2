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
          v-model="name"
          @keyup.enter="check()"
        ></v-text-field>

        <v-text-field
          id="직책"
          label="직책"
          v-model="position"
          @keyup.enter="check()"
        ></v-text-field>

        <v-text-field
          label="구역"
          v-model="region"
          @keyup.enter="check()"
        ></v-text-field>

        <v-text-field
          label="나이"
          v-model="age"
          @keyup.enter="check()"
        ></v-text-field>

        <v-radio-group v-model="gender" row>
          <v-radio label="남자" value="0"></v-radio>
          <v-radio label="여자" value="1"></v-radio>
        </v-radio-group>

        <v-btn @click="check()"> 추가하기 </v-btn>

        <table>
          <thead>
            <tr>
              <td>이름</td>
              <td>직책</td>
              <td>구역</td>
              <td>나이</td>
              <td>성별</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="saint in saintList" :key="saint.id">
              <td>{{ saint.name }}</td>
              <td>{{ saint.position }}</td>
              <td>{{ saint.region }}</td>
              <td>{{ saint.age }}</td>
              <td>{{ saint.gender }}</td>
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
      name: null,
      position: null,
      region: null,
      age: null,
      gender: null,
    };
  },
  methods: {
    ...mapActions(["setSaint", "getSaint"]),
    check() {
      const data = {
        name: this.name,
        gender: this.gender,
        position: this.position,
        region: this.region,
        age: this.age,
      };

      console.log(data);

      this.setSaint(data);

      this.clear();
    },
    clear() {
      (this.name = ""),
        (this.gender = ""),
        (this.position = ""),
        (this.region = ""),
        (this.age = "");
    },
  },
  computed: {
    ...mapGetters({ saintList: "getSaint" }),
  },
  created: {},
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
