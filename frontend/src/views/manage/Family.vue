<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" align="center">
        <v-card align="left" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 가족 관계 관리 </v-card-title>
          </v-row>
          <v-row class="ma-3">
            <v-card-text>
              <v-row>
                <v-col cols="5">
                  <div class="text-h6">가족 신앙 세대주 등록</div>
                  <p class="text-h7">
                    가족 신앙 세대주를 등록해야 가족을 연결 시킬 수 있습니다.
                  </p>
                </v-col>

                <v-col cols="5">
                  <v-text-field
                    label="세대주 찾기"
                    v-model="familyLeader"
                  ></v-text-field>
                </v-col>

                <v-col cols="2" justify>
                  <v-btn @click="addExpenCate()" class="mb-3"> 추가하기 </v-btn>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-text>
              <v-row>
                <v-col cols="5">
                  <div class="text-h6">가족 신앙 세대주 변경</div>
                  <p class="text-h7">
                    가족 신앙 세대주 변경시 기존 가족관계는 유지하되<br />
                    신앙 세대주만 변경되며 기존 신앙 세대주는<br />
                    새로 가족등록을 진행해야합니다
                  </p>
                </v-col>

                <v-col cols="5">
                  <v-text-field
                    label="세대주 찾기"
                    v-model="familyLeader"
                  ></v-text-field>
                </v-col>

                <v-col cols="2" justify>
                  <v-btn @click="addExpenCate()" class="mb-3"> 추가하기 </v-btn>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-text>
              <v-row>
                <v-col cols="5">
                  <div class="text-h6">가족 등록</div>
                  <p class="text-h7">신앙 세대주 기준으로 가족이 구성됩니다.</p>
                </v-col>

                <v-col cols="5">
                  <v-row class="ma-0">
                    <v-text-field
                      label="세대주 찾기"
                      v-model="familyLeader"
                    ></v-text-field>
                  </v-row>
                  <v-row class="ma-0">
                    <v-text-field
                      label="세대원"
                      v-model="familyMember"
                    ></v-text-field>
                  </v-row>
                </v-col>

                <v-col cols="2" justify>
                  <v-btn @click="addExpenCate()" class="mb-3"> 추가하기 </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FamilyManage",
  data() {
    return {
      familyLeader: null,
      familyMember: null,
    };
  },
};
</script>
