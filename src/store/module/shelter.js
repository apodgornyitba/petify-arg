import db from "../../firebase/initFirebase"
import {doc, getDoc} from "firebase/firestore";
export default {
    namespaced: true,
    state:{
        info: {},
        id: '',
        displayName: '',
        name: '',
        country: '',
        province: '',
        address: '',
        postal: '',
        isLoggedIn: false,
    },
    getters:{
        isShelterLoggedIn(state) {
            return state.isLoggedIn;
        },
        getId(state){
            return state.id;
        },
        getShelterName(state){
            return state.name;
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
        getAddress(state){
            return state.address;
        },
        getPostal(state){
            return state.postal;
        }
    },
    mutations:{
        setId(state, id){
            state.id = id;
        },
        setIsLoggedIn(state, bool){
            state.isLoggedIn = bool;
        },
        setInfo(state, info){
            state.info = info;
        },
        setName(state, name){
            state.name = name;
        },
        setUsername(state, username){
            state.username = username;
        },
        setAddress(state, address){
            state.address = address;
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
    actions:{
        update({dispatch}, {shelter}) {
            if (shelter) {
                dispatch("updateId", {shelter: shelter});
            } else {
                dispatch("removeId");
            }
        },
        async updateId({commit}, {shelter}) {
            localStorage.setItem("SHELTER", shelter.uid);
            const docs = await getDoc(doc(db, "shelters", shelter.uid));
            commit("setInfo", shelter);
            commit("setId", shelter.uid);
            commit("setUsername", docs.data().username);
            commit("setName", docs.data().name);
            commit("setAddress", docs.data().address)
            commit("setCountry", docs.data().country);
            commit("setProvince", docs.data().province);
            commit("setPostal", docs.data().postal);
        },
        removeId({ commit }){
            localStorage.removeItem("SHELTER");
            commit("setId", null);
            commit("setInfo", null);
            commit("setName", '');
            commit("setUsername", '');
            commit("setAddress", '');
            commit("setCountry", '');
            commit("setProvince", '');
            commit("setPostal", '');
        },
        setIsLoggedIn({commit}, bool) {
            commit("setIsLoggedIn", bool);
        },
    }
}
