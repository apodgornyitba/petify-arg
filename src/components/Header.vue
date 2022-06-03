<template>
  <v-app-bar app
             padless color="#EFEEF1"
             elevation="0"
  ><div class="d-flex align-center">
    <a href="/">
    <v-img :src="require('../assets/petifyLogo.jpeg')"
           max-height="160"
           max-width="160"
  />
      </a>
  </div>
    <v-spacer/>
    <!-- una vez que el usuario ingresa -->
    <v-btn
        text
        padless color="#2A537A"
        to="/register"
    >Registrate</v-btn>
    <h2>
      |
    </h2>
    <v-btn
        text
        padless color="#2A537A"
        to="/signin"
    >Ingresá</v-btn>
    <!-- v-if de user.id -->
    <!-- <h2>
      BIENVENIDO USER.NAME
    </h2> -->
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
</style>