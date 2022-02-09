<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="5" align="center">
        <v-card class="left-card" align="left">
          <v-card-title> 지출 항목 입력 </v-card-title>

          <v-autocomplete
            label="지출항목"
            v-model="expenditure"
            :items="expenditureList"
            item-text="expenditure"
            item-value="expenditure"
          >
          </v-autocomplete>

          <v-autocomplete
            label="지출부서"
            v-model="position"
            :items="positionList"
            item-text="position"
            item-value="position"
          >
          </v-autocomplete>

          <span> 지출 날짜 </span>
          <br />
          <span> 지출 내용 </span>

          <v-row>
            <v-col>
              <v-text-field label="지출 금액" v-model="offering"></v-text-field>
            </v-col>
          </v-row>

          <v-btn @click="check()"> 확인</v-btn>
        </v-card>
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
      name: null,
      team: null,
    };
  },
  methods: {
    ...mapActions(["setExpenditure"]),
    check() {
      const data = {
        name: this.name,
        team: this.team,
      };

      this.setExpenditure(data);
    },
  },
  computed: {
    ...mapGetters({
      positionList: "getPosition",
      teamList: "getTeam",
      expenditureList: "getExpenditure",
    }),
  },
};
</script>

<style scoped>
.auto .v-text-field {
  width: 400px;
  margin-left: 20px;
}

.quick-chip-field {
  margin-left: 20px;
}

.left-card {
  width: 450px;
  justify-content: center;
}
</style>
