import db from "../../firebase/initFirebase"
import {doc, getDoc} from "firebase/firestore";

export default {
    namespaced: true,
    state: {
      userData: {},
    },
    getters: {
        data: state => {
            return state.userData
        },
        isLoggedIn(state) {
            return state.userData.id != null;
        },
        getId(state){
            return state.userData.id;
        },
        getFullName(state){
          return state.userData.name + state.userData.surname;
        },
        getDisplayName(state){
          return state.userData.displayName;
        },
        getInfo(state){
            return state.userData.info;
        },
        getEmail(state){
          return state.userData.info.email;
        },
    },
    mutations: {
        initializeStore(state){
          const plainItem = localStorage.getItem('userData');
          if(plainItem){
              state.userData = JSON.parse(plainItem);
          } else {
              state.userData = { id: null, name: '', surname: '', username: '', info: null};
          }
        },
        setId(state, id){
            state.userData.id = id;
        },
        setInfo(state, info){
            state.userData.info = info;
        },
        setName(state, name){
            state.userData.name = name;
        },
        setSurname(state, surname){
            state.userData.surname = surname;
        },
        setUsername(state, username){
          state.userData.username = username;
        },
    },
    actions: {
        update({dispatch}, {user}) {
            if (user) {
                dispatch("updateId", {user: user});
            } else {
                dispatch("removeId");
            }
        },
        async updateId({commit}, {user}) {
            localStorage.setItem("USER", user.uid);
            const docs = await getDoc(doc(db, "users", user.uid));
            commit("setInfo", user);
            commit("setId", user.uid);
            commit("setUsername", docs.data().username);
            commit("setName", docs.data().name);
            commit("setSurname", docs.data().surname);
        },
        removeId({ commit }){
          localStorage.removeItem("USER");
          commit("setId", null);
          commit("setInfo", null);
          commit("setName", '');
          commit("setSurname", '');
          commit("setUsername", '');
        },
    },
}