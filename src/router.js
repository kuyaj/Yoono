import Vue from "vue";
import Router from "vue-router";

import LoginComponent from "./authComponents/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "home"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/home",
      name: "home",
      component: HomeComponent
    }
  ]
});
