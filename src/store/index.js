import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    search: "",
  },
  getters: {},
  mutations: {
    setUsers(state, paylod) {
      state.users = paylod;
    },
    setSearch(state, paylod) {
      state.users = paylod;
    },
  },
  actions: {},
  modules: {},
});
