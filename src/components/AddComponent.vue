<template>
  <div id="AddComponent">
    <div v-if="toggleSearch" class="input">
      <div class="input-field">
        <input 
            v-model="addItem.title"
            type="text" 
            name="title"  
            placeholder="title" />
      </div>
      <div class="input-field">
        <input 
            v-model="addItem.link"
            type="text" 
            name="link"
            placeholder="link" />
      </div>
      <div class="input-field">
        <select v-model="category">
          <option disabled>Choose category</option>
          <option v-for="option in categoryOptions" :key="option.value">
            {{ option.value }}
          </option>
        </select>
      </div>
      <div class="input-field">
        <button class="add-button">
          <i @click="funcAddData" class="tiny round material-icons">add</i>
        </button>
      </div>
    </div>

    <div v-else class="input">
      <div class="input-field">
        <input @keyup="searchKeyword" type="text" name="search" v-model="keyword" id="" placeholder="search" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations,mapActions } from "vuex";
export default {
  name: "AddComponent",
  computed: {
    ...mapState(["toggleSearch"])
  },
  data(){
    return {
       addItem: [],
       keyword: "",
       category:"Writing",
       categoryOptions: [
            { value: "Writing"},
            { value: "Foreign Language"},
            { value: "WWWH Questions"},
            { value: "Entertainment"},
            { value : "Programming Tools"},
            { value: "Programming Articles"},
            { value: "Astrology"},
            { value: "Politics"},
            { value: "Others"}
          ]
    }
  },
  methods: {
    ...mapMutations(["ADD_DATA", "SEARCH_FILTER"]),
    ...mapActions(["mutateKeyword"]),
    searchKeyword(){
      this.mutateKeyword(this.keyword)
    },
    funcAddData(){
      function isEmpty(str) {
        return !str || 0 === str.length
      }
      const item  = {
        category: this.category,
        title: this.addItem.title,
        link: this.addItem.link
      };

      if(true){
        this.ADD_DATA(item);
        this.addItem.title = "";
        this.addItem.link = "";
      } else {
        alert("Please fill in the blanks!");
      }
    }
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
.input-field select {
  width: 100%;
  border: 1px solid transparent;
  font-size: 16px;
  padding: 20px;
  box-shadow: 0 2px 2px lightgrey;
  -webkit-appearance: none;
  -moz-appearance: none;
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
