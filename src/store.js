import Vue from "vue";
import Vuex from "vuex";

import firebase from "./firebaseConfig";
import {  
  getDataFromFirebase, 
  removeDataFromFirebase, 
  addDataToFirebase, 
  updateDataFromFirebase } from './firebaseFunctions';
Vue.use(Vuex);

export default new Vuex.Store({ 
  state: {
    db: firebase.database(),
    toggleSearch: true,
    credentials: {
      username: "angelo",
      password: "09109117485"
    },
    collections: [],
    search_keyword: ""
  },
  getters: {
    getCount(state){
      return state.collections.length;
    },
    filter_collections(state){
      return state.collections.filter((x) => x.title.match(new RegExp(state.search_keyword, "i")));
    }
  },
  actions: {
    changeName({commit, getters},name){
      commit("CHANGE_NAME", name);
    },
    mutateKeyword({commit}, keyword){
      commit("MUTATE_KEYWORD", keyword);
    }
  },
  mutations: {
    MUTATE_KEYWORD(state, keyword) {
        state.search_keyword = keyword;
    },
    CHANGE_NAME(state, name){
      state.credentials.username = name;
    },
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
    }
  }
});
