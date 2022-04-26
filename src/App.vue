<template>
  <v-app>
    <v-main>
      <AppHeader></AppHeader>
      <ToolBar/>
      <UpperBody/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/Header';
import HelloWorld from './components/HelloWorld';
import ToolBar from './components/Toolbar';
import UpperBody from "@/components/UpperBody";

export default {
  name: 'App',

  components: {
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
