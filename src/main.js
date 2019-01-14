/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

import VueAnalytics from "vue-analytics";
import VModal from "vue-js-modal";

import "./registerServiceWorker";
import "./plugins/axios";

Vue.config.productionTip = false;

var firebase = require("firebase/app");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9SLLJvSLTKeX_ICLB1xQP4aXlo4TnUYA",
  authDomain: "dev-tokpets-pwa-c6c74.firebaseapp.com",
  databaseURL: "https://dev-tokpets-pwa-c6c74.firebaseio.com",
  projectId: "dev-tokpets-pwa-c6c74",
  storageBucket: "dev-tokpets-pwa-c6c74.appspot.com",
  messagingSenderId: "535510308350"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

Vue.use(VModal);
Vue.use(VueAnalytics, {
  id: "UA-128950882-1",
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
