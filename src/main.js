import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps';
import VueResource from 'vue-resource';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzs6LvWrghh3InI50ZGGmo5inQ1UAzU5w',
    libraries: 'places'
  },
});

Vue.use(VueResource);

Vue.http.options.root = 'petify-arg.firebaseapp.com'
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzs6LvWrghh3InI50ZGGmo5inQ1UAzU5w",
  authDomain: "petify-ce198.firebaseapp.com",
  databaseURL: "https://petify-ce198-default-rtdb.firebaseio.com",
  projectId: "petify-ce198",
  storageBucket: "petify-ce198.appspot.com",
  messagingSenderId: "335528341236",
  appId: "1:335528341236:web:21460374deb9a1e83d78a1",
  measurementId: "G-86ZT2PWKGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export{firestore};
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
