<template>
  <v-container>
    <v-row>
      <v-col cols="6" align="center">
        <v-row justify="center">
          <v-col>
            <v-card align="center" class="mb-5">
              <v-row class="ma-0">
                <v-card-title> 지출 항목 등록 </v-card-title>
                <v-card-subtitle> </v-card-subtitle>
              </v-row>

              <v-col>
                <v-text-field
                  label="지출 항목 대분류"
                  v-model="expenRoot"
                  append-outer-icon="mdi-send"
                  @click:append-outer="addExpenRoot"
                ></v-text-field>
              </v-col>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col>
            <v-card align="center" class="mb-5">
              <v-row class="ma-0">
                <v-card-title> 지출 입력 </v-card-title>
                <v-card-subtitle> </v-card-subtitle>
              </v-row>

              <v-col>
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
              </v-col>

              <v-btn @click="addExpenLeaf()" class="mb-3"> 추가하기 </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- <v-col cols="6" align="center">
        <v-simple-table fixed-header height="800px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>직책이름</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="position in positionList" :key="position.TAB_ID">
                <td>{{ position.NAME }}</td>
                <td>
                  <v-btn @click="editting(region.TAB_ID)"> 수정 </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Expenditure",
  data() {
    return {
      expenRoot: null, // 소비 종류
      expenLeaf: null, // 소비 세부
    };
  },
  methods: {
    addExpenRoot() {},
  },
  computed: {},
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
</style>
