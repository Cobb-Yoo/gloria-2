<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 헌금 종류 추가 </v-card-title>
          <v-card-subtitle> 헌금 종류에 있는 항목만 </v-card-subtitle>
        </v-card>

        <v-text-field
          id="입력"
          label="헌금이름"
          v-model="offer_name"
          @keyup.enter="check()"
        ></v-text-field>

        <br />

        <v-card>
          <v-card-title> 헌금 종류 추가 </v-card-title>
          <v-card-subtitle> 헌금 종류에 있는 항목만 </v-card-subtitle>
        </v-card>

        <v-text-field
          id="입력"
          label="헌금이름"
          v-model="offer_name"
          @keyup.enter="check()"
        ></v-text-field>
      </v-col>

      <v-col align="center">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <td>헌금 이름</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="offer in offerList.slice().reverse()" :key="offer.id">
                <td>{{ offer.name }}</td>
                <td @click="editting(offer)">
                  <!-- <v-btn> 수정 </v-btn> -->
                  수정
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
  name: "Offering",
  data() {
    return {
      offer_name: null,
      dialog: false,
      dialogData: {
        id: null,
        name: null,
      },
      checkbox: false,
    };
  },
  methods: {
    ...mapActions(["setOffer"]),
    check() {
      const data = this.offer_name;
      this.setOffer(data);
      this.offer_name = "";
    },
    editting(payload) {
      console.log(payload);
      //this.dialogData = payload;
      //this.dialog = true;
    },
  },
  computed: {
    //...mapGetters({ offeringList: "getOfferingList"),
    ...mapGetters({ offerList: "getOffer" }),
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
