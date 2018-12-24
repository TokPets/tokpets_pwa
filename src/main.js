/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

import VueAnalytics from 'vue-analytics'
import VModal from 'vue-js-modal'

import "./registerServiceWorker";
import './plugins/axios'


Vue.config.productionTip = false;

// Initialize Firebase

//import firebase from 'firebase/app'
let firebase = require('firebase/app');

let config = {
  apiKey: 'AIzaSyCfjpFwtYK3ju4OvT-wlqd8iS9INhfMcpw',
  authDomain: 'tokpetsapp.firebaseapp.com',
  databaseURL: 'https://tokpetsapp.firebaseio.com',
  projectId: 'tokpetsapp',
  storageBucket: 'tokpetsapp.appspot.com',
  messagingSenderId: '359710188847'
}

firebase.initializeApp(config);


Vue.use(VModal)

Vue.use(VueAnalytics, {
  id: 'UA-128950882-1'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
