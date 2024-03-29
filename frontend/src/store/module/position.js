import axios from "axios";

const position = {
  state: {
    position: [],
  },
  mutations: {
    setStatePosition(state, payload) {
      state.position.unshift(payload);
    },
    setStatePositionList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.position.push(payload[i]);
      }
    },
  },
  actions: {
    setPosition({ commit }, payload) {
      //console.log(payload);

      const data = {
        NAME: payload.name,
      };

      axios
        .post("http://localhost:5000/position", {
          chrId: payload.chrId,
          name: payload.name,
        })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStatePosition", data);
    },
    getPositionList({ commit }, payload) {
      axios
        .get("http://localhost:5000/position", {
          params: {
            chrId: payload,
          },
        })
        .then((res) => {
          commit("setStatePositionList", res.data[0]);
        })
        .catch();
    },
  },
  getters: {
    getStatePosition: (state) => {
      return state.position;
    },
  },
};

export default position;
