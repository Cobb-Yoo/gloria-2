<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        {{ expenRootList }}

        <v-card>
          <v-card-title> 지출 항목 등록 </v-card-title>
          <v-card-subtitle> </v-card-subtitle>

          <v-text-field
            label="지출 항목 대분류"
            v-model="expenRoot"
            @keyup.enter="addExpenRoot()"
          ></v-text-field>

          <v-btn @click="addExpenRoot()"> 추가하기 </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8">
        {{ expenLeafList }}

        <v-card>
          <v-card-title> 지출 세부 항목 등록 </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
          <v-text-field
            label="지출 항목 대분류"
            v-model="expenLeaf"
            @keyup.enter="addExpenLeaf()"
          ></v-text-field>

          <v-text-field
            label="이름"
            v-model="expenLeaf"
            @keyup.enter="addExpenLeaf()"
          ></v-text-field>

          <v-btn @click="addExpenLeaf()"> 추가하기 </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Expenditure",
  data() {
    return {
      expenRoot: null, // 소비 종류
      expenLeaf: null, // 소비 세부
    };
  },
  methods: {
    ...mapActions(["setExpenRoot", "setExpenLeaf"]),
    addExpenRoot() {
      this.setExpenRoot(this.expenRoot);
      this.expenRoot = "";
    },
    addExpenLeaf() {
      this.setExpenLeaf(this.expenLeaf);
      this.expenLeaf = "";
    },
  },
  computed: {
    ...mapGetters({
      expenRootList: "getExpenRootList",
      expenLeafList: "getExpenLeafList",
    }),
  },
};
</script>

<style scoped>
table {
  border: 1px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 100px;
  padding: 10px 20px;
}
</style>
