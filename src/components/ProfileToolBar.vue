<template>
  <v-toolbar
      elevation="0"
  >
    <v-row class="text-center">
      <v-col>
        <v-btn
            text
            padless color="#689FD2"
            to="/sobremi"
        >Sobre mi</v-btn>
      </v-col>
      <v-col>
        <v-btn
            text
            padless color="#689FD2"
            to="/adopcion"
        >Perfil de adopción</v-btn>
      </v-col>
      <v-col>
        <v-btn
            text
            padless color="#689FD2"
            to="/configuracion"
        >Configuración</v-btn>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: "ProfileToolBar"
}
</script>

<style scoped>

</style>