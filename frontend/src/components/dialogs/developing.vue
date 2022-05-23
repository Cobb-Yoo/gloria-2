<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 red lighten-2">
          비밀번호를 찾을 수 없습니다
        </v-card-title>

        <v-card-text>
          <br />
          비밀번호 찾기 기능은 개발중에 있습니다.
          <br />
          비밀번호는 암호화 되어 저장되기 때문에 개발자도 알 수 없습니다
          <br />
          서비스를 이용하고 싶은 분은 다시 회원가입을 진행해주시기 바랍니다.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogChange"> 확인 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  methods: {
    dialogChange() {
      this.dialog = false;
      this.$emit("change");
    },
  },
  props: {
    dialog: Boolean,
  },
};
</script>

<style></style>
