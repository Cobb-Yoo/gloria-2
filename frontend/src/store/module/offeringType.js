import axios from "axios";

const offeringType = {
  state: {
    offeringType: [],
  },
  mutations: {
    setStateOfferingType(state, payload) {
      state.offeringType.unshift(payload);
    },
    setStateOfferingTypeList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.offeringType.push(payload[i]);
      }
    },
  },
  actions: {
    setOfferingType({ commit }, payload) {
      const data = {
        NAME: payload.name,
      };

      axios
        .post("http://localhost:5000/offeringType", { name: payload })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStateOfferingType", data);
    },

    getOfferingType({ commit }) {
      axios
        .get("http://localhost:5000/offeringType")
        .then((res) => {
          commit("setStateOfferingTypeList", res.data[0]);
        })
        .catch();
    },
  },
  getters: {
    getStateOfferingType: (state) => {
      return state.offeringType;
    },
  },
};

export default offeringType;
