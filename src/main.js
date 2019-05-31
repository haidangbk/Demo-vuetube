import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'


Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyA0ha-TPFqMi2I5wBWx0vvSmPJNKv_yExU",
  authDomain: "vuetube-4692f.firebaseapp.com",
  databaseURL: "https://vuetube-4692f.firebaseio.com",
  projectId: "vuetube-4692f",
  storageBucket: "vuetube-4692f.appspot.com",
  messagingSenderId: "936323178208",
  appId: "1:936323178208:web:055918add3ecf6e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
