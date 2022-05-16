<template>
  <v-app>
    <v-main>
    <AppHeader/>
    <ToolBar/>
      <UpperBody/>
      <LowerBody/>
    </v-main>
  </v-app>
</template>
<script>


import AppHeader from "@/components/Header";
import LowerBody from "@/components/LowerBody";
import UpperBody from "@/components/UpperBody";
import ToolBar from "@/components/Toolbar";
export default {
  name: 'HomeView',

  components: {
    ToolBar,
    UpperBody,
    LowerBody,
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>

