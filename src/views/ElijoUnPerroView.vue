<template>
  <div>
    <tool-bar/>
    <v-container fluid class="hero">
      <v-row class="text-center">
       <v-col align="center">
<!--         <v-img :src="require('../assets/perrito1.jpg')" max-width="300px" height="425"/>-->
         <v-img :src="this.pet.imgLink" max-width="300px" height="425"/>
       </v-col>
      </v-row>
    </v-container>
    <!-- HARDCODEADO -->
    <v-container fluid>
      <v-row>

        <v-col cols="8">
          <h1>
            {{pet.name}}:
          </h1>
          <h2 class="font-weight-medium">
            Descripción: {{pet.description}}

          </h2>
          <h2 class="font-weight-medium">
            Salud: {{pet.health}}

          </h2>
          <h2 class="font-weight-medium">
            Refugio: {{pet.shelter}}.
          </h2>
        </v-col>
        <v-col xs="10" :md="2" :lg="2">
            <v-row style="margin-top: 10px">
              <v-btn
                  v-if="!this.$store.getters.isLoggedIn"
                  color="#689FD2"
                  class="white--text"
                  elevation="2"
                  large
                  raised
                  x-large
                  block
                  to="/signin"

              >
                <v-icon size="40px">mdi-paw</v-icon>
                Quiero Adoptar</v-btn>
              <v-btn
                  v-if="this.$store.getters.isLoggedIn"
                  color="#689FD2"
                  class="white--text"
                  elevation="2"
                  large
                  raised
                  x-large
                  block
                  to="/FormularioAdopcion"

              >
                <v-icon size="40px">mdi-paw</v-icon>
                Quiero Adoptar</v-btn>
            </v-row>

            <v-row style="margin-top: 20px">
              <v-btn
                  v-if="!this.$store.getters.isLoggedIn"
                  color="#689FD2"
                  class="white--text"
                  elevation="2"
                  large
                  raised
                  x-large
                  block
                  to="/signin"
              >
                <v-icon size="40px">mdi-handshake</v-icon>

                Quiero Ayudar</v-btn>
              <v-btn
                  v-if="this.$store.getters.isLoggedIn"
                  color="#689FD2"
                  class="white--text"
                  elevation="2"
                  large
                  raised
                  x-large
                  block
                  to="/donaterefugio"
              >
                <v-icon size="40px">mdi-handshake</v-icon>

                Quiero Ayudar</v-btn>

            </v-row>

        <v-row style="margin-top: 20px">
<!--          <v-btn-->
<!--              v-if="!this.$store.getters.isLoggedIn"-->
<!--              color="#689FD2"-->
<!--              class="white&#45;&#45;text"-->
<!--              elevation="2"-->
<!--              large-->
<!--              raised-->
<!--              x-large-->
<!--              block-->
<!--              to="/signin"-->
<!--          >-->
<!--            <v-icon size="40px">mdi-heart-outline</v-icon>-->

<!--           Favorito</v-btn>-->
<!--          v-if="this.$store.getters.isLoggedIn" esto va en la 115-->
<!--          <v-btn-->

<!--              color="#689FD2"-->
<!--              class="white&#45;&#45;text"-->
<!--              elevation="2"-->
<!--              large-->
<!--              raised-->
<!--              x-large-->
<!--              block-->
<!--              @click="show = !show"-->
<!--          >-->
<!--            <v-icon size="40px">{{!show ? 'mdi-heart-outline' : 'mdi-heart' }}</v-icon>-->

<!--            Favorito</v-btn>-->


        </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
import {getDoc, doc} from "firebase/firestore";
import db from "../firebase/initFirebase"
export default {
  name: "elijoPerro",
  components: {ToolBar},
  data() {
    return {
      pet: {},
      show: false
    }
  },
  methods:{
    async getPet(){
      const id = localStorage.getItem("id");
      const docs = await getDoc(doc(db, "pets", id));
        this.pet = docs.data();
        // console.log(("Pet:", this.pet));
      // console.log(this.pet.imgLink.toString());

    }
  },
  watch:{
    $getPet(){
      this.getPet();
    },
  },
  beforeMount() {
    this.getPet();
  }
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center center;
  height: 447px;
}
</style>