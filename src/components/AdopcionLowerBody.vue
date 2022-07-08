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
                v-model="chosenPet"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Futuro/s dueño/s" :items=count_owners></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Cantidad de mascota/s actual/es" :items=count_mascotas></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Tipo de mascota/s previa/s" :items=mascota_previa></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Espacio disponible (m2)" :items=espacio_disponible></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Espacio alrededor" :items=espacio_alrededor></SelectFields>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row style="margin-bottom: -30px"> <v-col>
        <h3>Mi mascota ideal</h3>
        </v-col></v-row>
        <v-row>
          <v-col>
          <SelectFields label="Preferencia de edad" :items=edad></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Preferencia de sexo" :items=sexo></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Preferencia de tamaño" :items=size></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Personalidad" :items=personalidad></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Necesidades" :items=necesidades></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Adopción con necesidades especiales" :items=especial></SelectFields>
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import SelectFields from "@/components/SelectFields";
import {mapActions, mapGetters} from "vuex";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import db from "../firebase/initFirebase";


export default {
  name: "AdopcionLowerBody",
  components: {SelectFields},
  data: () => ({
    mascota_deseada: ["Perro", "Gato"],
    count_owners:  ["1", "2", "3", "4", "5 o más"],
    count_mascotas: ["0", "1", "2", "3", "4", "5 o más"],
    mascota_previa: ["Perro", "Gato", "Ambos", "¡Esta será mi primera mascota!"],
    espacio_disponible: ["Menos de 20", "Entre 20 y 50", "Entre 50 y 100", "Más de 100"],
    espacio_alrededor: ["Sí", "No"],
    edad: ["Indiferente", "0-1 años", "2-4 años", "5-7 años", "7 o más"],
    sexo: ["Indiferente", "Macho", "Hembra"],
    size: ["Indiferente","Pequeño", "Mediano", "Grande"],
    personalidad: ["Energético", "Tranquilo", "Solitario", "Cariñoso"],
    necesidades: ["Alimento, paseos, cuidado de salud e higiene", "Alimento, cuidado de salud e higiene", "Alimento"],
    especial: ["Sí", "No"],
    adoptInfo: {},
    user: {},
    chosenPet: '',
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
        this.user = docs.data();
        this.adoptInfo = this.user.adoptInfo;
        console.log("adoptInfo:", this.adoptInfo);
        this.chosenPet = this.adoptInfo.chosenPet;
        console.log("ChosenPet:", this.adoptInfo.chosenPet);
      }
    },
    async updateProf(){
      console.log(this.chosenPet);
      const userRef = doc(db, "users", this.$getId);
      await updateDoc(userRef, {
        adoptInfo:{
          chosenPet: this.chosenPet,
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