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
                label="지출부서"
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

      <v-col cols="5" align="center">
        <v-simple-table fixed-header height="500px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>부서</th>
                <th>지급날짜</th>
                <th>지급액</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="offer in offerDataList" :key="offer.id">
                <td>{{ offer.TAB_ID }}</td>
                <td>{{ offer.SAINT_NM }}</td>
                <td>{{ offer.OFFER_DT }}</td>
                <td>
                  <v-btn @click="detail(offer)"> 상세 </v-btn>
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
export default {
  name: "register_expenditure",
  data() {
    return {
      name: null,
      team: null,
    };
  },
  methods: {
    check() {},
  },
  computed: {},
};
</script>

<style scoped>
.v-text-field {
  width: 200px;
}
</style>
