<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <v-card elevation="8" rounded class="vcard">
          <v-row justify="center">
            <v-card-title class=""> login page</v-card-title>
          </v-row>

          <v-row justify="center">
            <v-col cols="8">
              <v-text-field
                filled
                rounded
                label="ID"
                v-model="id"
              ></v-text-field>
              <v-text-field
                filled
                rounded
                label="PASSWORD"
                v-model="pw"
                :type="'password'"
                @keyup.enter="check()"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <span class="mr-4 mb-5">Sign in</span>
            <span class="mb-5"> Password </span>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      pw: null,
      alert: 0,
    };
  },
  methods: {
    check() {
      if (this.id == null) {
        alert("hello");
      }
    },
  },
};
</script>

<style scoped>
.vcard {
  margin-top: 15%;
  width: 400px;
}
</style>
