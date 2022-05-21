<template>
  <div>
      <ToolBar/>
    <v-container>
      <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
        <v-col>
          <div class="subheading pt-4">
            Nala
          </div>
          <a href="/elijoPerro">
            <v-img :src="require('../assets/perrito1.jpg')" max-width="200px"/>
          </a>

        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Roma
          </div>
          <v-img :src="require('../assets/perrito2.jpg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Tai
          </div>
          <v-img :src="require('../assets/perrito3.jpg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Mate
          </div>
          <v-img :src="require('../assets/perrito5.jpg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Salta
          </div>
          <v-img :src="require('../assets/perrito6.jpg')" max-width="200px"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "PerrosView",
  components: {ToolBar}
}
</script>

<style scoped>

</style>