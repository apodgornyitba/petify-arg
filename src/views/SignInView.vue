<template>
  <v-container>
    <v-container>
      <v-row class="align-center text-center justify-center" style="margin-top: 20px; margin-bottom: 20px">
        <v-img :src="require('../assets/petifyLogo.jpeg')" max-width="300px"/>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
        <v-text-field
            label="Nombre de usuario"
        ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
          <v-text-field
              label="Contraseña"
          ></v-text-field>
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
          >INGRESAR</v-btn>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" style="margin-top: -10px" cols="3">
          <a href="/recuperaciondecuenta">Olvidé mi contraseña</a>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
          <p class="subheading font-weight-regular">
            ¿No tenés cuenta?
            <a href="/register">Registrate aquí</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: "SignInView",
  components: {},
}
</script>

<style scoped>

</style>