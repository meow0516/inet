import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      userInfo: {
        id: null,
        username: '',
        name: '',
        avatar: '',
        createdAt: '',
        lastModifiedAt: '',
      },
    };
  },
  mutations: {
    saveUserInfo(state, userInfo) {
      Object.assign(state.userInfo, userInfo);
    },
    signOut(state) {
      Object.assign(state.userInfo, {
        id: null,
        username: '',
        name: '',
        avatar: '',
        createdAt: '',
        lastModifiedAt: '',
      });
    },
  },
  actions: {},
});
export default store;
