import db from "../../firebase/initFirebase"
import {doc, getDoc} from "firebase/firestore";

export default {
    namespaced: true,
    state: {
        info: {},
        adoptInfo: {},
        id: '',
        displayName: '',
        name: '',
        surname: '',
        country: '',
        province: '',
        localidad: '',
        postal: '',
        isLoggedIn: false,
    },
    getters: {
        isUserLoggedIn(state) {
            return state.isLoggedIn;
        },
        getId(state){
            return state.id;
        },
        getAdoptInfo(state){
            return state.adoptInfo;
        },
        getName(state){
            return state.name;
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
        getCountry(state){
            return state.country;
        },
        getProvince(state){
            return state.province;
        },
        getLocalidad(state){
            return state.localidad;
        },
        getPostal(state){
            return state.postal;
        }
    },
    mutations: {
        setId(state, id){
            state.id = id;
        },
        setIsLoggedIn(state, bool){
          state.isLoggedIn = bool;
        },
        setAdoptInfo(state, adoptInfo){
            state.adoptInfo = adoptInfo;
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
        setLocalidad(state, localidad){
            state.localidad = localidad;
        },
        setPostal(state, postal){
            state.postal = postal;
        },
        setCountry(state, country){
            state.country = country;
        },
        setProvince(state, province){
            state.province = province;
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
            commit("setAdoptInfo", user.adoptInfo);
            commit("setUsername", docs.data().username);
            commit("setName", docs.data().name);
            commit("setSurname", docs.data().surname);
            commit("setCountry", docs.data().country);
            commit("setProvince", docs.data().province);
            commit("setLocalidad", docs.data().localidad);
            commit("setPostal", docs.data().postal);
        },
        removeId({commit}) {
            localStorage.removeItem("USER");
            commit("setId", null);
            commit("setInfo", null);
            commit("setAdoptInfo", null);
            commit("setName", '');
            commit("setSurname", '');
            commit("setUsername", '');
            commit("setCountry", '');
            commit("setProvince", '');
            commit("setLocalidad", '');
            commit("setPostal", '');
        },
        setIsLoggedIn({commit}, bool) {
            commit("setIsLoggedIn", bool);
        }
    },
}