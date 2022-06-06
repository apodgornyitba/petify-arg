<template>
  <div>
    <v-container class="justify-center align-center">
      <v-form
              ref="form"
              v-model="valid"
              lazy-validation
      >
      <v-row style="margin-bottom: -30px"> <v-col> <h3>¿Cuál es tu nombre?</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields
              v-model="user.name"
              :rules="nameRules"
              label="Nombre"
              required
          ></TextFields>
        </v-col>
        <v-col>
          <TextFields
              v-model="user.surname"
              label="Apellido"
              :rules="nameRules"
              required
          ></TextFields>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: -30px; margin-top: -30px"> <v-col><h3>¿Dónde vivís? </h3></v-col> </v-row>
      <v-row>
        <v-col>
<!--         COMENTARIO: no tiene mucho sentido si solo estamos en arg-->
        <TextFields label="País"></TextFields>
        </v-col>
      </v-row>
      <v-row>
<!--        COMENTARIO: hay que hacer las reglas para esto-->
        <v-col style="margin-top: -50px">
        <TextFields
            label="Provincia"
            required
            :rules="nameRules"
        ></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
        <TextFields label="Localidad" :rules="nameRules"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
        <TextFields label="Código Postal" :rules="nameRules"></TextFields>
        </v-col>
        <v-col cols="4">
          <v-btn
              padless color="#2A537A"
              class="white--text"
              :disabled="!valid"
              @click="updateProf"
          >Guardar</v-btn>
        </v-col>
      </v-row>
      </v-form>
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
    valid: true,
    nameRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres"
    ],
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
        console.log("UserId:", this.$getUserId);
        const docs = await getDoc(doc(db, "users", this.$getUserId));
        this.user = docs.data();
        console.log("User:", this.user);
        console.log("User Name:", this.user.name);
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