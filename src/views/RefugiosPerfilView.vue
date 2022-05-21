<template>
  <div>
    <ToolBar/>
    <v-container>
      <v-row>
          <v-img  max-height="150"
                  max-width="150"
                  style="border-radius: 50%"
                  :src="require('@/assets/Refugios/patitas-al-rescate.png')"
          />
          <h1 class="blue--text text--darken-4" style="margin-left: 300px ; text-underline: grey">
            Patitas al rescate
            <v-icon>
              mdi-message-alert-outline
            </v-icon>
          </h1>
        <v-divider style="width: 500px"/>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="250"
                 height="40"
          >
            Nuestras mascotas
            <v-icon right size="30px">mdi-paw</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <h3 style="color: cornflowerblue">Contacto: @patitasalrescate</h3>
      </v-row>
      <v-row>
        <h3 style="color: cornflowerblue">Ubicación: Palermo, CABA</h3>
      </v-row>

    </v-container>
    <v-divider class="blue darken-4"/>
    <v-container>
      <v-row>
        <v-col>
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="250"
                 height="40"
          >
            Nuestros tránsitos
            <v-icon right size="30px">mdi-home-map-marker</v-icon>
          </v-btn>
        </v-col>
      </v-row>
        <v-row>
          <v-col>
            <v-btn class="white--text"
                   elevation="0"
                   padless color="#2A537A"
                   width="250"
                   height="40"
            >
              Quiero ayudar
              <v-icon right size="30px">mdi-home-map-marker</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      <v-img
          max-height="550"
          max-width="550"
          :src="require('@/assets/mapita.png')"/>
    </v-container>
  </div>

</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "PerfilRefugios",
  components: {ToolBar}
}
</script>

<style scoped>

</style>