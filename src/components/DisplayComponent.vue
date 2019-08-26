<template>
  <div id="DisplayComponent">
    <div class="display">
        <div v-cloak v-for="(item, index) in collections" :key="index">
        <ul v-if="!item.isEditing">
          <span class="itemLink" @click="funcOpenNewTab(item.link);">
            {{ item.title }}  </span>
          <button class="edit" @click="funcToggleEditing(item);">Edit</button>
        </ul>
        <ul v-else>
          <span class="input-field">
            <input  
              type="text"
              v-model="item.title"
              @change="funcUpdateItem(item, index);"
            />
          </span>
          <button @click="funcToggleEditing(item);" class="cancel">
            Done
          </button>
          <button @click="funcRemoveItem(index);" class="remove">Remove</button>
        </ul> 
    </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "DisplayComponent",
  computed: {
    ...mapState(["collections"])
  },
  methods: {
    ...mapMutations(["FROM_FIREBASE","REMOVE_DATA","UPDATE_DATA"]),
    funcOpenNewTab(link) {
      var win = window.open(link, "_blank");
      win.focus();
    },
    funcToggleEditing(item) {
      item.isEditing = !item.isEditing;
    },
    funcRemoveItem(index) {
      this.REMOVE_DATA(index);
    },
    funcUpdateItem(item, index) {
      this.UPDATE_DATA({item, index});
    }
  },
  mounted() {
    this.FROM_FIREBASE();
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Hepta+Slab&display=swap');
.display {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  border: 1px solid transparent;
  padding: 20px;
}
ul {
  border: 1px solid transparent;
  list-style-type: none;
  padding: 10px;
  box-shadow: 0 2px 2px lightgrey;
  background: white;
}
ul li {
  padding: 20px;
  margin-bottom: 8px;
}
.edit {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  float: right;
  text-transform: uppercase;
  font-size: 10px;
  border: none;
  padding: 4px;
  color: #ffff;
  background: #3498db;
  border-radius: 10%;
}

.cancel {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  float: right;
  text-transform: uppercase;
  font-size: 10px;
  border: none;
  padding: 4px;
  color: #ffff;
  background: #2ecc71;
  border-radius: 10%;
  margin: 3px;
}
.remove {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  float: right;
  text-transform: uppercase;
  font-size: 10px;
  border: none;
  padding: 4px;
  color: #ffff;
  background: #ff4757;
  border-radius: 10%;
  margin: 3px;
}

input[type="text"] {
 font-family: 'Hepta Slab', serif;
  font-size: 16px;
  width: 85%;
  border: 1px solid #95a5a6;
  border-radius: 3px;
  padding: 6px;
  font-family: inherit;
}

.itemLink {
  cursor: default;
}
</style>
