<template>
  <v-app id="app">
    <AppHeader/>
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import AppHeader from "@/components/Header";
export default {
  components: {AppHeader}
}
</script>

<style lang="scss">

#app {
  font-family: 'Arima Madurai', cursive;
  background-color: #EFEEF1;
}


@import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100;400&display=swap');
</style>
