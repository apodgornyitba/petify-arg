<template>
  <v-app>
    <v-main>
      <AppHeader/>
  <v-container>
    <v-row class="align-center text-center justify-center" style="margin-top: 20px; margin-bottom: 20px">
      <v-img :src="require('../assets/petifyLogo.jpeg')" max-width="300px"/>
    </v-row>
    <v-row class="align-center text-center justify-center">
      <v-col>
      <v-btn-toggle
          mandatory
          tile
          color="#2A537A"
          x-large
      >
        <v-btn width="600px">       USUARIO       </v-btn>
        <v-btn width="600px">        REFUGIO        </v-btn>
      </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row class="align-center text-center justify-center">
      <v-col class="align-center text-center justify-center">
    <v-card>
    <v-row class="align-center text-center justify-center">
      <v-col class="align-center text-center justify-center" cols="3">
        <v-text-field
            label="Nombre"
        ></v-text-field>
      </v-col>
      <v-col class="align-center text-center justify-center" cols="3">
        <v-text-field
            label="Apellido"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
          <v-text-field
              label="Nombre de usuario"
          ></v-text-field>
        </v-col>
      <v-col class="align-center text-center justify-center" cols="3">
        <v-text-field
            label="email"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="align-center text-center justify-center">
      <v-col class="align-center text-center justify-center" cols="3">
        <v-text-field
            label="Contraseña"
        ></v-text-field>
      </v-col>
      <v-col class="align-center text-center justify-center" cols="3">
        <v-text-field
            label="Confirmar contraseña"
        ></v-text-field>
      </v-col>
    </v-row>
    </v-card>
      </v-col>
      <v-col class="align-center text-center justify-center">
        <v-card>
          <v-row class="align-center text-center justify-center">
            <v-col class="align-center text-center justify-center" cols="3">
              <v-text-field
                  label="Nombre"
              ></v-text-field>
            </v-col>
            <v-col class="align-center text-center justify-center" cols="3">
              <v-text-field
                  label="Apellido"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="align-center text-center justify-center">
            <v-col class="align-center text-center justify-center" cols="3">
              <v-text-field
                  label="Nombre de usuario"
              ></v-text-field>
            </v-col>
            <v-col class="align-center text-center justify-center" cols="3">
              <v-text-field
                  label="email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="align-center text-center justify-center">
            <v-col class="align-center text-center justify-center" cols="3">
              <v-text-field
                  label="Contraseña"
              ></v-text-field>
            </v-col>
            <v-col class="align-center text-center justify-center" cols="3">
              <v-text-field
                  label="Confirmar contraseña"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="align-center text-center justify-center">
      <v-col class="align-center text-center justify-center" cols="3">
        <v-btn
            color="#689FD2"
            class="white--text"
            elevation="2"
            large
            raised
            x-large
        >REGISTRAR</v-btn>
      </v-col>
    </v-row>
  </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/Header";
export default {
  name: "RegisterView",
  components: {AppHeader},
}
</script>

<style scoped>

</style>