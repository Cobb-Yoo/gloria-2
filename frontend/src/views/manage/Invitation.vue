<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" align="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 심방보고서 작성 </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
          </v-row>

          <v-col>
            <v-text-field label="이름" v-model="name"></v-text-field>
            <v-text-field label="내용" v-model="content"></v-text-field>
          </v-col>
          <v-btn class="mb-3"> 저장 </v-btn>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-simple-table fixed-header height="800px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>부서이름</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      content: null,
    };
  },
  methods: {},
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
