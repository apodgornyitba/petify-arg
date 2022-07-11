<template>
  <v-container>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-row>
      <v-col align="center">
        <SelectFields
            v-model="ref"
            label="Nombre del refugio"
            :items=sheltersName
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <SelectFields
            v-model="animal"
            label="Nombre del animal"
            :items="petsName"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <SelectFields
            v-model="help"
            :items=tipos
            label="Tipo de ayuda"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <TextFields
            v-model="phoneNumber"
            label="Número de teléfono"
            :rules="phoneRules"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn padless color="#2A537A"
               class="white--text"
               type="submit"
               :disabled="!valid"
        >
          Enviar mensaje

        </v-btn>
      </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>
<script>
import TextFields from "@/components/TextFields";
import SelectFields from "@/components/SelectFields";
import {collection, getDocs} from "firebase/firestore";
import db from "@/firebase/initFirebase";
export default {
  name: "DonateAnimalLowerBody",
  components: {SelectFields, TextFields},
  data: () => ({
    valid: true,
    phoneRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres",
      v => (v.length > 0 && /^[0-9]+$/.test(v)) || "Ingrese un teléfono válido (solo números).",
    ],
    phoneNumber: '',
    ref: '',
    animal: '',
    help: '',
    sheltersName: [],
    petsName: [],
    tipos: ["QUIERO TRANSITAR", "QUIERO TRASPORTAR", "QUIERO DONAR ALIMENTO", "QUIERO DONAR UTILES"],
  }),
  methods: {
    async getShelters(){
      const querySnapshot = await getDocs(collection(db, "shelters"));
      querySnapshot.forEach((doc) => {
        this.sheltersName.push(doc.data().name);
        console.log(this.sheltersName)
      });
    },
      async getPets(){
        const querySnapshot = await getDocs(collection(db, "pets"));
        querySnapshot.forEach((doc) => {
          this.petsName.push(doc.data().name);
          console.log(this.petsName)
        });
      },
  },
  watch:{
    $getShelters(){
      this.getShelters();
    },
    $getPets(){
      this.getPets();
    }
  },
  beforeMount() {
    this.getShelters();
    this.getPets();
  }
}
</script>

<style scoped>

</style>