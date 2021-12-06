<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 헌금입력 </v-card-title>
        </v-card>

        <v-text-field label="이름" v-model="name"></v-text-field>
        <v-text-field label="헌금" v-model="type"></v-text-field>
        <v-text-field label="금액" v-model="offering"></v-text-field>

        <v-row>
          <v-col cols="10">
            <v-chip-group active-class="deep-purple--text text--accent-4">
              <v-chip v-for="i in typeList" :key="i" @click="clickType(i)">
                {{ i }}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10">
            <v-chip-group active-class="deep-purple--text text--accent-4">
              <v-chip
                v-for="i in offeringList"
                :key="i"
                @click="clickOffering(i)"
              >
                {{ i }}
              </v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="2" align-self="center">
            <v-btn @click="check()"> 확인</v-btn>
          </v-col>
        </v-row>

        <table>
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
            <tr v-for="member in members.slice().reverse()" :key="member.id">
              <td>{{ member.id }}</td>
              <td>{{ member.name }}</td>
              <td>{{ member.type }}</td>
              <td>{{ member.offering }}</td>
              <td>{{ member.date }}</td>
              <td>
                <v-btn @click="editting(member.id)"> </v-btn>
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
  name: "Home",
  data() {
    return {
      name: "",
      offering: "",
      type: "",
      dialog: false,
      dialogData: [],
      offeringList: ["1000", "2000", "5000", "10000", "50000", "100000"],
      typeList: ["십일조", "감사헌금", "주정헌금", "건축헌금"],
    };
  },
  methods: {
    ...mapActions(["setMemberList"]),
    check() {
      const today = new Date();

      const year = today.getFullYear();
      const month = ("0" + (today.getMonth() + 1)).slice(-2);
      const day = ("0" + today.getDate()).slice(-2);

      const dateString = year + "-" + month + "-" + day;

      const payload = {
        name: this.name,
        offering: this.offering,
        type: this.type,
        date: dateString,
      };

      if (payload.name == "" || payload.offering == "" || payload.type == "") {
        alert("뭔가 비었습니다");
      } else {
        this.setMemberList(payload);
        this.name = "가나다";
      }
    },
    clickOffering(payload) {
      this.offering = payload;
    },
    clickType(payload) {
      this.type = payload;
    },
    editting(payload) {
      console.log(payload);
      this.dialogData = this.members[payload - 1];
      this.dialog = true;
    },
  },
  computed: {
    ...mapGetters({ members: "getMemberList" }),
  },
  components: {},
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
