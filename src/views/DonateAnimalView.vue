<template>
  <v-container>
    <ToolBar/>
    <v-container>
      <DonateUpperBody/>
      <DonateAnimalLowerBody/>
    </v-container>
  </v-container>
</template>

<script>
import DonateUpperBody from "@/components/DonateUpperBody";
import ToolBar from "@/components/Toolbar";
import DonateAnimalLowerBody from "@/components/DonateAnimalLowerBody";
export default {
  name: "DonateAnimalView",
  components: {DonateAnimalLowerBody, ToolBar, DonateUpperBody}
}
</script>

<style scoped>

</style>