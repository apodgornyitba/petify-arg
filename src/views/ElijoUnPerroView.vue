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

    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <h1>
            Nala:
          </h1>
<!--          COMENTARIO: todo este texto en realidad lo va a ingresar cada refugio -> base de datos, back-->

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

            <v-col :xs="10" :md="2" :lg="2">
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
            </v-col>

            <v-col :xs="10" :md="2" :lg="2">
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

            </v-col>



<!--        <v-col align="rigth" cols="2">-->

<!--          <v-btn-->
<!--              color="#689FD2"-->
<!--              class="white&#45;&#45;text"-->
<!--              elevation="2"-->
<!--              large-->
<!--              raised-->
<!--              x-large-->
<!--              to="/FormularioAdopcion"-->

<!--          >-->
<!--            <v-icon size="40px">mdi-paw</v-icon>-->
<!--            Quiero Adoptar</v-btn>-->

<!--        </v-col>-->

<!--        <v-col align="rigth" >-->

<!--          <v-btn-->
<!--              color="#689FD2"-->
<!--              class="white&#45;&#45;text"-->
<!--              elevation="2"-->
<!--              large-->
<!--              raised-->
<!--              x-large-->
<!--              to="/donaterefugio"-->
<!--          >-->
<!--            <v-icon size="40px">mdi-handshake</v-icon>-->

<!--            Quiero Ayudar</v-btn>-->
<!--        </v-col>-->

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