import axios from "axios";

const team = {
  state: {
    team: [],
  },
  mutations: {
    setStateTeam(state, payload) {
      state.team.unshift(payload);
    },
    setStateTeamList(state, payload) {
      for (var i = 0; i < payload.length; i++) {
        state.team.push(payload[i]);
      }
    },
  },
  actions: {
    setTeam({ commit }, payload) {
      console.log(payload);

      const data = {
        NAME: payload.name,
      };

      axios
        .post("http://localhost:5000/team", {
          chrId: payload.chrId,
          name: payload.name,
        })
        .then(() => {
          console.log("적재완료 굳");
        })
        .catch();

      commit("setStateTeam", data);
    },
    getTeamList({ commit }, payload) {
      axios
        .get("http://localhost:5000/team", {
          params: { chrId: payload },
        })
        .then((res) => {
          commit("setStateTeamList", res.data[0]);
        })
        .catch();
    },
  },
  getters: {
    getStateTeam: (state) => {
      return state.team;
    },
  },
};

export default team;
