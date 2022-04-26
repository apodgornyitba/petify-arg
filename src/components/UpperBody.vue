<template>
  <v-container fluid class="hero">
    <v-row>
      <v-col class="text-center">

      </v-col>
    </v-row>
    <v-text-field
        outlined
        filled
        label="buscar"
        append-outer-icon="mdi-magnify"
        width="10px"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  name: "UpperBody"
}
</script>

<style scoped>
.hero {
  background: url('../assets/main_img.jpeg');
  background-size: cover;
  height: 447px;
}
</style>