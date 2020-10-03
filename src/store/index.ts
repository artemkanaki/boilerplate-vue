import Vue from 'vue';
import * as Vuex from 'vuex';
import { state, State } from './state';
import { mutations } from './mutations';
import { getters } from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
  state,
  getters,
  mutations,
});
