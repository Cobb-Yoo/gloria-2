<template>
  <v-container>
    <v-row justify="center">
      <!--  -->
      <v-col cols="6" align="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 심방보고서 작성 </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
          </v-row>

          <v-col>
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              max-width="500px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="심방날짜"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>

              <v-date-picker
                :landscape="true"
                v-model="date"
                type="date"
                :weekday-format="getDay"
                :header-date-format="getMonth"
              >
                <v-btn text color="primary" @click="$refs.menu1.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <v-autocomplete
              v-model="saintId"
              :items="saintList"
              outlined
              dense
              small-chips
              label="성도 입력"
              item-text="NAME"
              item-value="TAB_ID"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.item"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  <span> {{ data.item.NAME }} </span>
                </v-chip>
              </template>
            </v-autocomplete>
            <v-text-field label="내용" v-model="content"></v-text-field>
          </v-col>
          <v-btn class="mb-3" @click="commit()"> 저장 </v-btn>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card align="center" class="mb-5" elevation="0">
          <v-row class="ma-0">
            <v-card-title> 찾기 </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
          </v-row>

          <v-row>
            <v-col>
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

            <v-col>
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

            <v-col>
              <v-autocomplete
                label="이름"
                v-model="name"
                :items="saintList"
                item-text="NAME"
                item-value="name"
                id="name_auto_complete"
              >
              </v-autocomplete>
            </v-col>

            <v-col cols="1">
              <v-btn @click="search()" class="mb-3"> 확인 </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <v-simple-table fixed-header height="600px">
          <template v-slot:default>
            <thead>
              <tr>
                <th>날짜</th>
                <th>성도이름</th>
              </tr>
            </thead>
            <tbody></tbody>
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
      this.saintId = null;
      this.content = null;
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
        startDt: this.startDt,
        endDt: this.endDt,
        name: this.name,
      };

      this.invitationList = this.getInvitation(data);
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
