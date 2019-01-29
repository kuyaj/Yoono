<template>
  <div id="AddComponent">
    <div v-if="!toggleSearch" class="input">
      <div class="input-field">
        <input type="text" name="title" id="" placeholder="title" />
      </div>
      <div class="input-field">
        <input type="text" name="link" id="" placeholder="link" />
      </div>
      <div class="input-field">
        <button class="add-button">
          <i class="tiny round material-icons">add</i>
        </button>
      </div>
    </div>

    <div v-else class="input">
      <div class="input-field">
        <input type="text" name="search" id="" placeholder="search" />
      </div>
      <div class="input-field">
        <button class="add-button"><i class="material-icons">search</i></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AddComponent",
  computed: {
    ...mapState(["toggleSearch"])
  }
};
</script>

<style scoped>
.input {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  border: 1px solid transparent;
  padding: 20px;
  box-shadow: 0 1px 1px lightgrey;
}

.input-field {
  margin: 19px;
}

.input-field input {
  width: calc(100% - 40px);
  border: 1px solid transparent;
  font-size: 16px;
  padding: 20px;
  box-shadow: 0 2px 2px lightgrey;
}

.input-field .add-button {
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.3), inset 0px 3px 1px 1px white,
    inset 0px -2px 1px 1px rgba(204, 198, 197, 0.5);
  border: transparent;
  padding: 10px;
  border-radius: 50%;
  background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
  background-image: linear-gradient(top, #f4f1ee, #fff);
  outline: none;
}
i {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff7979;
}
</style>
