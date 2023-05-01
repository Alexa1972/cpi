import Vue from 'nativescript-vue'
import Vuex from 'vuex';
Vue.use(Vuex);

import Home from './components/Home'

import cpiStore from './store'

new Vue({
  render: (h) => h('frame', [h(Home)]),
  store: cpiStore
}).$start()
