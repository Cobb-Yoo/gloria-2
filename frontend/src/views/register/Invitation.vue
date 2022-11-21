<template>
  <v-container>
    <v-row justify="center">
      <!-- 찾는 부분 -->
      <v-col cols="6" align="center">
        <v-card align="center" class="pa-3 mb-3">
          <v-card-title> 심방보고서 작성 </v-card-title>

          <v-col cols="8">
            <v-autocomplete
              v-model="saintId"
              :items="saintList"
              outlined
              dense
              label="성도 이름"
              item-text="NAME"
              item-value="TAB_ID"
            >
              <template v-slot:append-outer>
                <v-btn> 찾기 </v-btn>
              </template>
            </v-autocomplete>
          </v-col>
        </v-card>

        <v-subheader class="pa-3"
          >최근 심방 일자 : <span>{{ dateYm }}</span></v-subheader
        >

        <v-card align="left" class="pa-3 mb-3" height="300px">
          <v-card-sub-title> 심방내용 →</v-card-sub-title>
          <v-textarea autocomplete="email" label="심방내용"></v-textarea>
        </v-card>

        <v-card align="left" class="pa-3 mb-3" height="250px">
          <v-card-sub-title> 가족관계도 →</v-card-sub-title>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card align="center" class="mb-5" elevation="0">
          <v-card-title> 기간으로 찾기 </v-card-title>

          <v-row class="pa-3">
            <v-col cols="4">
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="startDt"
                transition="scale-transition"
                offset-y
                max-width="500px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="startDt"
                    label="시작"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    width="250px"
                  ></v-text-field>
                </template>

                <v-date-picker
                  :landscape="true"
                  v-model="startDt"
                  type="date"
                  :weekday-format="getDay"
                  :header-date-format="getMonth"
                >
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu2.save(startDt)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="4">
              <v-menu
                ref="menu3"
                v-model="menu3"
                :close-on-content-click="false"
                :return-value.sync="endDt"
                transition="scale-transition"
                offset-y
                max-width="500px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="endDt"
                    label="종료"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>

                <v-date-picker
                  :landscape="true"
                  v-model="endDt"
                  type="date"
                  :weekday-format="getDay"
                  :header-date-format="getMonth"
                >
                  <v-btn text color="primary" @click="$refs.menu3.save(endDt)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="4">
              <v-btn @click="search()" class="mb-3"> 확인 </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-simple-table fixed-header height="600px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>날짜</th>
                <th>내용</th>
                <th>방법</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="invitation in invitationList" :key="invitation.id">
                <td>{{ invitation.INVIT_DT }}</td>
                <td>{{ invitation.CONTENTS }}</td>
                <td>{{ invitation.CONTENTS }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      saintId: null,
      content: null,
      menu1: null,
      menu2: null,
      menu3: null,
      date: null,
      startDt: null,
      endDt: null,
      name: null,
    };
  },
  methods: {
    ...mapActions(["getInvitation", "setInvitation"]),
    remove(item) {
      const index = this.saintId.indexOf(item.TAB_ID);
      if (index >= 0) this.saintId.splice(index, 1);
    },
    clear() {
      this.date = null;
      this.saintId = null; // 성도  id
      this.content = null; // 내용
    },
    commit() {
      if (this.date == null || this.saintId == null || this.content == null) {
        alert("빈 값이 있습니다.");
        return;
      }

      const data = {
        chrId: this.info[0].TAB_ID,
        content: this.content,
        invitDt: this.date,
        saintsId: this.saintId,
      };

      this.setInvitation(data);

      this.clear();
    },
    getDay(date) {
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
      let i = new Date(date).getDay(date);
      return daysOfWeek[i];
    },
    getMonth(date) {
      const month = new Date(date).getMonth(date) + 1;
      const year = new Date(date).getFullYear();
      return year + "  ·  " + month;
    },
    search() {
      if (this.startDt == null || this.endDt == null) {
        alert("조회 기간을 확인해주세요.");
        return;
      }

      if (this.startDt > this.endDt) {
        alert("조회 기간을 확인해주세요.");
        return;
      }

      const data = {
        chrId: this.info[0].TAB_ID,
        startDt: this.startDt,
        endDt: this.endDt,
        name: this.name,
      };

      this.getInvitation(data);
    },
  },
  computed: {
    ...mapGetters({
      saintList: "getStateSaint",
      invitationList: "getStateInvitation",
      info: "getInfo",
    }),
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

body {
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
