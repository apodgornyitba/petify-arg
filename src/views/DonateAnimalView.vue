<template>
  <v-container>
    <AppHeader/>
    <ToolBar/>
    <v-container>
      <DonateUpperBody/>
      <DonateAnimalLowerBody/>
    </v-container>
  </v-container>
</template>

<script>
import DonateUpperBody from "@/components/DonateUpperBody";
import AppHeader from "@/components/Header";
import ToolBar from "@/components/Toolbar";
import DonateAnimalLowerBody from "@/components/DonateAnimalLowerBody";
export default {
  name: "DonateAnimalView",
  components: {DonateAnimalLowerBody, ToolBar, AppHeader, DonateUpperBody}
}
</script>

<style scoped>

</style>