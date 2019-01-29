import Vue from "vue";
import Vuex from "vuex";

import firebase from "./firebaseConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggleSearch: true,
    collectionCount: "",
    credentials: {
      username: "jboy",
      password: "09109117485"
    },
    collections: []
  },
  mutations: {
    TOGGLE_SEARCH() {
      this.state.toggleSearch = !this.state.toggleSearch;
    },
    FROM_FIREBASE() {
      firebase
        .database()
        .ref("yonno")
        .on("value", snapShot => {
          this.state.collectionCount = snapShot.numChildren() + " items";
          this.state.collections = snapShot.val();
        });
    }
  }
});
