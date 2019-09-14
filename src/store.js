import Vue from "vue";
import Vuex from "vuex";

import firebase from "./firebaseConfig";
import { getDataFromFirebase, 
         addDataToFirebase, 
         updateDataFromFirebase,
         removeDataFromFirebase,
         filterDataFromFirebase
        } from "./helper_function"

Vue.use(Vuex);

export default new Vuex.Store({ 
  state: {
    db: firebase.database(),
    toggleSearch: true,
    collectionCount: "",
    credentials: {
      username: "angelo",
      password: "09109117485"
    },
    collections: []
  },
  mutations: {
    TOGGLE_SEARCH() {
      this.state.toggleSearch = !this.state.toggleSearch;
    },
    FROM_FIREBASE(state) {
      getDataFromFirebase(state)
    },
    ADD_DATA(state, item){
      addDataToFirebase(state, item);
    },
    REMOVE_DATA(state, key) {
      removeDataFromFirebase(state, key);
    },
    UPDATE_DATA(state, { item, key }) {
      updateDataFromFirebase(state, item, key);
    },
    SEARCH_FILTER(state, { child, keyword }) {
      filterDataFromFirebase(state, { child, keyword});
    }
  }
});
