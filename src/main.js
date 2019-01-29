import Vue from "vue";
import App from "./App";
import "./style.css";
import store from "./store.js";
import router from "./router.js";
import firebase from "./firebaseConfig.js";

Vue.use(firebase);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
