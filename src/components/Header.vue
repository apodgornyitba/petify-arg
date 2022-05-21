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
    <!-- COMENTARIO: FLTA CODEAR QUE APAREZCA EL NOMBRE DE USUARIO-->
    <v-spacer>

    </v-spacer>

      <v-btn
          text
          icon
          color="#689FD2"
          to="/Notificaciones"
          large
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>

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
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>