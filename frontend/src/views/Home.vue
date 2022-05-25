<template>
  <v-container>
    <v-row style="height: 800px" align="center">
      <v-col align="center">
        <v-card class="vcard" elevation="12" align="center">
          <v-card-title> 개발중인 서비스입니다 </v-card-title>

          <v-card-subtitle align="left">
            최소 1920 * 1080 (FHD) 화질과 구글 크롬 환경을 사용하시기 바랍니다.
          </v-card-subtitle>

          <v-divider class="ma-4"></v-divider>

          <v-card-text>
            <v-row align="center" class="mx-0 cardText" style="height: 400px">
              오픈 이전에는 모든 기능을 무료로 사용할 수 있습니다. <br />
              <br />
              하지만 입력하신 모든 데이터는 언제든지 삭제 될 수 있으며,<br />
              개발중에 발생한 데이터 유출과 삭제된 데이터에 대해서는 책임질 수
              없습니다.
              <br />
              <br />
              정식오픈 이후부터는 소정의 사용료가 발생할 예정입니다.
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions v-if="info.length < 1">
            <router-link style="text-decoration: none" to="/signup">
              <v-btn color="deep-purple lighten-2" outlined class="ma-2">
                회원가입
              </v-btn>
            </router-link>

            <router-link style="text-decoration: none" to="/signin">
              <v-btn color="deep-purple lighten-2" outlined class="ma-2">
                로그인
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {},
  computed: {
    ...mapGetters({ info: "getInfo" }),
  },
};
</script>

<style scoped>
.vcard {
  width: 1000px;
  height: 600px;
}
.cardText {
  font-size: 1.25rem;
  font-weight: 300;
  text-align: left;
  text-justify: inter-character;
}
</style>
