<template>
  <div id="LoginComponent">
    <div class="navigator"><div class="navigator-brand">Yoono</div></div>
    <div class="login">
      <div class="input-field">
        <input
          type="text"
          name="username"
          v-model="input.username"
          placeholder="Username"
        />
      </div>
      <div class="input-field">
        <input
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Password"
          @keyup.enter="login"
        />
      </div>
      <div class="input-field">
        <button id="loginButton" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "LoginComponent",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState(["credentials"])
  },
  methods: {
    ...mapMutations(["SET_AUTHENTICATED"]),
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.credentials.username &&
          this.input.password == this.credentials.password
        ) {
          this.$router.replace({ name: "home" });
        } else {
          alert("The username and or password is correct!");
        }
      } else {
        alert("The username and password must be present!");
      }
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 600px) {
  .login {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    border: none;
    background: white;
    padding: 20px;
    margin: auto;
  }

  input-field input {
    width: 50%;
    border: 1px solid transparent;
    font-size: 16px;
    padding: 20px;
    box-shadow: 0 2px 2px lightgrey;
  }
}

.login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  border: none;
  background: #ecf0f1;
  padding: 20px;
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

.input-field button {
  border: 1px solid transparent;
  padding: 20px;
  background: #3498db;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

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
</style>
