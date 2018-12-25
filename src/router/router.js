import Vue from "vue";
import Router from "vue-router";
import Home from "./../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },{
      path: "/main",
      name: "main",
      component: () =>
        import(/* webpackChunkName: "main" */ "./../views/Main.vue")
    },{
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./../views/About.vue")
    },{
      path: "/map",
      name: "map",
      component: () =>
        import(/* webpackChunkName: "main" */ "./../views/Map.vue")
    },{
      path: "/stats",
      name: "stats",
      component: () =>
        import(/* webpackChunkName: "main" */ "./../views/Stats.vue")
    },
  ]
});
