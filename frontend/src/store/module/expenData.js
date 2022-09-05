import axios from "axios";

const expenDataStore = {
  state: {
    expenData: [],
  },
  mutations: {
    setStatExpenData(state, payload) {
      state.expenData.unshift(payload);
    },
    setStateExpenDataList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.expenData.push(payload[i]);
      }
    },
  },
  actions: {
    setExpenData({ commit }, payload) {
      const data = {
        CHR_ID: payload.CHR_ID,
        CATE_NAME: payload.cateName,
      };

      axios
        .post("http://localhost:5000/expenData", {
          chrId: payload.CHR_ID,
          cateName: payload.cateName,
        })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStatExpenData", data);
    },

    getExpenDataList({ commit }, payload) {
      axios
        .get("http://localhost:5000/expenData", {
          params: {
            chrId: payload,
          },
        })
        .then((res) => {
          commit("setStateExpenDataList", res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getStateExpenData: (state) => {
      return state.expenData;
    },
  },
};

export default expenDataStore;
