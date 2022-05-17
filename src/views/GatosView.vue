<!--<template>-->
<!--  <v-app>-->
<!--    <v-main>-->
<!--      <AppHeader/>-->
<!--      <ToolBar/>-->
<!--    </v-main>-->
<!--  </v-app>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  name: "GatosView",-->
<!--  components: {}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <v-app>
    <v-main>
      <AppHeader/>
      <ToolBar/>
      <v-container>
        <v-row class="align-center text-center justify-center" style="margin-top: 20px; margin-bottom: 20px">
          <v-img :src="require('../assets/working.jpg')" max-width="500px"/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/Header";
import ToolBar from "@/components/Toolbar";
export default {
  name: "GatosView",
  components: {ToolBar, AppHeader}
}
</script>

<style scoped>

</style>