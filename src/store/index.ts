import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      userInfo: {},
    };
  },
  mutations: {
    saveUserInfo(state, userInfo) {
      Object.assign(state.userInfo, userInfo);
    },
  },
  actions: {},
});
export default store;
