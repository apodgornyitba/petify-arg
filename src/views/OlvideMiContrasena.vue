<template>
  <v-container>
    <v-row/>
    <v-row class="align-center text-center justify-center" style="margin-top: 20px; margin-bottom: 20px">
      <v-img :src="require('../assets/petifyLogo.jpeg')" max-width="300px"/>
    </v-row>

    <v-row class="align-center text-center justify-center">
      <v-col>
        <h2 class="font-weight-medium"> Ingrese su mail para recuperar su contraseña</h2>
      </v-col>
    </v-row>
    <v-row class="align-center text-center justify-center">
      <v-col class="align-center text-center justify-center" cols="5">
        <v-text-field
            label="ejemplo@email.com"
        ></v-text-field>
      </v-col>
    </v-row>
      <v-row class="align-center text-center justify-center" style="margin-top: -40px">
      <v-col>
        <h4 class="font-weight-medium"> Recibirás un mail para la recuperación de tu contraseña</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OlvideMiContrasena",

}
</script>

<style scoped>

</style>