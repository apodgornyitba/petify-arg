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
        v-if="!this.$store.getters.isLoggedIn"
        text
        padless color="#2A537A"
        to="/register"
    >Registrate</v-btn>
    <h2
      v-if="!this.$store.getters.isLoggedIn"
    >
      |
    </h2>
    <v-btn
        v-if="!this.$store.getters.isLoggedIn"
        text
        padless color="#2A537A"
        to="/signin"
    >Ingresá</v-btn>
    <div>
      <h2
          v-if="this.$isUserLoggedIn"
      >
        Bienvenido {{this.$getName}}
      </h2>
      <h2
          v-if="this.$isShelterLoggedIn"
      >
        Bienvenido {{this.$getShelterName}}
      </h2>
    </div>
  </v-app-bar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'AppHeader',
  data:() => ({
    user: {},
  }),
  computed: {
    ...mapGetters("user", {
            $getName: "getName",
            $isUserLoggedIn: "isUserLoggedIn",
          }),
    ...mapGetters("shelter",{
            $getShelterName: "getName",
            $isShelterLoggedIn: "isShelterLoggedIn",
          }),
  },
  methods:{

  },
}
</script>

<style>
</style>