<template>
<v-app>
  <v-main>
    <AppHeader/>
    <ToolBar/>
    <DonateUpperBody/>
    <DonateAnimalLowerBody/>
  </v-main>
</v-app>
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