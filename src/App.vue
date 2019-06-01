<template>
  <div id="app">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">VueTube</a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="ShowNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="ShowNavbar" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>

        <div class="navbar-end" v-if="!isAuthenticated">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/signup" class="button is-primary">Sign Up</router-link>
              <router-link to="/login" class="button is-light">Log in</router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end" v-else>
          <div class="navbar-item">
            <div class="buttons">
              <button
                class="button is-primary"
                @click="showCategoryForm = !showCategoryForm"
              >Add Category</button>
              <button class="button is-primary" @click="logOut">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- <div id="nav" class="is-centered breadcrumb has-succeeds-separator">
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
    </div>-->
    <div class="modal" :class = "{ 'is-active' : showCategoryForm}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
        <form @submit.prevent="addCategory">
          <div class="field ">
            <h2 class="title is-2 has-text-danger">Title Category</h2>
          </div>
          <div class="field">
            <input type="text" class="input" v-model="title">
          </div>
          <div class="field">
            <button class="button is-success">Add</button>
          </div>
        </form>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="showCategoryForm = !showCategoryForm"></button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase";
import {db} from './main'
export default {
  data() {
    return {
      isAuthenticated: false,
      showCategoryForm: false,
      title: ''
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
    },
    addCategory(){
      const category = {
        title: this.title
      }
      db.collection('categories').add(category)
      this.showCategoryForm = false
      this.title = ''
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
