<template>
  <v-contaner>
      <DonateUpperBody/>
      <DonateLowerBody/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/components/Header";
import ToolBar from "@/components/Toolbar";
import DonateUpperBody from "@/components/DonateUpperBody";
import DonateLowerBody from "@/components/DonateLowerBody";
export default {
  name: "DonateView",
  components: {DonateLowerBody, DonateUpperBody }
}
</script>

<style scoped>

</style>