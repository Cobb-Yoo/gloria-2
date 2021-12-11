<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 성도 추가 </v-card-title>
          <v-card-subtitle>
            여기에 있는 성도에 대해서만 헌금입력이 가능합니다
          </v-card-subtitle>
        </v-card>

        <v-text-field label="이름" v-model="memberName"></v-text-field>
        <v-text-field label="구역" v-model="groupName"></v-text-field>

        <v-btn @click="check()"> 추가하기 </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      memberName: null,
      groupName: null,
    };
  },
  methods: {
    check() {},
  },
};
</script>
