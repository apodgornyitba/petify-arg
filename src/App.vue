<template>
  <v-app id="app">
    <AppHeader/>
    <v-main>
      <v-container
          fluid
          fill-height
          fill-width
          class="justify-center align-center"
      >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">

#app {
  font-family: 'Arima Madurai', cursive;
  background-color: #EFEEF1;
}


@import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100;400&display=swap');
</style>
