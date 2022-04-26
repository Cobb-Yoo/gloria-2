import axios from "axios";

const saintStore = {
  state: {
    saint: [],
  },
  mutations: {
    setStateSaint(state, payload) {
      state.saint.push(payload);
    },
    setStateSaintList(state, payload) {
      console.log("hello world");

      for (var i = 0; i < payload.length; i++) {
        state.saint.push(payload[i]);
      }
    },
  },
  actions: {
    setSaint({ commit }, payload) {
      const data = {
        //CHR_ID :
        name: payload.name,
        position: payload.position,
        region: payload.region,
        age: payload.age,
        gender: payload.gender,
        //PHONE_NUM:
        //FAM_ID:
        //MATE_STAT:
        //INST_DT:
        //UP_DT:
      };

      axios
        .post("http://localhost:5000/saint", {
          //CHR_ID :
          name: payload.name,
          position: payload.position,
          region: payload.region,
          age: payload.age,
          gender: payload.gender,
          //PHONE_NUM:
          //FAM_ID:
          //MATE_STAT:
          //INST_DT:
          //UP_DT:
        })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStateSaint", data);
    },

    getSaintList({ commit }) {
      //initSaintList({ commit }) {
      axios
        .get("http://localhost:5000/saint")
        .then((res) => {
          //console.log(res.data[0]);

          commit("setStateSaintList", res.data[0]);
        })
        .catch();

      //commit("setStateSaint", data);
    },
  },
  getters: {
    getStateSaint: (state) => {
      return state.saint;
    },
  },
};

export default saintStore;
