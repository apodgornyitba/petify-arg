<template>
  <v-app>
    <v-main>
      <AppHeader/>
      <ToolBar/>
      <DonateUpperBody/>
      <DonateLowerBody/>
    </v-main>
  </v-app>
</template>

<script>
import DonateUpperBody from "@/components/DonateUpperBody";
import AppHeader from "@/components/Header";
import ToolBar from "@/components/Toolbar";
import DonateLowerBody from "@/components/DonateLowerBody";
export default {
  name: "DonateView",
  components: {DonateLowerBody, ToolBar, AppHeader, DonateUpperBody}
}
</script>

<style scoped>

</style>