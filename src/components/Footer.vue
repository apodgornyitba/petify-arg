<template>
  <v-footer
      dark
      height="auto"
      elevation="0"
      padless color="#2A537A"
      class="justify-center"
  >
    <v-card
        flat
        tile
        color="#2A537A"
        class="white--text text-center"
    >
      <v-card-text class="white--text pt-1">
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text "
            dark
            icon
        >
          <v-icon dark size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <v-row
            align="center"
            class="mx-3"
        >

<!--          <h4>Sobre nosotros:</h4>-->
          Sobre nosotros:
          Somos el sitio de animales rescatados de Argentina. Buscamos unificar los refugios de animales en un solo
          sitio para agilizar y fomentar la adopción responsable.
          En este sitio encontrarán cada refugio con el que nos asociamos y los respectivos animales (tanto perros como gatos)
          que necesitan encontrar a su familia ideal. Hay formularios que completar para solicitar la adopción de una mascota, también
          ofrecemos la posibilidad de ayudar a los refugios, así tambien la opción de denunciar comportamiento extraño.
        </v-row>

<!--        <v-row-->
<!--            align="center"-->
<!--            class="mx-6"-->
<!--        >-->
<!--            Somos el sitio de animales rescatados de Argentina. Buscamos unificar los refugios de animales en un solo-->
<!--          sitio para agilizar y fomentar la adopción responsable.-->
<!--          <v-spacer></v-spacer>-->
<!--          En este sitio encontrarán cada refugio con el que nos asociamos y los respectivos animales (tanto perros como gatos)-->
<!--          que necesitan encontrar a su familia ideal. Hay formularios que completar para solicitar la adopción de una mascota, también-->
<!--          ofrecemos la posibilidad de ayudar a los refugios, así tambien la opción de denunciar comportamiento extraño.-->
<!--        </v-row>-->

<!--        <v-row-->
<!--            align="center"-->
<!--            class="mx-0"-->
<!--        >-->
<!--          En este sitio encontrarán cada refugio con el que nos asociamos y los respectivos animales (tanto perros como gatos)-->
<!--          que necesitan encontrar a su familia ideal. Hay formularios que completar para solicitar la adopción de una mascota, también-->
<!--          ofrecemos la posibilidad de ayudar a los refugios, así tambien la opción de denunciar comportamiento extraño.-->
<!--        </v-row>-->

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text justify-center">
        &copy;2022 — <strong>Petify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram'
    ]
  })
}
</script>

<style>
</style>