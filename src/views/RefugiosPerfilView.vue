<template>
  <div>
    <ToolBar/>
    <v-container>
      <v-row style="margin-top: 30px; margin-right: 10px; margin-bottom: 20px">
         <!-- <v-img  max-height="150"
                  max-width="150"
                  style="border-radius: 50%"
                  :src="require('@/assets/Refugios/patitas-al-rescate.png')"
          /> -->
        <v-col style="margin-left: 50px">
          <v-row>
          <h1 class="blue--text text--darken-4">
            {{ shelter.name }}
          </h1>
          </v-row>
          <v-row>
          <h3 style="color: cornflowerblue">Contacto: @{{ shelter.username }}</h3>
      </v-row>
      <v-row>
          <h3 style="color: cornflowerblue">Ubicación: {{ shelter.address }}</h3>
      </v-row>
        </v-col>
        <v-col>
          <v-row>
          <v-btn
              v-if="!this.$store.getters.isLoggedIn"
              class="white--text"
              elevation="0"
              padless color="red"
              width="150"
              height="40"
              to="/signin"
          >Denunciar
            <v-icon> mdi-message-alert-outline</v-icon>
          </v-btn>
            <v-btn
                v-if="this.$store.getters.isLoggedIn"
                class="white--text"
                elevation="0"
                padless color="red"
                width="150"
                height="40"
                to="/denunciar"
            >Denunciar
              <v-icon> mdi-message-alert-outline</v-icon>
            </v-btn>
          </v-row>
          <v-row style="margin-top: 20px">
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="250"
                 height="40"
                 to="/RefugiosMascotas"
          >
            Nuestras mascotas
            <v-icon right size="30px">mdi-paw</v-icon>
          </v-btn>
          </v-row>


      <!--<v-row style="margin-top: 20px">
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="250"
                 height="40"
                 to="/transito"
          >
            Nuestros tránsitos
            <v-icon right size="30px">mdi-home-map-marker</v-icon>
          </v-btn>
      </v-row> -->
      <v-row style="margin-top: 20px">
          <v-btn
              v-if="!this.$store.getters.isLoggedIn"
              class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="250"
                 height="40"
                to="/signin"
          >
            Quiero ayudar
            <v-icon right size="30px">mdi-handshake</v-icon>
          </v-btn>

        <v-btn
            v-if="this.$store.getters.isLoggedIn" esto va en la linea
            class="white--text"
               elevation="0"
               padless color="#2A537A"
               width="250"
               height="40"
               to="/donaterefugio"
        >
          Quiero ayudar
          <v-icon right size="30px">mdi-handshake</v-icon>
        </v-btn>
      </v-row>
      </v-col>
      </v-row>
    </v-container>
    <v-divider class="blue darken-4"/>
    <v-container class="align-center justify-center text-center">
      <v-row>
        <v-col>
          <GoogleMap/>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import ToolBar from "@/components/Toolbar";
import GoogleMap from "@/components/GoogleMap";
import {doc, getDoc} from "firebase/firestore";
import db from "@/firebase/initFirebase";
export default {
  name: "PerfilRefugios",
  components: {ToolBar, GoogleMap},
  data() {
    return {
      shelter: {},
    }
  },
  methods:{
    async getShelter(){
      const id = localStorage.getItem("id");
      const docs = await getDoc(doc(db, "shelters", id));
      localStorage.setItem("ShelterName", docs.data().name);
      this.shelter = docs.data();
      //FIX: PORQUE NO MUESTRA LA INFO??

    }
  },
  watch:{
    $getShelter(){
      this.getShelter();
    },
  },
  beforeMount() {
    this.getShelter();
  }
}
</script>

<style scoped>

</style>