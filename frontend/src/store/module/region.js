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
        chrId: payload.chrId,
        name: payload.name,
      };

      axios
        .post("http://localhost:5000/region", {
          chrId: payload.chrId,
          name: payload.name,
        })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch((err) => console.log(err));

      commit("setStateRegion", data);
    },
    getRegionList({ commit }, payload) {
      axios
        .get("http://localhost:5000/region", {
          params: {
            chrId: payload,
          },
        })
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
