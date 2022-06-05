import axios from "axios";

const saintStore = {
  state: {
    saint: [],
  },
  mutations: {
    setStateSaint(state, payload) {
      state.saint.unshift(payload);
    },
    setStateSaintList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.saint.push(payload[i]);
      }
    },
  },
  actions: {
    setSaint({ commit }, payload) {
      const data = {
        CHR_ID: payload.chrId,
        NAME: payload.name,
        POSITION: payload.position,
        REGION: payload.region,
        AGE: payload.age,
        GENDER: payload.gender,
        //PHONE_NUM:
        //FAM_ID:
        //MATE_STAT:
        //INST_DT:
        //UP_DT:
      };

      axios
        .post("http://localhost:5000/saint", {
          //CHR_ID :
          chrId: payload.chrId,
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

    getSaintList({ commit }, payload) {
      axios
        .get("http://localhost:5000/saint", {
          params: {
            chrId: payload,
          },
        })
        .then((res) => {
          commit("setStateSaintList", res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getStateSaint: (state) => {
      return state.saint;
    },
  },
};

export default saintStore;
