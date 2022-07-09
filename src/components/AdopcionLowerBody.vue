<template>
  <div>
    <v-container class="justify-center align-center">
      <v-row>
        <v-col>
          <v-row style="margin-bottom: -30px "> <v-col>
            <h3>Contanos un poco sobre vos</h3>
          </v-col> </v-row>
          <v-row>
            <v-col>
              <!--          <SelectFields-->
              <!--              :v-model="chosenPet"-->
              <!--              label="Mascota deseada"-->
              <!--              :items=mascota_deseada-->
              <!--          ></SelectFields>-->
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Mascota deseada"
                  :items="mascota_deseada"
                  v-model="adoptInfo.chosenPet"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Futuro/s dueño/s"
                  :items="count_owners"
                  v-model="adoptInfo.numberOfOwners"
              ></v-select>
              <!-- <SelectFields  v-model="adoptInfo.numberOfOwners" label="Futuro/s dueño/s" :items=count_owners></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Cantidad de mascota/s actual/es"
                  :items="count_mascotas"
                  v-model="adoptInfo.numberOfPets"
              ></v-select>
              <!--  <SelectFields label="Cantidad de mascota/s actual/es" :items=count_mascotas></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Tipo de mascota/s previa/s"
                  :items="mascota_previa"
                  v-model="adoptInfo.typeOfPets"
              ></v-select>
              <!-- <SelectFields label="Tipo de mascota/s previa/s" :items=mascota_previa></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Espacio disponible (m2)"
                  :items="espacio_disponible"
                  v-model="adoptInfo.spaceAv"
              ></v-select>
              <!-- <SelectFields label="Espacio disponible (m2)" :items=espacio_disponible></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Espacio alrededor"
                  :items="espacio_alrededor"
                  v-model="adoptInfo.space"
              ></v-select>
              <!-- <SelectFields label="Espacio alrededor" :items=espacio_alrededor></SelectFields> -->
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row style="margin-bottom: -30px"> <v-col>
            <h3>Mi mascota ideal</h3>
          </v-col></v-row>
          <v-row>
            <v-col>
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Preferencia de edad"
                  :items="edad"
                  v-model="adoptInfo.age"
              ></v-select>
              <!-- <SelectFields label="Preferencia de edad" :items=edad></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Preferencia de sexo"
                  :items="sexo"
                  v-model="adoptInfo.gender"
              ></v-select>
              <!-- <SelectFields label="Preferencia de sexo" :items=sexo></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Preferencia de tamaño"
                  :items="sizes"
                  v-model="adoptInfo.size"
              ></v-select>
              <!-- <SelectFields label="Preferencia de tamaño" :items=size></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Personalidad"
                  :items="personalidad"
                  v-model="adoptInfo.personality"
              ></v-select>
              <!-- <SelectFields label="Personalidad" :items=personalidad></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Necesidades"
                  :items="necesidades"
                  v-model="adoptInfo.needs"
              ></v-select>
              <!-- <SelectFields label="Necesidades" :items=necesidades></SelectFields> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col style="margin-top: -50px">
              <v-select
                  style="width: 500px"
                  outlined
                  filled
                  label="Adopción con necesidades especiales"
                  :items="especial"
                  v-model="adoptInfo.specialNeeds"
              ></v-select>
              <!-- <SelectFields label="Adopción con necesidades especiales" :items=especial></SelectFields> -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="justify-center align-center text-center">
        <v-col>
          <v-btn padless color="#2A537A"
                 class="white--text"
                 @click="updateProf"
          >Guardar</v-btn>
          <v-img ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import db from "../firebase/initFirebase";


export default {
  name: "AdopcionLowerBody",
  components: {},
  data: () => ({
    mascota_deseada: ["Perro", "Gato"],
    count_owners:  ["1", "2", "3", "4", "5 o más"],
    count_mascotas: ["0", "1", "2", "3", "4", "5 o más"],
    mascota_previa: ["Perro", "Gato", "Ambos", "¡Esta será mi primera mascota!"],
    espacio_disponible: ["Menos de 20", "Entre 20 y 50", "Entre 50 y 100", "Más de 100"],
    espacio_alrededor: ["Sí", "No"],
    edad: ["Indiferente", "0-1 años", "2-4 años", "5-7 años", "7 o más"],
    sexo: ["Indiferente", "Macho", "Hembra"],
    sizes: ["Indiferente","Pequeño", "Mediano", "Grande"],
    personalidad: ["Energético", "Tranquilo", "Solitario", "Cariñoso"],
    necesidades: ["Alimento, paseos, cuidado de salud e higiene", "Alimento, cuidado de salud e higiene", "Alimento"],
    especial: ["Sí", "No"],
    adoptInfo: {},
    // user: {},
    //FIX: TENGO QUE AGREGARLAS ACA?
    chosenPet: '',
    numberOfOwners: '',
    numberOfPets: '',
    typeOfPets: '',
    spaceAv: '',
    space: '',
    age: '',
    gender: '',
    size: '',
    personality: '',
    needs: '',
    specialNeeds: '',
  }),
  computed:{
    ...mapGetters("user", {
      $getId: "getId",
    }),
  },
  ...mapActions("user", {
    $update: "update",
  }),
  methods:{
    async getUser(){
      if (this.$getUserId) {
        console.log("UserId:", this.$getId);
        const docs = await getDoc(doc(db, "users", this.$getId));
        this.adoptInfo = docs.data().user.adoptInfo;
        // this.adoptInfo = this.user.adoptInfo;
        console.log("adoptInfo:", this.adoptInfo);
        //FIX: TENGO QUE AGREGARLAS ACA?
        this.chosenPet = this.adoptInfo.chosenPet;
        console.log("ChosenPet:", this.adoptInfo.chosenPet);
        this.numberOfOwners = this.adoptInfo.numberOfOwners;
        console.log("numberOfOwners:", this.adoptInfo.numberOfOwners);
        this.numberOfPets = this.adoptInfo.numberOfPets;
        console.log("numberOfPets:", this.adoptInfo.numberOfPets);
        this.typeOfPets = this.adoptInfo.typeOfPets;
        console.log("typeOfPets:", this.adoptInfo.typeOfPets);
        this.spaceAv = this.adoptInfo.spaceAv;
        console.log("spaceAv:", this.adoptInfo.spaceAv);
        this.chosenPet = this.adoptInfo.space;
        console.log("space:", this.adoptInfo.space);
        this.age = this.adoptInfo.age;
        console.log("age:", this.adoptInfo.age);
        this.gender = this.adoptInfo.gender;
        console.log("gender:", this.adoptInfo.gender);
        this.size = this.adoptInfo.size;
        console.log("ChosenPet:", this.adoptInfo.size);
        this.personality= this.adoptInfo.personality;
        console.log("ChosenPet:", this.adoptInfo.personality);
        this.needs = this.adoptInfo.needs;
        console.log("ChosenPet:", this.adoptInfo.needs);
        this.specialNeeds = this.adoptInfo.specialNeeds;
        console.log("ChosenPet:", this.adoptInfo.specialNeeds);
      }
    },
    async updateProf(){
      console.log(this.chosenPet);
      console.log((this.adoptInfo.chosenPet));
      console.log(this.numberOfOwners);
      console.log((this.adoptInfo.numberOfOwners));
      console.log(this.numberOfPets);
      console.log((this.adoptInfo.numberOfPets));
      console.log(this.typeOfPets);
      console.log((this.adoptInfo.typeOfPets));
      console.log(this.spaceAv);
      console.log((this.adoptInfo.spaceAv));
      console.log(this.space);
      console.log((this.adoptInfo.space));
      console.log(this.age);
      console.log((this.adoptInfo.age));
      console.log(this.gender);
      console.log((this.adoptInfo.gender));
      console.log(this.size);
      console.log((this.adoptInfo.size));
      console.log(this.personality);
      console.log((this.adoptInfo.personality));
      console.log(this.needs);
      console.log((this.adoptInfo.needs));
      console.log(this.specialNeeds);
      console.log((this.adoptInfo.specialNeeds));
      const userRef = doc(db, "users", this.$getId);
      await updateDoc(userRef, {
        adoptInfo:{
          chosenPet: this.adoptInfo.chosenPet,
          numberOfOwners: this.adoptInfo.numberOfOwners,
          numberOfPets: this.adoptInfo.numberOfPets,
          typeOfPets: this.adoptInfo.typeOfPets,
          spaceAv: this.adoptInfo.spaceAv,
          space: this.adoptInfo.space,
          age: this.adoptInfo.age,
          gender: this.adoptInfo.gender,
          size: this.adoptInfo.size,
          personality: this.adoptInfo.personality,
          needs: this.adoptInfo.needs,
          specialNeeds: this.adoptInfo.specialNeeds
        },
      });
    }
    // showVModel(){
    //   console.log("chosenPet:", this.chosenPet);
    // },
  },
  watch:{
    $getId(){
      this.getUser();
    },
  },
  beforeMount() {
    this.getUser();
    // this.chosenPet = this.adoptInfo.chosenPet;
  }


}
</script>

<style scoped>

</style>