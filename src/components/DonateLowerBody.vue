<template>
  <v-container>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-row>
      <v-col align="center">
        <v-select
            outlined
            filled
            style="width: 500px"
            v-model="selectedName"
            label="Nombre del refugio"
            :items="sheltersName"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-select
            outlined
            filled
            style="width: 500px"
            v-model="selectedType"
            label="Tipo de ayuda"
            :items="tipos"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
<!--        <TextFields-->
<!--            label="Número de teléfono"-->
<!--            :rules="phoneRules"-->
<!--        />-->
        <v-text-field
            outlined
            filled
            style="width: 500px"
            v-model="phoneNumber"
            label="Número de teléfono"
            :rules="phoneRules"
            required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn
            padless color="#2A537A"
            class="white--text"
            :disabled="!valid"
            @click="sendMessage"

        >
          {{ enviar ? 'Enviar mensaje' : 'Enviado' }}
        </v-btn>
      </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>

<script>
// import TextFields from "@/components/TextFields";
// import SelectFields from "@/components/SelectFields";
import {collection, getDocs} from "firebase/firestore";
import db from "@/firebase/initFirebase";
export default {
  name: "DonateLowerBody",
  components: {/*SelectFields, TextFields*/},
  data: () => ({
    enviar: true,
    valid: true,
    selectedName: '',
    selectedType: '',
    phoneNumber: '',
    phoneRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres",
      v => (v.length > 0 && /^[0-9]+$/.test(v)) || "Ingrese un teléfono válido (solo números).",
    ],
    sheltersName: [],
    tipos: ["QUIERO DONAR DINERO", "QUIERO DONAR ALIMENTO", "QUIERO DONAR UTILES"]
  }),
  methods: {
    async getShelters(){
      const querySnapshot = await getDocs(collection(db, "shelters"));
      querySnapshot.forEach((doc) => {
        this.sheltersName.push(doc.data().name);
        // console.log(this.sheltersArray)
      });
    },
    sendMessage(){
      this.enviar = !this.enviar;
      setTimeout(() => {
        this.enviar = !this.enviar;
        this.selectedName = '';
        this.selectedType = '';
        this.phoneNumber = '';
      }, 2000);

    },
  },
  watch:{
    $getShelters(){
      this.getShelters();
    }
  },
  beforeMount() {
    this.getShelters();
  }
}
</script>

<style scoped>

</style>