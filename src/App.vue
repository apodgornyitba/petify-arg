<template>
  <v-app>
    <v-main>
      <AppHeader></AppHeader>
      <ToolBar/>
      <UpperBody/>
      <LowerBody/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>
<script>
import AppHeader from './components/Header';
import HelloWorld from './components/HelloWorld';
import ToolBar from './components/Toolbar';
import UpperBody from "@/components/UpperBody";
import LowerBody from './components/LowerBody';

export default {
  name: 'App',

  components: {
    LowerBody,
    UpperBody,
    HelloWorld,
    AppHeader,
    ToolBar,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">

#app {
  font-family: 'Arima Madurai', cursive;
}


@import url('https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@100;400&display=swap');
</style>