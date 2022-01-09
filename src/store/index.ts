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
    saveUserToStorage(state, storageUserInfo) {
      localStorage.setItem('storageUserInfo', storageUserInfo);
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
      localStorage.removeItem('storageUserInfo');
    },
    getUserInfoFromStorage(state) {
      if (localStorage.getItem('storageUserInfo')) {
        let storageUserInfo = JSON.parse(
          localStorage.getItem('storageUserInfo')
        );
        Object.assign(state.userInfo, storageUserInfo);
      }
    },
  },
  actions: {},
});
export default store;
