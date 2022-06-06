import db from "../../firebase/initFirebase"
import {doc, getDoc} from "firebase/firestore";

export default {
    namespaced: true,
    state: {
      userData: {},
      info: {},
      id: '',
      displayName: '',
      name: '',
      surname: '',
    },
    getters: {
        isLoggedIn(state) {
            return state.id != null;
        },
        getId(state){
            return state.id;
        },
        getFullName(state){
          return state.name + state.surname;
        },
        getDisplayName(state){
          return state.displayName;
        },
        getInfo(state){
            return state.info;
        },
        getEmail(state){
          return state.info.email;
        },
    },
    mutations: {
        setId(state, id){
            state.id = id;
        },
        setInfo(state, info){
            state.info = info;
        },
        setName(state, name){
            state.name = name;
        },
        setSurname(state, surname){
            state.surname = surname;
        },
        setUsername(state, username){
          state.username = username;
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