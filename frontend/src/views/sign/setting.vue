<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-row>
          <v-col class="mt-8">
            <v-sheet height="70" width="220" rounded="xl" class="sheets">
              <span class="sheet-span"> 사용자 권한 </span>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-8">
            <v-sheet height="70" width="220" rounded="xl" class="sheets">
              <span class="sheet-span"> 헌금 목록 추가 </span>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-8">
            <v-sheet height="70" width="220" rounded="xl" class="sheets">
              <span class="sheet-span"> 구역 목록 추가 </span>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-8">
            <v-sheet height="70" width="220" rounded="xl" class="sheets">
              <span class="sheet-span"> 직책 목록 추가 </span>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-8">
            <v-sheet height="70" width="220" rounded="xl" class="sheets">
              <span class="sheet-span"> 부서 목록 추가 </span>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-8">
            <v-sheet height="70" width="220" rounded="xl" class="sheets">
              <span class="sheet-span"> 지출 목록 추가 </span>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="10" class="ml-10 mt-8">
        <v-card class="vcard">
          <v-card-title> 사용자 추가 </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.sheets {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #98a4f2;
}
.sheet-span {
  font: 1.2em sans-serif;
}
.vcard {
  height: 700px;
}
</style>
