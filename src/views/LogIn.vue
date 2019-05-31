<template>
  <div>
    <h1>Log in</h1>
    <form @submit.prevent="logIn">
      <div class="field columns">
        <p class="control has-icons-left column is-4 is-centered is-offset-4">
          <input class="input" type="email" placeholder="Email" v-model="email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field columns">
        <!-- is-offset-??? ? là số khoảng trắng thụt vào -->
        <p class="control has-icons-left column is-4 is-centered is-offset-4">
          <input class="input" type="password" placeholder="Password" v-model="password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <button class="button is-success">Log In</button>
    </form>
    <hr>
    Login in : {{isAuthenticated}}
    <br>
    <button @click="logOut">Log out</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      isAuthenticated: false,
      error: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
      }
    });
  },
  methods: {
    logIn() {
      console.log("log in");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then( this.$router.push('/dashboard'))
        .catch(error => alert(error.message));
    },
    logOut() {
      console.log("log out");
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.isAuthenticated = false;
        });
    }
  }
};
</script>
