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
                @keyup.enter="check()"
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
            <span class="mr-4 mb-5" @click="dialog = true"> Password </span>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <Dialog :dialog="dialog" @change="dialogChagne" />
  </v-container>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import router from "../../router/index";
import Dialog from "../../components/dialogs/developing.vue";

export default {
  data() {
    return {
      id: null,
      pw: null,
      dialog: false,
    };
  },
  methods: {
    test() {
      this.id = "yhj0105";
      this.pw = "dlapdlf@2";
    },
    ...mapActions([
      "setInfo",
      "getSaintList",
      "getRegionList",
      "getPositionList",
      "getTeamList",
      "getOfferCateList",
      "setInfo",
      "getOfferData",
      "getExpenCateList",
      "getExpenDataList",
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

              this.getSaintList(res.data[0].TAB_ID);
              this.getRegionList(res.data[0].TAB_ID);
              this.getPositionList(res.data[0].TAB_ID);
              this.getTeamList(res.data[0].TAB_ID);
              this.getOfferCateList(res.data[0].TAB_ID);
              this.getOfferData(res.data[0].TAB_ID);
              this.getExpenCateList(res.data[0].TAB_ID);
              this.getExpenDataList(res.data[0].TAB_ID);

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
    dialogChagne() {
      this.dialog = false;
    },
  },
  computed: {
    ...mapGetters({
      info: "getInfo",
    }),
  },
  components: {
    Dialog,
  },
  created() {
    this.test();
  },
};
</script>

<style scoped>
.vcard {
  margin-top: 15%;
  width: 400px;
}
</style>
