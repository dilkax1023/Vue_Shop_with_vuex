import { createStore } from 'vuex';
import productsModule from './modules/products.js';
import cartModules from './modules/cart.js';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModules
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login({ commit }) {
      commit('login');
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isAuthorized(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
