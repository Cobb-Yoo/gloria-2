import axios from "axios";

const offerCate = {
  state: {
    offerCate: [],
  },
  mutations: {
    setStateOfferCate(state, payload) {
      state.offerCate.unshift(payload);
    },
    setStateOfferCateList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.offerCate.push(payload[i]);
      }
    },
  },
  actions: {
    setOfferCate({ commit }, payload) {
      const data = {
        NAME: payload,
      };

      axios
        .post("http://localhost:5000/offerCate", { name: payload })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStateOfferCate", data);
    },

    getOfferCateList({ commit }) {
      axios
        .get("http://localhost:5000/offerCate")
        .then((res) => {
          commit("setStateOfferCateList", res.data[0]);
        })
        .catch();
    },
  },
  getters: {
    getStateOfferCate: (state) => {
      return state.offerCate;
    },
  },
};

export default offerCate;
