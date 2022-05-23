<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" align="center">
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 지출 항목 등록 </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
          </v-row>

          <v-col>
            <v-text-field
              label="지출 항목 대분류"
              v-model="expenRoot"
              append-outer-icon="mdi-send"
              @click:append-outer="addExpenRoot"
            ></v-text-field>
          </v-col>
        </v-card>
        <v-card align="center" class="mb-5">
          <v-row class="ma-0">
            <v-card-title> 지출 입력 </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
          </v-row>

          <v-col>
            <v-text-field
              label="지출 항목 대분류"
              v-model="expenLeaf"
              @keyup.enter="addExpenRoot()"
            ></v-text-field>

            <v-text-field
              label="이름"
              v-model="expenLeaf"
              @keyup.enter="addExpenRoot()"
            ></v-text-field>
          </v-col>

          <v-btn @click="addExpenRoot()" class="mb-3"> 추가하기 </v-btn>
        </v-card>

        <div class="a" @click="hello">
          <img src="../../../src/assets/more.png" class="b" />
        </div>
      </v-col>
      <!-- 
  --화면에 출력하는 형식은 기존 테이블 형식에서 header를 제외한 형태로 진행하며
  --CATE_DEPT의 크기만큼 반복해서 들여쓰기를 시행한다.
  --ex) 
  --CATE_DEPT = 0
  --  CATE_DEPT = 1
  --    CATE_DEPT = 2
  --      CATE_DEPT = 3  
 -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Expenditure",
  data() {
    return {
      expenRoot: null, // 소비 종류
      expenLeaf: null, // 소비 세부
    };
  },
  methods: {
    addExpenRoot() {},
    hello() {
      alert("hello world");
    },
  },
  computed: {},
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
.a {
  border: 3px dotted #98a4f2;
  height: 100px;
  display: flex;
  cursor: pointer;
}
.b {
  height: 60px;
  color: #98a4f2;
  margin: auto;
}
</style>
