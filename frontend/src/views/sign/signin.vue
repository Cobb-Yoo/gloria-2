<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-card elevation="8" rounded class="vcard">
          <v-row justify="center">
            <v-card-title class=""> Login Page</v-card-title>
          </v-row>

          <v-row justify="center">
            <v-col cols="8">
              <v-text-field
                filled
                rounded
                label="ID"
                v-model="id"
              ></v-text-field>
              <v-text-field
                filled
                rounded
                label="PASSWORD"
                v-model="pw"
                :type="'password'"
                @keyup.enter="check()"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <span class="mr-4 mb-5" @click="goto('/signup')">Sign Up</span>
            <span class="mr-4 mb-5">|</span>
            <span class="mb-5"> Password </span>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: null,
      pw: null,
    };
  },
  methods: {
    check() {
      if (this.id != null && this.pw != null) {
        alert(this.id + this.pw);
        axios
          .post("http://localhost:5000/signin", {
            id: this.id,
            pw: this.pw,
          })
          .then((res) => {
            if (!res.data.length) {
              alert("로그인 실패");
            } else {
              alert("로그인 성공");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("하나 없어용");
      }
    },
    goto(targetName) {
      this.$router.push(targetName);
    },
  },
};
</script>

<style scoped>
.vcard {
  margin-top: 15%;
  width: 400px;
}
</style>
