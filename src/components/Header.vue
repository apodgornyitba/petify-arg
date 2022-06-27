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
        v-if="!this.$getName"
        text
        padless color="#2A537A"
        to="/register"
    >Registrate</v-btn>
    <h2
      v-if="!this.$getName"
    >
      |
    </h2>
    <v-btn
        v-if="!this.$getName"
        text
        padless color="#2A537A"
        to="/signin"
    >Ingresá</v-btn>
    <h2
      v-if="this.$getName"
    >
      Bienvenido {{this.$getName}}
    </h2>
  </v-app-bar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'AppHeader',
  data:() => ({
    user: {},
  }),
  computed: mapGetters("user", {
    $getName: "getName"

  }),
  methods:{

  },
}
</script>

<style>
</style>