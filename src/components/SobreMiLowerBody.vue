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
          <v-text-field
              v-model="user.name"
              :rules="nameRules"
              label="Nombre"
              outlined
              style="width: 500px"
              filled
              required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              v-model="user.surname"
              :rules="nameRules"
              label="Apellido"
              outlined
              style="width: 500px"
              filled
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: -30px; margin-top: -30px"> <v-col><h3>¿Dónde vivís? </h3></v-col> </v-row>
      <v-row>
        <v-col>
<!--        <SelectFields label="País" :items=paises v-model="paises[0]"></SelectFields>-->
          <v-select
              outlined
              filled
              style="width: 500px; margin-bottom: 15px"
              v-model="paises[0]"
              label="País"
              :items="paises"
          ></v-select>

        </v-col>
      </v-row>
      <v-row>
<!--        COMENTARIO: hay que hacer las reglas para esto-->
        <v-col style="margin-top: -50px">
<!--        <TextFields-->
<!--            label="Provincia"-->
<!--            required-->
<!--            :rules="nameRules"-->
<!--        ></TextFields>-->
          <v-select
              outlined
              filled
              style="width: 500px; margin-bottom: 15px"
              v-model="provincias[1]"
              label="Provincia"
              :items="provincias"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
<!--        <TextFields label="Localidad" :rules="nameRules"></TextFields>-->
          <v-text-field
              v-model="user.localidad"
              :rules="nameRules"
              label="Localidad"
              outlined
              style="width: 500px; margin-bottom: 15px"
              filled
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
<!--        <TextFields label="Código Postal" :rules="codigoPostalRules"></TextFields>-->
          <v-text-field
              v-model="user.postal"
              :rules="nameRules"
              label="Codigo Ppostal"
              outlined
              style="width: 500px; margin-bottom: 15px"
              filled
              required
          ></v-text-field>
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

// import TextFields from "@/components/TextFields";
// import SelectFields from "@/components/SelectFields";
import {mapGetters} from "vuex";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import db from "../firebase/initFirebase"


export default {
  name: "SobreMi",
  data:() => ({
    paises: ["Argentina",],
    provincias: ["CABA", "Buenos Aires"],
    valid: true,
    nameRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres"
    ],
    codigoPostalRules:[
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 4) || "Superó el límite de caracteres",
      v => (v && /^[0-9]+$/.test(v)) || "Ingrese solo números"
    ],
    user: {},
    email: '',
    id: '',
    localidad: '',
    postal: '',
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
        localidad: this.localidad,
        postal: this.postal,
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