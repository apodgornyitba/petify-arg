<template>
  <div>
    <v-container class="justify-center align-center">
      <v-row style="margin-bottom: -30px"> <v-col> <h3>¿Cuál es tu nombre?</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields
              v-model="user.name"
              label="Nombre"
          ></TextFields>
        </v-col>
        <v-col>
          <TextFields
              v-model="user.surname"
              label="Apellido">
          </TextFields>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: -30px; margin-top: -30px"> <v-col><h3>¿Dónde vivís?</h3></v-col> </v-row>
      <v-row>
        <v-col>
        <TextFields label="País"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
        <TextFields label="Provincia"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
        <TextFields label="Localidad"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
        <TextFields label="Código Postal"></TextFields>
        </v-col>
        <v-col cols="4">
          <v-btn padless color="#2A537A" class="white--text">Guardar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import TextFields from "@/components/TextFields";
import {mapGetters} from "vuex";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import db from "../firebase/initFirebase"


export default {
  name: "SobreMi",
  components: {TextFields},
  data:() => ({
    user: {},
    email: '',
    id: '',
  }),
  computed: mapGetters("user", {
    $getUserId: "getId",
    $getEmail: "getEmail",
  }),
  methods:{
    async getUser(){
      if(this.$getUserId){
        const docs = await getDoc(doc(db, "users", this.$getUserId));
        this.user = docs.data();
        this.email = this.$getEmail;
        this.id = this.$getUserId;
      }
    },
    async updateProf(){
      const userRef = doc(db, "users", this.$getUserId);
      await updateDoc(userRef, {
        name: this.user.name,
        surname: this.user.surname,
        username: this.user.username,
      });
      this.$router.push("/userprofile");
    },
  },
  watch: {
    $getUserId(){
      this.getUser();
    }
  },
  beforeMount() {
    this.getUser();
  }
}
</script>

<style scoped>

</style>