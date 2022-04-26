<template>
  <v-app-bar app
             padless color="#EFEEF1"
             elevation="0"
  ><div class="d-flex align-center">
    <v-img :src="require('../assets/petifyLogo.jpeg')"
           max-height="160"
           max-width="160"
  />
  </div>

    <v-spacer>

    </v-spacer>
    <v-btn
        text
        padless color="#2A537A"
    >Registrate</v-btn>
    <h2>
      |
    </h2>
    <v-btn
        text
        padless color="#2A537A"
    >Ingresá</v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>