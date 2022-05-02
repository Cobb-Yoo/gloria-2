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
import { mapActions, mapGetters } from "vuex";
import router from "../../router/index";

export default {
  data() {
    return {
      id: null,
      pw: null,
    };
  },
  methods: {
    ...mapActions([
      "setInfo",
      "getSaintList",
      "getRegionList",
      "getPositionList",
      "getTeamList",
      "getOfferingTypeList",
      "setInfo",
    ]),
    check() {
      if (this.id != null && this.pw != null) {
        //alert(this.id + this.pw);
        axios
          .get("http://localhost:5000/signin", {
            params: {
              id: this.id,
              pw: this.pw,
            },
          })
          .then((res) => {
            if (!res.data.length) {
              alert("로그인 실패");
            } else {
              this.setInfo(res.data);

              this.getSaintList();
              this.getRegionList();
              this.getPositionList();
              this.getTeamList();
              this.getOfferingTypeList();

              router.push("/");
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
  computed: {
    ...mapGetters({
      info: "getInfo",
    }),
  },
};
</script>

<style scoped>
.vcard {
  margin-top: 15%;
  width: 400px;
}
</style>
