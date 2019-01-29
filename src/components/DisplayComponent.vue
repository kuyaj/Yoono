<template>
  <div id="DisplayComponent">
    <div v-cloak class="display">
      <ul v-cloak v-for="(item, index) in collections" :key="index">
        <span class="itemLink" @click="funcOpenNewTab(item.link);">
          {{ item.title }}</span
        >
        <button class="edit">Edit</button>
      </ul>
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
    ...mapMutations(["FROM_FIREBASE"]),
    funcOpenNewTab(link) {
      var win = window.open(link, "_blank");
      win.focus();
    }
  },
  mounted() {
    this.FROM_FIREBASE();
  }
};
</script>

<style scoped>
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
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  border: none;
  padding: 3px;
  color: #ecf0f1;
  background: #3498db;
}

.itemLink {
  cursor: default;
}
</style>
