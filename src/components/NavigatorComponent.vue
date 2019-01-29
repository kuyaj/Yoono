<template>
  <div id="NavigatorComponent">
    <div class="navigator">
      <div class="navigator-brand">{{ brand_name }}</div>
      <div class="navigator-name">{{ credentials.username }}</div>
      <div class="navigator-count">{{ collectionCount }}</div>
    </div>
    <div class="navigator navigator-menu">
      <div class="navigator-item"><i class="material-icons">whatshot</i></div>
      <div class="navigator-item">
        <router-link class="navigator-logout" to="/login">
          <i class="material-icons">lock_open</i>
        </router-link>
      </div>

      <div>
        <div
          @click="funcToggleSearch"
          v-if="toggleSearch"
          class="navigator-item"
        >
          <i class="tiny material-icons">edit</i>
        </div>
        <div @click="funcToggleSearch" v-else class="navigator-item">
          <i class="tiny material-icons">search</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "NavigatorComponent",
  data() {
    return {
      brand_name: "Yoono"
    };
  },
  computed: {
    ...mapState(["toggleSearch", "collectionCount", "credentials"])
  },
  methods: {
    ...mapMutations(["TOGGLE_SEARCH"]),
    funcToggleSearch() {
      this.TOGGLE_SEARCH();
    }
  }
};
</script>
<style scoped>
.navigator {
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  background: #ffff;
}
.navigator-brand {
  margin: 9px;
  font-size: 14px;
  font-family: "Coiny", cursive;
}

.navigator-name {
  margin: 9px;
  font-size: 14px;
  font-family: "Roboto Slab", serif;
}

.navigator-count {
  margin: 9px;
  font-size: 15px;
  font-family: "Indie Flower", cursive;
}

.navigator-item {
  padding: 9px;
  cursor: default;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}

.navigator-logout {
  text-decoration: none;
  color: white;
}
.navigator-menu {
  background-color: #ff7979;
  color: #ffff;
  font-size: 19px;
  font-family: "Indie Flower", cursive;
  font-weight: bold;
  padding: 7px;
}
</style>
