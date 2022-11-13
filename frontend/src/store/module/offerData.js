import axios from "axios";

const offerData = {
  state: {
    offerData: [],
  },
  mutations: {
    setStateOfferData(state, payload) {
      state.offerData.unshift(payload);
    },
    setStateOfferDataList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.offerData.push(payload[i]);
      }
    },
  },
  actions: {
    setOfferData({ commit }, payload) {
      const data = {
        SAINT_NM: payload.SAINT_NM,
        OFFER_NM: payload.OFFER_NM,
        VALUE: payload.VALUE,
        OFFER_DT: payload.OFFER_DT,
      };

      axios
        .post("http://localhost:5000/offerData", payload)
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStateOfferData", data);
    },
    getOfferData({ commit }, payload) {
      axios
        .get("http://localhost:5000/offerData", {
          params: {
            chrId: payload,
          },
        })
        .then((res) => {
          commit("setStateOfferDataList", res.data[0]);
        })
        .catch();
    },
  },
  getters: {
    getStateOfferData: (state) => {
      return state.offerData;
    },
  },
};

export default offerData;
