<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card class="vcard" elevation="12" align="center">
          <v-card-title> 개발중인 서비스입니다 </v-card-title>

          <v-card-subtitle align="left">
            최소 1920 * 1080 (FHD) 화질과 구글 크롬 환경을 사용하시기 바랍니다.
          </v-card-subtitle>

          <v-divider></v-divider>

          <br /><br /><br />

          <v-card-text class="v-card-text-warning">
            1인 개발자에 의해서 개발중인 사이트입니다.
          </v-card-text>
          <br />
          <v-card-text class="v-card-text-warning">
            오픈 이전에는 모든 기능을 무료로 사용할 수 있습니다. <br />

            하지만 입력하신 모든 데이터는 언제든지 삭제 될 수 있으며,<br />
            개발중에 발생한 데이터 유출과 삭제된 데이터에 대해서는 책임질 수
            없습니다. <br />
          </v-card-text>
          <br />
          <v-card-text class="v-card-text-warning">
            정식오픈 이후부터는 소정의 사용료가 발생할 예정입니다. <br />
          </v-card-text>

          <br /><br /><br />

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" outlined> 회원가입 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.vcard {
  margin-top: 100px;
  height: 550px;
  width: 750px;
  align-content: center;
}
.v-card-text-warning {
  font-size: 20px;
}
</style>
