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
    ></v-text-field>
    <v-row>
      <v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      </v-col>
    </v-row>
    <v-row class="text-center" >
      <v-col>
      <v-btn class="white--text"
          elevation="0"
          padless color="#2A537A"
          width="150"
             height="100"
      >
        <v-icon size="40px">
          mdi-dog</v-icon>
        Perros
      </v-btn>
    </v-col>
    <v-col>
    <v-btn class="white--text"
        elevation="0"
        padless color="#2A537A"
           width="150"
           height="100"
    >
      <v-icon size="40px">mdi-cat</v-icon>
      Gatos</v-btn>
    </v-col>
    <v-col>
    <v-btn class="white--text"
        elevation="0"
        padless color="#2A537A"
           width="150"
           height="100"
    ><v-icon size="40px">mdi-home-map-marker</v-icon>
      Refugios</v-btn>
    </v-col>
    </v-row>
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
  background-position: center center;
  height: 447px;
}
</style>