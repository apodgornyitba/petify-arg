<template>
  <v-container>
    <ToolBar/>
    <v-container fluid class="hero">
      <v-text-field
          outlined
          filled
          label="buscar"
          append-outer-icon="mdi-magnify"
      ></v-text-field>
      <v-row class="text-center" style="margin-top: 50px"  >
        <v-col>
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="150"
                 height="100"
                 to="/perros"
          >
            <v-icon size="40px">mdi-dog</v-icon>
            Perros
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="150"
                 height="100"
                 to="/gatos"
          >
            <v-icon size="40px">mdi-cat</v-icon>
            Gatos</v-btn>
        </v-col>
        <v-col>
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="150"
                 height="100"
                 to="/refugios"
          ><v-icon size="40px">mdi-home-map-marker</v-icon>
            Refugios</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- COMENTARIO: CAMBIAR LAS IMAGENES POR LAS IMAGENES DE LA BASES DE DATOS: HACER UN FOR -->
      <v-container>
        <h1 class="text-center" >
          En adopción:
        </h1>
        <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
          <v-col>
          <v-img :src="require('../assets/perrito1.jpg')" max-width="250px"/>
          </v-col>
          <v-col>
          <v-img :src="require('../assets/perrito2.jpg')" max-width="250px"/>
          </v-col>
          <v-col>
          <v-img :src="require('../assets/perrito3.jpg')" max-width="250px"/>
          </v-col>
          <v-col>
            <v-img :src="require('../assets/perrito5.jpg')" max-width="250px"/>
          </v-col>
        </v-row>
      </v-container>
  </v-container>
</template>
<script>

import ToolBar from "@/components/Toolbar";
export default {
  name: 'HomeView',

  components: {ToolBar,},

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.hero {
  background: url('../assets/main_img.jpeg');
  background-size: cover;
  background-position: center center;
  height: 447px;
}
</style>

