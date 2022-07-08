<template>
  <div>
    <ToolBar/>
    <v-container class="justify-center text-center align-center">
      <v-row style="margin-top: 10px" class="text-center">
        <v-col>
        <h2> INGRESE A SUS ANIMALES </h2>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="text-center">
      <v-col>
        <h4> Solo puede ingresar de a uno </h4>
      </v-col>
        </v-row>
      <v-row class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
<!--          <TextFields v-model="name" label="Nombre"></TextFields>-->
          <v-text-field
              outlined
              filled
              v-model="name"
              label="Nombre"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
<!--          <TextFields v-model="imgLink" label="Link a imagen"></TextFields>-->
          <v-text-field
              outlined
              filled
              v-model="imgLink"
              label="Link a imagen"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
<!--          <TextFields v-model="description" label="Descripcion"></TextFields>-->
          <v-text-field
              outlined
              filled
              v-model="description"
              label="Descripción"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
<!--          <TextFields v-model="health" label="Salud"></TextFields>-->
          <v-text-field
              outlined
              filled
              v-model="health"
              label="Salud"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
<!--          <SelectFields v-model="type" label="Tipo de animal" :items=tipos></SelectFields>-->
          <v-select
              outlined
              filled
              v-model="type"
              label="Tipo de animal"
              :items="tipos"
          ></v-select>
        </v-col>
      </v-row>
      <v-btn
          color="#689FD2"
          class="white--text"
          elevation="2"
          large
          raised
          x-large
          @click="registerPet"
      >Registrar</v-btn>
    </v-container>
  </div>
</template>

<script>

// import SelectFields from "@/components/SelectFields";
// import TextFields from "@/components/TextFields";
import ToolBar from "@/components/Toolbar";
import {doc, setDoc} from "firebase/firestore";
import db from "../firebase/initFirebase"
import {mapGetters} from "vuex";

export default {
  name: "CargarDatos",
  components: {ToolBar},
  data: () => ({
    tipos: ["PERRO", "GATO"],
    name: '',
    imgLink: '',
    description: '',
    health: '',
    type: '',
  }),
  computed:{
    ...mapGetters("shelter", {
      $getShelterName: "getShelterName",
    }),
  },
  methods:{
    async registerPet(){
        // console.log(this.name);
      const id = Math.floor(1000 + Math.random() * 9000).toString();
      // console.log("ID:", id);
      await setDoc(doc(db, "pets", id), {
          name: this.name,
          imgLink: this.imgLink,
          description: this.description,
          health: this.health,
          type: this.type,
          shelter: this.$getShelterName,
        });
    },
  }
}
</script>

<style scoped>

</style>