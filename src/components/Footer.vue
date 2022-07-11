<template>
  <v-footer
      dark
      height="auto"
      elevation="0"
      padless color="#2A537A"
      class="justify-center"
      app
  >

    <v-card
        flat
        tile
        color="#2A537A"
        class="white--text text-center"
    >
      <v-row>
        <v-col cols="2">
        <v-card-text class="white--text justify-center">
          &copy;2022 — <strong>Petify</strong>
        </v-card-text>
        </v-col>
        <v-col cols="9">
      <v-card-text class="white--text pt-0">
        <v-row
            align="center"
            style="margin-top: 5px"
        >
          Somos el sitio de animales rescatados de Argentina. Buscamos unificar los refugios de animales en un solo
          sitio para agilizar y fomentar la adopción responsable.
          En este sitio encontrarán cada refugio con el que nos asociamos y los respectivos animales
          que necesitan encontrar a su familia ideal. Hay formularios que completar para solicitar la adopción de una mascota, también
          ofrecemos la posibilidad de ayudar a los refugios, así tambien la opción de denunciar comportamiento extraño.
        </v-row>
      </v-card-text>
        </v-col>
        <v-col cols="1">
        <v-card-text class="white--text pt-1">
          <v-btn
              class="mx-3 white--text "
              dark
              icon
              href="https://www.instagram.com/petify.arg/?igshid=YmMyMTA2M2Y="
              target="_blank"
          >
            <v-icon dark size="24px" >
              mdi-instagram
            </v-icon>
          </v-btn>
        </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style>
</style>