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

var firebase = require('firebase/app');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOt3k5zNJ34ii-pVyojeMvOTNt_D0tM34",
  authDomain: "web-gastroinnova.firebaseapp.com",
  databaseURL: "https://web-gastroinnova.firebaseio.com",
  projectId: "web-gastroinnova",
  storageBucket: "web-gastroinnova.appspot.com",
  messagingSenderId: "418551106596"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });


Vue.use(VModal)
Vue.use(VueAnalytics, {
  id: 'UA-128950882-1',
  router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
