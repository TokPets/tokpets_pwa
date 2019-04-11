// ------------------------------------ //
import Vue from "vue";
import Router from "vue-router";
// ------------------------------------ // 

// ------------------------------------ // 
import firebase from "firebase";
import page from "vue-analytics";
// ------------------------------------ // 

// ------------------------------------ // 
import Login from "./../views/Login";
import Signin from "./../views/SignIn";
// ------------------------------------ // 

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      path: "/main",
      name: "main",
      component: () =>
        import(/* webpackChunkName: "main" */ "./../views/Main.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./../views/About.vue")
    },
    {
      path: "/map",
      name: "map",
      component: () =>
        import(/* webpackChunkName: "main" */ "./../views/Map.vue")
    },
    {
      path: "/stats",
      name: "stats",
      component: () =>
        import(/* webpackChunkName: "main" */ "./../views/Stats.vue")
    }
  ]
});
