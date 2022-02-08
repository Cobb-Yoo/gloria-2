<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title> 직책 등록 하기 </v-card-title>
          <v-card-subtitle> </v-card-subtitle>
        </v-card>

        <v-text-field
          label="직책 이름"
          v-model="position_name"
          @keyup.enter="addPosition()"
        ></v-text-field>

        <v-btn @click="addPosition()"> 추가하기 </v-btn>

        {{ positionList }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      position_name: null,
    };
  },
  methods: {
    ...mapActions(["setPosition"]),
    addPosition() {
      this.setPosition(this.position_name);
      this.position_name = "";
    },
  },
  computed: {
    ...mapGetters({
      positionList: "getPosition",
    }),
  },
};
</script>
