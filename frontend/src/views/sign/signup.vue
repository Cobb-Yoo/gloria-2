<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-card class="vcard">
          <v-row justify="center">
            <v-card-title class=""> login page</v-card-title>
          </v-row>

          <v-row justify="center">
            <v-col cols="8">
              <v-text-field label="아이디" v-model="type"></v-text-field>
              <v-text-field label="비밀번호" v-model="type"></v-text-field>
              <v-text-field label="비밀번호 확인" v-model="type"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <span class="ml-10 mb-5">→ 회원가입</span>
            <span class="ml-10 mb-5">→ 비밀번호 찾기</span>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped>
.vcard {
  margin-top: 15%;
  width: 400px;
}
</style>
