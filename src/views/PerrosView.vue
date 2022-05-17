<!--<template>-->
<!--  <v-app>-->
<!--    <v-main>-->

<!--    </v-main>-->
<!--  </v-app>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "PerrosView",-->
<!--  // components: {ToolBar, AppHeader}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <v-app>
    <v-main>
      <AppHeader/>
      <ToolBar/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/Header";
import ToolBar from "@/components/Toolbar";
export default {
  name: "PerrosView",
  components: {ToolBar, AppHeader}
}
</script>

<style scoped>

</style>