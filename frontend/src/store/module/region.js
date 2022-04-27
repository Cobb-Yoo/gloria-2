import axios from "axios";

const region = {
  state: {
    region: [],
  },
  mutations: {
    setStateRegion(state, payload) {
      state.region.unshift(payload);
    },
    setStateRegionList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.region.push(payload[i]);
      }
    },
  },
  actions: {
    setRegion({ commit }, payload) {
      console.log(payload);

      const data = {
        NAME: payload,
      };

      axios
        .post("http://localhost:5000/region", {
          name: payload,
        })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStateRegion", data);
    },
    getRegionList({ commit }) {
      axios
        .get("http://localhost:5000/region")
        .then((res) => {
          commit("setStateRegionList", res.data[0]);
        })
        .catch();
    },
  },
  getters: {
    getStateRegion: (state) => {
      return state.region;
    },
  },
};

export default region;
