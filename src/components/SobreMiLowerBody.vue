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
              :disabled="!guardar"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              v-if="!this.$store.getters.isShelter"
              v-model="user.surname"
              :rules="nameRules"
              label="Apellido"
              outlined
              style="width: 500px"
              filled
              required
              :disabled="!guardar"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: -30px; margin-top: -30px"> <v-col><h3>¿Dónde vivís? </h3></v-col> </v-row>
      <v-row>
        <v-col>
          <v-select
              outlined
              filled
              style="width: 500px; margin-bottom: 15px"
              v-model="user.country"
              label="País"
              :items="paises"
              :disabled="!guardar"
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
              v-model="user.province"
              label="Provincia"
              :items="provincias"
              :disabled="!guardar"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
          <v-text-field
              v-if="!this.$store.getters.isShelter"
              v-model="user.localidad"
              label="Localidad"
              outlined
              style="width: 500px; margin-bottom: 15px"
              filled
              required
              :disabled="!guardar"
          ></v-text-field>
          <v-text-field
              v-if="this.$store.getters.isShelter"
              v-model="user.address"
              label="Dirección"
              outlined
              style="width: 500px; margin-bottom: 15px"
              filled
              required
              :disabled="!guardar"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
          <v-text-field
              v-model="user.postal"
              :rules="codigoPostalRules"
              label="Codigo Postal"
              outlined
              style="width: 500px; margin-bottom: 15px"
              filled
              required
              :disabled="!guardar"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-btn
              padless color="#2A537A"
              class="white--text"
              @click="guardar = true"
              v-if="!guardar"
          >
            Editar
          </v-btn>
        </v-col>
        <v-col cols="4">

          <v-btn padless color="#2A537A"
                 class="white--text"
                 :disabled="!valid || !guardar"
                 @click="updateProf"

          >{{ guardar? 'Guardar' : 'Guardado' }}</v-btn>
        </v-col>
      </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>

// import TextFields from "@/components/TextFields";
// import SelectFields from "@/components/SelectFields";
import {mapActions, mapGetters} from "vuex";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import db from "../firebase/initFirebase"


export default {
  name: "SobreMi",
  data: () => ({
    guardar: true,
    paises: ["Argentina",],
    provincias: ["CABA",],
    valid: true,
    nameRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres"
    ],
    codigoPostalRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 4) || "Superó el límite de caracteres",
      v => (v && /^[0-9]+$/.test(v)) || "Ingrese solo números"
    ],
    user: {},
    email: '',
    id: '',
    country: '',
    province: '',
    address: '',
    localidad: '',
    postal: '',
  }),
  computed:{
    ...mapGetters("user", {
      $getUserId: "getId",
      $getEmail: "getEmail",
      $getCountry: "getCountry",
      $getProvince: "getProvince",
      $getLocalidad: "getLocalidad",
      $getPostal: "getPostal",
    }),
    ...mapGetters("shelter", {
      $getShelterId: "getId",
      $getShelterCountry: "getCountry",
      $getShelterProvince: "getProvince",
      $getShelterAddress: "getAddress",
      $getShelterPostal: "getPostal",
    }),
  },
  ...mapActions("user", {
    $update: "update",
  }),
  ...mapActions("shelter",{

  }),
  methods:{
    async getUser(){
      if(!this.$store.getters.isShelter) {
        if (this.$getUserId) {
          console.log("UserId:", this.$getUserId);
          const docs = await getDoc(doc(db, "users", this.$getUserId));
          this.user = docs.data();
          console.log("User:", this.user);
          console.log("User Name:", this.user.name);
          this.email = this.$getEmail;
          this.id = this.$getUserId;
          this.country = this.$getCountry;
          this.province = this.$getProvince;
          this.localidad = this.$getLocalidad;
          this.postal = this.$getPostal;
        }
      }else if (this.$store.getters.isShelter){
        if(this.$getShelterId){
          console.log("ShelterId:", this.$getUserId);

          const docs = await getDoc(doc(db, "shelters", this.$getShelterId));
          this.user = docs.data();

          console.log("Shelter:", this.user);
          console.log("Shelter Name:", this.user.name);

          this.id = this.$getShelterId;
          this.country = this.$getShelterCountry;
          this.province = this.$getShelterProvince;
          this.localidad = this.$getShelterAddress;
          this.postal = this.$getShelterPostal;
        }
      }
    },
    async updateProf() {
      this.guardar = !this.guardar;
      if (!this.$store.getters.isShelter) {
        const userRef = doc(db, "users", this.$getUserId);
        await updateDoc(userRef, {
          name: this.user.name,
          surname: this.user.surname,
          country: this.user.country,
          province: this.user.province,
          localidad: this.user.localidad,
          postal: this.user.postal,
        });
      } else if (this.$store.getters.isShelter){
        const userRef = doc(db, "shelters", this.$getShelterId);
        await updateDoc(userRef, {
          name: this.user.name,
          country: this.user.country,
          province: this.user.province,
          address: this.user.address,
          postal: this.user.postal,
        });
      }
    }
  },
  watch: {
    $getUserId(){
      this.getUser();
    },
    $getShelterId(){
      this.getUser();
    },
  },
  beforeMount() {
      this.getUser();
  }
}
</script>

<style scoped>

</style>
