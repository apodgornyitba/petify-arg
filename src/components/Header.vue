<template>
  <v-app-bar app
             padless color="#EFEEF1"
             elevation="0"
  ><div class="d-flex align-center">
    <a @click="goHome">
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
    <div
        v-if="this.$store.getters.isLoggedIn"
    >
      <h2
          v-if="this.$store.getters.isLoggedIn && this.$isUserLoggedIn"
      >
        Bienvenido {{this.$getName }}
      </h2>
      <h2
          v-if="this.$store.getters.isLoggedIn && this.$isShelterLoggedIn"
      >
        Bienvenido {{this.$getShelterName }}
      </h2>
    </div>
    <h2
        v-if="this.$store.getters.isLoggedIn"
        style="margin-right: 10px; margin-left: 10px"

    >
      |
    </h2>
    <div>
      <v-btn
          v-if="this.$store.getters.isLoggedIn"
          color="#689FD2"
          class="white--text"
          elevation="2"
          large
          raised
          x-large
          @click="logOut"
      >Cerras Sesión</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'AppHeader',
  data: () => ({
    user: {},
  }),
  computed: {
    ...mapGetters("user", {
      $getName: "getName",
      $isUserLoggedIn: "isUserLoggedIn",
    }),
    ...mapGetters("shelter", {
      $getShelterName: "getShelterName",
      $isShelterLoggedIn: "isShelterLoggedIn",
    }),
  },
  methods: {
    ...mapActions("user", {
      $updateUser: "update",
      $setUserIsLoggedIn: "setIsLoggedIn",
    }),
    ...mapActions("shelter", {
      $updateShelter: "update",
      $setShelterIsLoggedIn: "setIsLoggedIn",
    }),
    logOut() {
      this.$store.commit("setIsLoggedIn", false);
      if (this.$isUserLoggedIn) {
        this.$setUserIsLoggedIn(false);
      }
      if (this.$isShelterLoggedIn) {
        this.$setShelterIsLoggedIn(false);
      }
      setTimeout(() => this.$router.push('/'), 500);
    },
    goHome(){
      setTimeout(() => this.$router.push('/'), 500);
    }
  }
}
</script>

<style>
</style>