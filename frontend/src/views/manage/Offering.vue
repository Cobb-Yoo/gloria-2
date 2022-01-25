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
          label="대분류 : 상위 항목입니다."
        ></v-checkbox>

        <div v-if="checkbox">
          <!-- 
            대분류 때에는 부모 offer-kind만 정의하고
            소분류에 부모 밑에 줄줄이 소세지로 만든다.
           -->
          <span> 대분류 입력 </span>

          <v-text-field
            label="대분류 이름"
            v-model="offerKinds_parent_name"
            @keyup.enter="check()"
          ></v-text-field>
        </div>

        <div v-else>
          <span> 소분류 입력 </span>

          <v-text-field
            label="대분류 입력"
            v-model="offerKinds_parent_name"
            @keyup.enter="next_form(소분류_입력)"
          ></v-text-field>

          <v-text-field
            id="소분류_입력"
            label="소분류 이름"
            v-model="offerKinds_name"
            @keyup.enter="check()"
          ></v-text-field>
        </div>

        <v-btn @click="check()"> 추가하기 </v-btn>

        <span> 테이블에 들어가는 값은 </span>
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
    ...mapActions(["setOfferingList"]),
    check() {
      this.setOfferingList(this.offering_name);
      this.offering_name = "";
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
