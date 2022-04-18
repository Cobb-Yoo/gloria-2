import axios from "axios";

const saintStore = {
  state: {
    saint: [],
  },
  mutations: {
    setStateSaint(state, payload) {
      state.saint.push(payload);
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
  },
  getters: {
    getSaint: (state) => {
      return state.saint;
    },
  },
};

export default saintStore;
