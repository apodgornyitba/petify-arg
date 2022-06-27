<template>
  <v-toolbar
    elevation="0"
    padless color="#2A537A"
  >
    <v-row class="text-center">
      <v-col>
        <v-btn
            v-if="!this.$store.getters.isLoggedIn"
            text
            color="white"
            to="/signin"
        >Mi perfil</v-btn>
        <v-btn
            v-if="this.$store.getters.isLoggedIn"
            text
            color="white"
            to="/userprofile"
        >Mi perfil</v-btn>
      </v-col>
      <v-col>
        <v-btn
            text
            color="white"
            to="/adopt"
        >Adoptá</v-btn>
      </v-col>
      <v-col>
        <v-btn
            text
            color="white"
            to="/donaterefugio"
        >Quiero ayudar</v-btn>
      </v-col>
      <v-col>
        <v-btn
            text
            color="white"
            to="/infoView"
        >Información</v-btn>
<!--        tambien le podemos poner "Tips"-->
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>

</style>