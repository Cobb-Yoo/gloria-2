<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> </v-card-title>
          <v-card-text>
            처음 가입을 하게 되면 부서, 직책, 구역, 지출항목, 헌금항목 등을
            입력하셔야 합니다.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-btn @click="test()"> hello </v-btn>
      <v-btn @click="test2()"> world </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    test() {
      console.log("hello");
      axios
        .get("http://localhost:5000/")
        .then((res) => {
          console.log("hello2");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    test2() {
      console.log("hello");
      axios
        .post("http://localhost:5000/")
        .then((res) => {
          console.log("hello3");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
