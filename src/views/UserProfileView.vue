<template>
  <v-container>
      <AppHeader/>
      <ProfileToolBar/>
  </v-container>
</template>


<script>
import AppHeader from "@/components/Header";
// import ToolBar from "@/components/Toolbar";
import ProfileToolBar from "@/components/ProfileToolBar";
export default {
  name: "UserProfileView",
  components: {ProfileToolBar,AppHeader}
}
</script>

<style scoped>

</style>