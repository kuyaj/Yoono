<template>
  <div id="app"><router-view></router-view></div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["authenticated"])
  },
  methods: {
    ...mapMutations(["SET_AUTHENTICATED"]),
    logout() {
      this.SET_AUTHENTICATED(false);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16px;
}
</style>
