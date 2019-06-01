import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import { firestorePlugin  } from 'vuefire';
import 'firebase/firestore';


Vue.config.productionTip = false;
Vue.use(firestorePlugin )

var firebaseConfig = {
  apiKey: "AIzaSyC1MrcgvSAdwAx0RfzhqE81r-_NO7zkP6g",
  authDomain: "vuetube-39045.firebaseapp.com",
  databaseURL: "https://vuetube-39045.firebaseio.com",
  projectId: "vuetube-39045",
  storageBucket: "vuetube-39045.appspot.com",
  messagingSenderId: "573273622962",
  appId: "1:573273622962:web:e598ce30083f9790"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
