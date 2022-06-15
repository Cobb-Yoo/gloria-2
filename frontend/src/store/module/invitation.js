import axios from "axios";

const invitation = {
  state: {
    invitation: [],
  },
  mutations: {
    setStateInvitation(state, payload) {
      state.invitation.unshift(payload);
    },
  },
  actions: {
    getInvitation({ commit }, payload) {
      axios
        .get("http://localhost:5000/invitation", {
          params: {
            startDt: payload.startDt,
            endDt: payload.endDt,
          },
        })
        .then((res) => {
          commit("setStateInvitation", res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setInvitation({ commit }, payload) {
      const data = {
        CHR_ID: payload.chrId,
        CONTENTS: payload.content,
        INVIT_DT: payload.invitDt,
      };

      //console.log(payload.saintsId);

      axios
        .post("http://localhost:5000/invitation", {
          chrId: payload.chrId,
          contents: payload.content,
          invitDt: payload.invitDt,
          saintsId: payload.saintsId,
        })
        .then(() => {
          console.log("심방등록 완료");
        })
        .catch((e) => {
          console.error(e);
        });

      commit("setStateInvitation", data);
    },
  },
  getters: {
    getInvitation: (state) => {
      return state.invitation;
    },
  },
};

export default invitation;
