<template>
  <v-container>
    <AppHeader/>
    <ToolBar/>
    <v-container>
        <DonateUpperBody/>
        <DonateLowerBody/>
    </v-container>
  </v-container>
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