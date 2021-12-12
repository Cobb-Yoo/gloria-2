<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 헌금 종류 추가 </v-card-title>
          <v-card-subtitle> 헌금 리스트에 추가합니다 </v-card-subtitle>
        </v-card>

        <v-text-field
          label="헌금 이름"
          v-model="offeringName"
          @keyup.enter="check()"
        ></v-text-field>

        <v-btn @click="check()"> 추가하기 </v-btn>

        <table>
          <thead>
            <tr>
              <td>순서</td>
              <td>이름</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="offering in offeringList" :key="offering.id">
              <td>{{ offering.id }}</td>
              <td>{{ offering.name }}</td>

              <td>
                <v-btn @click="editting(offering)"> 수정 </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>

    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            데이터 수정
          </v-card-title>

          <table>
            <thead>
              <tr>
                <td>순서</td>
                <td>이름</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{{ dialogData.id }}</td>
                <td>{{ dialogData.name }}</td>
              </tr>
            </tbody>
          </table>

          <v-row>
            <v-card-text> 해당 데이터를 수정하시겠습니까? </v-card-text>
          </v-row>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> 수정 </v-btn>
            <v-btn color="red" text @click="dialog = false"> 취소 </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Offering",
  data() {
    return {
      offeringName: null,
      dialog: false,
      dialogData: {
        id: null,
        name: null,
      },
    };
  },
  methods: {
    ...mapActions(["setOfferingList"]),
    check() {
      this.setOfferingList(this.offeringName);
      this.offeringName = "";
    },
    editting(payload) {
      this.dialogData = payload;
      this.dialog = true;
    },
  },
  computed: {
    ...mapGetters({ offeringList: "getOfferingList" }),
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
