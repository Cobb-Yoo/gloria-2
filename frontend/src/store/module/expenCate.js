import axios from "axios";

const expenCateStore = {
  state: {
    expenCate: [],
  },
  mutations: {
    setStatExpenCate(state, payload) {
      state.expenCate.unshift(payload);
    },
    setStateExpenCateList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.expenCate.push(payload[i]);
      }
    },
  },
  actions: {
    setExpenCate({ commit }, payload) {
      const data = {
        CHR_ID: payload.chrId,
        CATE_NAME: payload.cateName,
      };

      console.log(data);

      axios
        .post("http://localhost:5000/expenCate", {
          CHR_ID: payload.chrId,
          CATE_NAME: payload.cateName,
        })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch((err) => console.log(err));

      commit("setStatExpenCate", data);
    },

    getExpenCateList({ commit }, payload) {
      axios
        .get("http://localhost:5000/expenCate", {
          params: {
            chrId: payload,
          },
        })
        .then((res) => {
          commit("setStateExpenCateList", res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getStateExpenCate: (state) => {
      return state.expenCate;
    },
  },
};

export default expenCateStore;
