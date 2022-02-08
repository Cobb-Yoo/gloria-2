<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 직책 등록 하기 </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
        </v-card>

        <v-text-field label="직책 이름" v-model="position_name"></v-text-field>

        <v-btn @click="addExpenRoot()"> 추가하기 </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      position_name: null,
    };
  },
};
</script>
