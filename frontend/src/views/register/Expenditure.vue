<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="5" align="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 지출 등록 </v-card-title>
          </v-row>
          <v-row>
            <v-col>
              <v-autocomplete
                label="지출항목"
                v-model="expenCateId"
                :items="expenCateList"
                item-text="CATE_NAME"
                item-value="TAB_ID"
                id="name_auto_complete"
              >
              </v-autocomplete>
            </v-col>

            <v-col>
              <v-autocomplete
                label="지출부서"
                v-model="teamId"
                :items="teamList"
                item-text="NAME"
                item-value="TAB_ID"
                id="name_auto_complete"
              ></v-autocomplete>
            </v-col>

            <v-col>
              <v-text-field label="금액" v-model="value"></v-text-field>
            </v-col>
          </v-row>

          <v-btn @click="check()" class="mb-3"> 입력 </v-btn>
        </v-card>
      </v-col>

      <v-col cols="5" align="center">
        <v-simple-table fixed-header height="500px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>항목</th>
                <th>부서</th>
                <th>지급액</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="expenData in expenDataList" :key="expenData.TAB_ID">
                <td>{{ expenData.CATE_ID }}</td>
                <td>{{ expenData.TEAM_ID }}</td>
                <td>{{ expenData.VALUE }}</td>
                <td>
                  <v-btn @click="detail(expen)"> 상세 </v-btn>
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
  name: "register_expenditure",
  data() {
    return {
      expenCateId: null,
      teamId: null,
      value: null,
    };
  },
  methods: {
    ...mapActions(["setExpenData"]),
    check() {
      const data = {
        CHR_ID: this.info[0].TAB_ID,
        CATE_ID: this.expenCateId,
        TEAM_ID: this.teamId,
        VALUE: this.value,
      };

      this.setExpenData(data);
    },
  },
  computed: {
    ...mapGetters({
      saintList: "getStateSaint",
      info: "getInfo",
      expenCateList: "getStateExpenCate",
      expenDataList: "getStateExpenData",
      teamList: "getStateTeam",
    }),
  },
};
</script>

<style scoped>
.v-text-field {
  width: 200px;
}
</style>
