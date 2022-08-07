<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4" align="center">
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

      <v-col cols="4" align="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 지출 항목 </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
          </v-row>

          <v-btn @click="addExpenRoot()" class="mb-3"> 추가하기 </v-btn>
        </v-card>

        <!-- <div class="a" @click="hello">
          <img src="../../../src/assets/more.png" class="b" />
        </div> -->
      </v-col>

      <v-col cols="4" align="center">
        <v-simple-table fixed-header height="800px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>부서이름</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="team in teamList" :key="team.TAB_ID">
                <td>{{ team.NAME }}</td>
                <td><v-btn @click="editting(region.TAB_ID)"> 수정 </v-btn></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Expenditure",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      teamList: "getStateTeam",
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
