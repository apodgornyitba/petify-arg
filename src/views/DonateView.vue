<template>
  <v-container>
    <ToolBar/>
    <v-container>
        <DonateUpperBody/>
        <DonateLowerBody/>
    </v-container>
  </v-container>
</template>

<script>
import DonateUpperBody from "@/components/DonateUpperBody";
import ToolBar from "@/components/Toolbar";
import DonateLowerBody from "@/components/DonateLowerBody";
export default {
  name: "DonateView",
  components: {DonateLowerBody, ToolBar, DonateUpperBody}
}
</script>

<style scoped>

</style>