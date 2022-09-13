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
      console.log(payload);

      const data = {
        CHR_ID: payload.CHR_ID,
        CATE_ID: payload.CATE_ID,
        TEAM_ID: payload.TEAM_ID,
        VALUE: payload.VALUE,
      };

      axios
        .post("http://localhost:5000/expenData", {
          CHR_ID: payload.CHR_ID,
          CATE_ID: payload.CATE_ID,
          TEAM_ID: payload.TEAM_ID,
          VALUE: payload.VALUE,
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
            CHR_ID: payload,
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
