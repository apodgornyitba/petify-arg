<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: 'Arima Madurai', cursive;
}


@import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100;400&display=swap');
</style>
