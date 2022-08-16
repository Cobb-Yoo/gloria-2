<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" align="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 헌금입력 </v-card-title>
          </v-row>
          <v-row>
            <v-col>
              <v-autocomplete
                label="이름"
                v-model="saintName"
                :items="saintList"
                item-text="NAME"
                item-value="name"
                id="name_auto_complete"
              >
              </v-autocomplete>
            </v-col>

            <v-col>
              <v-autocomplete
                label="헌금종류"
                v-model="offerCateName"
                :items="offerCateList"
                item-text="NAME"
                item-value="name"
                id="name_auto_complete"
              ></v-autocomplete>
            </v-col>

            <v-col>
              <v-text-field label="금액" v-model="value"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip-group
                active-class="deep-purple--text text--accent-4"
                class="quick-chip-field"
              >
                <v-chip
                  v-for="offerDataValue in offerDataValueList"
                  :key="offerDataValue"
                  @click="clickofferData(offerDataValue)"
                >
                  {{ offerDataValue }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>

          <v-btn @click="check()" class="mb-3"> 입력 </v-btn>
        </v-card>
      </v-col>

      <v-col cols="10" align="center">
        <v-simple-table fixed-header height="500px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>번호</th>
                <th>성도이름</th>
                <th>헌금날짜</th>
                <th>헌금이름</th>
                <th>금액</th>
                <th>수정</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="offer in offerDataList" :key="offer.id">
                <td>{{ offer.TAB_ID }}</td>
                <td>{{ offer.SAINT_NM }}</td>
                <td>{{ offer.OFFER_DT }}</td>
                <td>{{ offer.OFFER_NM }}</td>
                <td>{{ offer.VALUE }}</td>
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
  name: "Home",
  data() {
    return {
      saintName: "",
      offerCateName: "", // 헌금 종류이름
      value: "", // 헌금액
      offerDataValueList: ["1000", "2000", "5000", "10000", "50000", "100000"],
    };
  },
  methods: {
    ...mapActions(["setOfferData"]),
    check() {
      const today = new Date();

      const year = today.getFullYear();
      const month = ("0" + (today.getMonth() + 1)).slice(-2);
      const day = ("0" + today.getDate()).slice(-2);

      const dateString = year + "-" + month + "-" + day;

      const data = {
        SAINT_NM: this.saintName,
        OFFER_NM: this.offerCateName,
        VALUE: this.value,
        OFFER_DT: dateString,
      };

      //console.log(data);

      if (
        data.saintName == "" ||
        data.offerData == "" ||
        data.offerCateName == ""
      ) {
        alert("뭔가 비었습니다");
      } else {
        this.setOfferData(data);
      }
    },
    clickofferData(payload) {
      //입력 폼에 해당하는 금액을 셋팅
      this.offerData = payload;
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
      offerCateList: "getStateOfferCate",
      saintList: "getStateSaint",
      offerDataList: "getStateOfferData",
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
