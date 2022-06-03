import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);

export default getFirestore(app);