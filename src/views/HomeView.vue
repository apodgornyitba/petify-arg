<template>
  <v-container>
    <AppHeader/>
    <ToolBar/>
      <UpperBody/>
      <LowerBody/>
      <v-container>
        <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
          <v-col>
          <v-img :src="require('../assets/perrito1.jpg')" max-width="250px"/>
          </v-col>
          <v-col>
          <v-img :src="require('../assets/perrito2.jpg')" max-width="250px"/>
          </v-col>
          <v-col>
          <v-img :src="require('../assets/perrito3.jpg')" max-width="250px"/>
          </v-col>
          <v-col>
            <v-img :src="require('../assets/perrito5.jpg')" max-width="250px"/>
          </v-col>
        </v-row>
      </v-container>
  </v-container>
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

