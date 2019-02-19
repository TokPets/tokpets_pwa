import Vue from "vue";
import Router from "vue-router";
import Login from "./../views/Login";
import SignIn from "./../views/Login/SignIn";
import SignUp from "./../views/Login/SignUp";

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
      path: "/login/signin",
      name: "login/signin",
      component: SignIn
    },
    {
      path: "/login/signup",
      name: "login/signup",
      component: SignUp
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
