<template>
  <div>
    <tool-bar/>
    <v-container fluid class="hero">
      <v-row class="text-center">
       <v-col align="center">
         <v-img :src="require('../assets/perrito1.jpg')" max-width="300px" height="425"/>
       </v-col>

      </v-row>

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

        <v-col align="rigth">

          <v-btn
              color="#689FD2"
              class="white--text"
              elevation="2"
              large
              raised
              x-large
              to="/perros"
          >
            <v-icon size="40px">mdi-dog</v-icon>
            Quiero Adoptar</v-btn>

        </v-col>

        <v-col align="rigth">

          <v-btn
              color="#689FD2"
              class="white--text"
              elevation="2"
              large
              raised
              x-large
              to="/perros"
          >
            <v-icon size="40px">mdi-dog</v-icon>
            Quiero Ayudar</v-btn>
<!--          COMENTARIO: DESPUES CAMBIAR EL ICONO-->

        </v-col>

      </v-row>

    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "elijoPerro",
  components: {ToolBar}
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