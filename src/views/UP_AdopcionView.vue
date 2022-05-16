<template>
  <v-app>
    <v-main>
      <AppHeader/>
      <ToolBar/>
      <ProfileToolBar/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/Header";
import ToolBar from "@/components/Toolbar";
import ProfileToolBar from "@/components/ProfileToolBar";
export default {
  name: "UP_AdopcionView",
  components: {SelectFields}
}
</script>

<style scoped>

</style>