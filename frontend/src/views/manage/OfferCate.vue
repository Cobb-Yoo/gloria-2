<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" class="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 헌금 종류 추가 </v-card-title>
          </v-row>
          <v-row class="ma-0">
            <v-card-subtitle> 헌금 종류에 있는 항목만 </v-card-subtitle>
          </v-row>
          <v-col>
            <v-text-field
              id="입력"
              label="헌금이름"
              v-model="name"
              @keyup.enter="check()"
            ></v-text-field>
          </v-col>
        </v-card>
      </v-col>

      <v-col cols="6" align="center">
        <v-simple-table fixed-header height="800px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>헌금 이름</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="offerCate in offerCateList" :key="offerCate.TAB_ID">
                <td>{{ offerCate.NAME }}</td>
                <td @click="editting(offerCate)">
                  <v-btn> 수정 </v-btn>
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
  name: "offerCate",
  data() {
    return {
      name: null,
      dialog: false,
      dialogData: {
        id: null,
        name: null,
      },
    };
  },
  methods: {
    ...mapActions(["setOfferCate"]),
    check() {
      this.setOfferCate(this.name);
      this.name = "";
    },
    editting(payload) {
      this.dialogData = payload;
      this.dialog = true;
    },
  },
  computed: {
    ...mapGetters({
      offerCateList: "getStateOfferCate",
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
