<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" align="center">
        <v-card align="center">
          <v-row class="ma-0">
            <v-card-title> 헌금입력 </v-card-title>
          </v-row>
          <v-row>
            <v-col>
              <v-autocomplete
                label="이름"
                v-model="name"
                :items="saintList"
                item-text="name"
                item-value="name"
                id="name_auto_complete"
              >
              </v-autocomplete>
            </v-col>

            <v-col>
              <v-text-field
                id="offer_text"
                label="헌금"
                v-model="type"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-text-field label="금액" v-model="offering"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip-group
                active-class="deep-purple--text text--accent-4"
                class="quick-chip-field"
              >
                <v-chip
                  v-for="offeringValue in offeringValueList"
                  :key="offeringValue"
                  @click="clickOffering(offeringValue)"
                >
                  {{ offeringValue }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>

          <v-btn @click="check()" class="mb-3"> dd </v-btn>
        </v-card>

        <v-simple-table height="600px">
          <template v-slot:default>
            <thead>
              <tr>
                <td>순서</td>
                <td>날짜</td>
                <td>이름</td>
                <td>헌금</td>
                <td>금액</td>
                <td>수정</td>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="offer in offeringList.slice().reverse()"
                :key="offer.id"
              >
                <td>{{ offer.id }}</td>
                <td>{{ offer.date }}</td>
                <td>{{ offer.name }}</td>
                <td>{{ offer.type }}</td>
                <td>{{ offer.offering }}</td>
                <td>
                  <v-btn @click="editting(offer)"> 수정 </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="550">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          데이터 수정
        </v-card-title>

        <v-simple-table>
          <thead>
            <tr>
              <td>순서</td>
              <td>이름</td>
              <td>헌금</td>
              <td>금액</td>
              <td>날짜</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{{ dialogData.id }}</td>
              <td>{{ dialogData.name }}</td>
              <td>{{ dialogData.type }}</td>
              <td>{{ dialogData.offering }}</td>
              <td>{{ dialogData.date }}</td>
            </tr>
          </tbody>
        </v-simple-table>

        <span class="ml-3"> 해당 데이터를 수정하시겠습니까? </span>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> 수정 </v-btn>
          <v-btn color="red" text @click="dialog = false"> 취소 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      name: "",
      offering: "",
      type: "",
      dialog: false,
      dialogData: [],
      offeringValueList: ["1000", "2000", "5000", "10000", "50000", "100000"],
      testAcols: 4,
      testBcols: 6,
    };
  },
  methods: {
    ...mapActions(["setOffering"]),
    check() {
      const today = new Date();

      const year = today.getFullYear();
      const month = ("0" + (today.getMonth() + 1)).slice(-2);
      const day = ("0" + today.getDate()).slice(-2);

      const dateString = year + "-" + month + "-" + day;

      const data = {
        name: this.name,
        offering: this.offering,
        type: this.type,
        date: dateString,
      };

      console.log(data);

      if (data.name == "" || data.offering == "" || data.type == "") {
        alert("뭔가 비었습니다");
      } else {
        this.setOffering(data);
      }
    },
    clickOffering(payload) {
      //입력 폼에 해당하는 금액을 셋팅
      this.offering = payload;
    },
    clickType(payload) {
      //입력 폼에 해당하는 종류를 셋팅
      this.type = payload;
    },
    editting(payload) {
      //수정 창 올리는거
      this.dialog = true;
      this.dialogData = payload;
    },
  },
  computed: {
    ...mapGetters({
      offeringList: "getOffering",
      saintList: "getSaint",
    }),
  },
};
</script>

<style scoped>
.quick-chip-field {
  margin-left: 20px;
}

.v-text-field {
  width: 400px;
}
</style>
