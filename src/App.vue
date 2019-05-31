<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">VueTube</a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>

        <div class="navbar-end" v-if="!isAuthenticated">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <router-link to="/signup">Sign Up</router-link>
              </a>
              <a class="button is-light">
                <router-link to="/login">Log in</router-link>
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end" v-else>
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-primary" @click="logOut">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="nav" class="is-centered breadcrumb has-succeeds-separator">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li>
          <router-link to="/login">Log In</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      isAuthenticated: false
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
    logOut() {
      console.log("log out");
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.isAuthenticated = false;

          this.$router.push("/login");
        });
    }
  }
};
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
