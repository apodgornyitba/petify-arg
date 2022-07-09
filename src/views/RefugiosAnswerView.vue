<template>
  <div>
    <ToolBar/>
    <v-container  class="justify-center align-center">
      <h1>Respuesta de formulario</h1>
      <h2> {{ this.user.name }} {{ user.surname }}</h2>
      <v-row>
        <v-col>
          <v-row style="margin-bottom: -30px "> <v-col>
            <h3>Contanos un poco sobre vos</h3>
          </v-col> </v-row>
          <v-row>
            <v-col>
              <body> Mascota deseada: {{user.adoptInfo.chosenPet }} </body>
              <body> Futuro/s dueño/s: {{user.adoptInfo.numberOfOwners }} </body>
              <body> Cantidad de mascota/s actual/es: {{user.adoptInfo.numberOfPets }} </body>
              <body> Tipo de mascota/s previa/s: {{user.adoptInfo.typeOfPets }} </body>
              <body> Espacio disponible (m2): {{ user.adoptInfo.spaceAv }} </body>
              <body> Espacio alrededor: {{ user.adoptInfo.space }} </body>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row style="margin-bottom: -30px"> <v-col>
            <h3>Mi mascota ideal </h3>
          </v-col></v-row>
          <v-row>
            <v-col>
              <body > Preferencia de edad: {{ user.adoptInfo.age }} </body>
              <body> Preferencia de sexo: {{ user.adoptInfo.gender }} </body>
              <body> Preferencia de tamaño: {{ user.adoptInfo.size }} </body>
              <body> Personalidad: {{ user.adoptInfo.personality }} </body>
              <body> Necesidades: {{ user.adoptInfo.needs }} </body>
              <body> Adopción con necesidades especiales: {{ user.adoptInfo.specialNeeds }} </body>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- v-if no va si es refugio -->
    <!-- v-if si es un refugio deben aparecer la posibilidad de cargar su formulario -->
    <!--  <v-row style="margin-bottom: -30px; margin-top: -30px"> <v-col><h3>Ingrese el link a su formulario</h3></v-col> </v-row>
      <v-row>
        <v-col>
        <TextFields></TextFields>
        </v-col>
      </v-row> -->
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
import {getDoc, doc} from "firebase/firestore";
import db from "../firebase/initFirebase"
export default {
  name: "RefugiosAnswerView",
  components: {ToolBar},
  data() {
    return {
      user: {},
    }
  },
  methods:{
    async getUser(){
      const id = localStorage.getItem("id");
      const docs = await getDoc(doc(db, "users", id));
      this.user = docs.data();
      //FIX: PORQUE NO MUESTRA LA INFO??

    }
  },
  watch:{
    $getUser(){
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