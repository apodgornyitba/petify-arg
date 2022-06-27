<template>
  <div>
<!--    COMENTARIO: RE MEGA HARDCODEADO-->
    <ToolBar/>
      <v-container>
        <SearchBar/>
        <h1 class="text-center" >
          Tus mascotas favoritas:
        </h1>
        <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
          <v-col>
            <a href="/elijoPerro">

              <v-img :src="require('../assets/perrito1.jpg')" max-width="250px">
              </v-img>
            </a>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ToolBar from "@/components/Toolbar";
export default {
  name: "FavView",
  components: {SearchBar, ToolBar}
}
</script>

<style scoped>

</style>