import Vue from "vue";
import Vuex from "vuex";

import firebase from "./firebaseConfig";

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
    FROM_FIREBASE() {
      function reverseObject(object) {
        var newObject = {};
        var keys = [];
    
        for (var key in object) {
            keys.push(key);
        }
    
        for (var i = keys.length - 1; i >= 0; i--) {
            var value = object[keys[i]];
            newObject[keys[i]]= value;
        }       
    
        return newObject;
      }
      firebase
        .database()
        .ref("yonno")
        .on("value", snapShot => {
          this.state.collectionCount = snapShot.numChildren() + " items";
          this.state.collections = reverseObject(snapShot.val());
        });
    },
    ADD_DATA(state, item){
      const { title, link, category } = item;
       state.db.ref("/yonno/").push({
        title: title,
        isEditing: false,
        link: link,
        category: category,
      })
    },
    REMOVE_DATA(state, index) {
      var answer = confirm("Do you really want to delete this data?");
      if (answer == true) {
        state.db.ref("/yonno/" + index).remove();
        alert("Data is now deleted.");
        return true;
      } else {
        alert("Delete canceled.");
        return false;
      }
    },
    UPDATE_DATA(state, item) {
      state.db.ref("/yonno/" + item.key).set(item.value);
    },
    SEARCH_FILTER(state, { child, keyword }) {
      state.db
        .ref("/yonno")
        .orderByChild(child)
        .startAt(keyword)
        .endAt(keyword.concat("\uf8ff"))
        .on("value", snap => {
          state.collections = snap.val();
        });
    }
  }
});
