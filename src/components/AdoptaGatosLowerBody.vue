<!--COMENTARIO: LAS IMAGENES SON ILUSTRATIVAS, ESTO SE HACE CON INFO DEL BACK-->

<template>
  <div>
    <v-container>
      <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
        <v-col>
          <div class="subheading pt-4">
            Boris
          </div>
          <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Sebastian
          </div>
          <v-img :src="require('../assets/gatito2.jpg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Mariana
          </div>
          <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Laura
          </div>
          <v-img :src="require('../assets/gatito2.jpg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Jose Luis
          </div>
          <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  name: "AdoptaGatos",
  components: {}
}
</script>

<style scoped>

</style>