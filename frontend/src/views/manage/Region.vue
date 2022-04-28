<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" align="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 구역 등록 하기 </v-card-title>
          </v-row>

          <v-col>
            <v-text-field
              label="구역 이름"
              v-model="name"
              @keyup.enter="addRegion()"
            ></v-text-field>
          </v-col>

          <v-btn @click="addRegion()" class="mb-3"> 추가하기 </v-btn>
        </v-card>
      </v-col>

      <v-col cols="6" align="center">
        <v-simple-table fixed-header height="800px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>구역이름</th>
                <th>구역장</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="region in regionList" :key="region.TAB_ID">
                <td>{{ region.NAME }}</td>
                <td>
                  <span v-if="region.LEADER != null">
                    {{ region.LEADER }}
                  </span>
                  <span> 없음 </span>
                </td>
                <td>
                  <v-btn @click="editting(region.TAB_ID)"> 수정 </v-btn>
                </td>
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
  data() {
    return {
      name: null,
    };
  },
  methods: {
    ...mapActions(["setRegion"]),
    addRegion() {
      this.setRegion(this.name);
      this.name = "";
    },
  },
  computed: {
    ...mapGetters({
      regionList: "getStateRegion",
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
</style>
