import axios from "axios";

const offering = {
  state: {
    offering: [],
    offeringType: [],
  },
  mutations: {
    setStateoffering(state, payload) {
      state.offering.unshift(payload);
    },
    setStateofferingList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.offering.push(payload[i]);
      }
    },
  },
  actions: {
    setOffering({ commit }, payload) {
      const data = {
        NAME: payload.name,
      };

      axios
        .post("http://localhost:5000/offering", { name: payload })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStateoffering", data);
    },
    getOffering({ commit }) {
      axios
        .get("http://localhost:5000/offering")
        .then((res) => {
          commit("setStateofferingList", res.data[0]);
        })
        .catch();
    },
  },
  getters: {
    getStateOffering: (state) => {
      return state.offering;
    },
  },
};

export default offering;
