<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 헌금 종류 추가 </v-card-title>
          <v-card-subtitle> 헌금 리스트에 추가합니다 </v-card-subtitle>
        </v-card>

        <v-checkbox
          v-model="checkbox"
          label="체크시 대분류 입력을 할 수 있습니다."
        ></v-checkbox>

        <div v-if="checkbox">
          <!-- 
            대분류 때에는 부모 offer-kind만 정의하고
            소분류에 부모 밑에 줄줄이 소세지로 만든다.
           -->

          <v-text-field
            label="대분류 이름"
            v-model="offerKinds_parent_name"
            @keyup.enter="check()"
          ></v-text-field>
        </div>

        <div v-else>
          <v-text-field
            label="대분류 입력"
            v-model="offerKinds_parent_name"
          ></v-text-field>

          <v-text-field
            id="소분류_입력"
            label="소분류 이름"
            v-model="offerKinds_name"
            @keyup.enter="check()"
          ></v-text-field>
        </div>
      </v-col>

      <v-col align="center">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <td>순서</td>
                <td>분류코드</td>
                <td>부모id</td>
                <td>이름</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="offer in offerList.slice().reverse()" :key="offer.id">
                <td>{{ offer.id }}</td>
                <td>{{ offer.type }}</td>
                <td>{{ offer.pid }}</td>
                <td>{{ offer.name }}</td>
                <td>
                  <v-btn @click="editting(offer)"> 수정 </v-btn>
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
      offerKinds_parent_name: null,
      offerKinds_name: null,
      dialog: false,
      dialogData: {
        id: null,
        name: null,
      },
      checkbox: false,
    };
  },
  methods: {
    ...mapActions(["setOfferingList, setOffer"]),
    check() {
      //this.setOfferingList(this.offering_name);

      console.log("hello");

      var data;

      if (this.checkbox) {
        data = {
          type: this.checkbox,
          name: this.offerKinds_parent_name,
        };
      } else {
        data = {
          type: this.checkbox,
          name: this.offerKinds_name,
          pid: this.offerKinds_parent_name,
        };
      }

      this.setOffer(data);

      this.offering_name = "";
    },
    editting(payload) {
      this.dialogData = payload;
      this.dialog = true;
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
