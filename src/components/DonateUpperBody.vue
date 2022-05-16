<template>
<v-container>
  <v-row>
    <v-col align="center">
      <h2>
        Quiero ayudar
      </h2>
    </v-col>
  </v-row>
  <v-toolbar
      elevation="0"
  >
    <v-row class="text-center">
      <v-col>
        <v-btn x-large
            text
            padless color="#689FD2"
            to="/donaterefugio"
        >Refugio</v-btn>
      </v-col>
      <v-col>
        <v-btn x-large
            text
            padless color="#689FD2"
            to="/adopcion"
        >Animal</v-btn>
      </v-col>
    </v-row>
  </v-toolbar>
</v-container>
</template>

<script>
export default {
  name: "DonateUpperBody"
}
</script>

<style scoped>

</style>