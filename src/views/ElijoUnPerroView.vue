<template>
  <div>
    <tool-bar/>
    <v-container fluid class="hero">
      <v-row class="text-center">
       <v-col align="center">
         <v-img :src="require('../assets/perrito1.jpg')" max-width="300px" height="425"/>
       </v-col>
      </v-row>
    </v-container>
    <!-- HARDCODEADO -->
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <h1>
            Nala:
          </h1>
          <h2 class="font-weight-medium">
            Descripción: Mestiza de pelo largo, juguetona, necesita
            pasear bastante. Es de tamaño mediano.

          </h2>
          <h2 class="font-weight-medium">
            Salud: Tiene todas las vacunas al día, no tiene alergias ni necesidades especiales.

          </h2>
          <h2 class="font-weight-medium">
            Refugio: La patita feliz.
          </h2>
        </v-col>
        <v-col xs="10" :md="2" :lg="2">
            <v-row style="margin-top: 10px">
<!--              <v-btn-->
<!--                  v-if="!this.$store.getters.isLoggedIn"-->
<!--                  color="#689FD2"-->
<!--                  class="white&#45;&#45;text"-->
<!--                  elevation="2"-->
<!--                  large-->
<!--                  raised-->
<!--                  x-large-->
<!--                  block-->
<!--                  to="/signin"-->

<!--              >-->
<!--                <v-icon size="40px">mdi-paw</v-icon>-->
<!--                Quiero Adoptar</v-btn>-->

<!--              v-if="this.$store.getters.isLoggedIn" va en la linea 49-->
              <v-btn

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
<!--              <v-btn-->
<!--                  v-if="!this.$store.getters.isLoggedIn"-->
<!--                  color="#689FD2"-->
<!--                  class="white&#45;&#45;text"-->
<!--                  elevation="2"-->
<!--                  large-->
<!--                  raised-->
<!--                  x-large-->
<!--                  block-->
<!--                  to="/signin"-->
<!--              >-->
<!--                <v-icon size="40px">mdi-handshake</v-icon>-->

<!--                Quiero Ayudar</v-btn>-->
<!--              v-if="this.$store.getters.isLoggedIn" esto va en la 82-->
              <v-btn

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
          <v-btn

              color="#689FD2"
              class="white--text"
              elevation="2"
              large
              raised
              x-large
              block
              @click="show = !show"
          >
            <v-icon size="40px">{{!show ? 'mdi-heart-outline' : 'mdi-heart' }}</v-icon>

            Favorito</v-btn>

        </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "elijoPerro",
  components: {ToolBar},
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.hero {
  background: url('../assets/nalaGigante.png');
  background-size: cover;
  background-position: center center;
  height: 447px;
}
</style>