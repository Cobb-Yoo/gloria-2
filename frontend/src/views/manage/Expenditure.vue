<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" align="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 지출 항목 등록 </v-card-title>
          </v-row>
          <v-row class="ma-0">
            <v-card-subtitle> 항목 추가 </v-card-subtitle>
          </v-row>
          <v-col>
            <v-text-field
              label="지출 항목 분류"
              v-model="expenCateName"
            ></v-text-field>
          </v-col>
          <v-btn @click="addExpenCate()" class="mb-3"> 추가하기 </v-btn>
        </v-card>

        <!-- <div class="a" @click="hello">
          <img src="../../../src/assets/more.png" class="b" />
        </div> -->
      </v-col>

      <v-col cols="6" align="center">
        <v-simple-table fixed-header height="800px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>분류 이름</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="expenCate in expenCateList" :key="expenCate.TAB_ID">
                <td>{{ expenCate.CATE_NAME }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
      expenCateName: null,
    };
  },
  methods: {
    ...mapActions(["setExpenCate"]),
    addExpenCate() {
      const data = {
        chrId: this.info[0].TAB_ID,
        cateName: this.expenCateName,
      };

      this.setExpenCate(data);
    },
  },
  computed: {
    ...mapGetters({
      expenCateList: "getStateExpenCate",
      info: "getInfo",
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

body {
  overflow-x: hidden;
  overflow-y: hidden;
}
.a {
  border: 3px dotted #98a4f2;
  height: 100px;
  display: flex;
  cursor: pointer;
}
.b {
  height: 60px;
  color: #98a4f2;
  margin: auto;
}
</style>
