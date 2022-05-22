<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-card class="vcard">
          <v-row justify="center">
            <v-card-title class=""> 회원가입 </v-card-title>

            <v-card-text>
              교회 아이디로 가입합니다. <br />
              가입된 교회 계정으로 사용자 등록을 할 수 있습니다.
            </v-card-text>
          </v-row>

          <v-row justify="center">
            <v-col cols="8">
              <v-text-field
                label="아이디"
                v-model="id"
                filled
                rounded
              ></v-text-field>

              <v-text-field
                label="비밀번호"
                v-model="pw"
                hint="특수문자, 숫자, 영어 조합 10글자 사용"
                persistent-hint
                filled
                type="password"
                :rules="pw_rule"
                rounded
              ></v-text-field>
              <v-text-field
                label="비밀번호 확인"
                v-model="check_pw"
                filled
                rounded
                type="password"
                :rules="[check_pw === pw || '비밀번호가 동일하지 않습니다.']"
              ></v-text-field>

              <v-text-field
                label="교회 이름"
                v-model="name"
                filled
                rounded
              ></v-text-field>

              <v-text-field
                label="주소"
                v-model="loc"
                filled
                rounded
              ></v-text-field>

              <v-text-field
                filled
                rounded
                label="이메일"
                v-model="email"
                :rules="email_rule"
                hint="비밀번호를 찾을 때 사용됩니다."
                persistent-hint
              ></v-text-field>

              <v-btn
                color="deep-purple lighten-2"
                outlined
                class="ma-2"
                @click="signin()"
              >
                회원가입
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import router from "../../router/index";
import crypto from "crypto";

export default {
  data() {
    return {
      name: null,
      name_rule: [(v) => !!v || "교회 이름은 필수항목입니다."],

      email: null,
      email_rule: [
        (v) => !!v || "이메일은 필수항목입니다.",
        (v) => /.+@.+\..+/.test(v) || "이메일이 올바르지 않습니다.",
      ],

      loc: null,
      loc_rule: [(v) => !!v || "주소는 필수항목입니다."],

      id: null,

      pw: null,
      pw_rule: [
        (v) => !!v || "비밀번호는 필수항목입니다.",
        (v) => (v && v.length >= 0) || "비밀번호는 10자 이상으로 적어주세요.",
      ],
      check_pw: null,
    };
  },
  methods: {
    ...mapActions(["setInfo"]),
    signin() {
      const crpytoPW = crypto
        .createHash("sha512")
        .update(this.pw)
        .digest("base64");

      axios
        .post("http://localhost:5000/signup", {
          id: this.id,
          pw: crpytoPW,
          name: this.name,
          loc: this.loc,
          email: this.email,
        })
        .then((res) => {
          this.setInfo(res.data);
          alert("회원가입에 성공하셨습니다.");
          router.push("/setting");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.vcard {
  margin-top: 5%;
  width: 400px;
}
</style>
