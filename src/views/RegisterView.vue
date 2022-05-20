<template>
  <v-container>
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
          <v-btn width="600px" @click="habilitarusuario" >       USUARIO       </v-btn>
          <v-btn width="600px" @click="habilitarrefugio" >        REFUGIO        </v-btn>
        </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center">
      <v-card :disabled="!usuario">
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              label="Nombre"
          ></v-text-field>
        </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              label="Apellido"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
          <v-col class="align-center text-center justify-center" cols="5">
            <v-text-field
                label="Nombre de usuario"
            ></v-text-field>
          </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              label="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              label="Contraseña"
          ></v-text-field>
        </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              label="Confirmar contraseña"
          ></v-text-field>
        </v-col>
      </v-row>
      </v-card>
        </v-col>
        <v-col class="align-center text-center justify-center">
          <v-card :disabled="usuario">
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="10">
                <v-text-field
                    label="Nombre del Refugio"
                ></v-text-field>
              </v-col>

            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Nombre de usuario"
                ></v-text-field>
              </v-col>
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Contraseña"
                ></v-text-field>
              </v-col>
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Confirmar contraseña"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="5">
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
  </v-container>
</template>

<script>
export default {
  name: "RegisterView",
  components: {},
  data: () => ({
    usuario: true
  }),

  methods: {
    habilitarusuario() {
      this.usuario = true;
    },
    habilitarrefugio() {
      this.usuario = false;
    },
  }
}
</script>

<style scoped>

</style>