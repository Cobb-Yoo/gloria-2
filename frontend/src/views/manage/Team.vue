<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 부서 등록 하기 </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
        </v-card>

        <v-text-field label="부서 이름" v-model="team_name"></v-text-field>

        <v-btn @click="addExpenRoot()"> 추가하기 </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      team_name: null,
    };
  },
};
</script>
