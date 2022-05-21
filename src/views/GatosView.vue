<template>
  <div>
      <ToolBar/>
      <v-container>
        <v-container>
          <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
            <v-col>
              <div class="subheading pt-4">
                Boris
              </div>
              <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
            </v-col>
            <v-col>
              <div class="subheading pt-4">
                Sebastian
              </div>
              <v-img :src="require('../assets/gatito2.jpg')" max-width="200px"/>
            </v-col>
            <v-col>
              <div class="subheading pt-4">
                Mariana
              </div>
              <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
            </v-col>
            <v-col>
              <div class="subheading pt-4">
                Laura
              </div>
              <v-img :src="require('../assets/gatito2.jpg')" max-width="200px"/>
            </v-col>
            <v-col>
              <div class="subheading pt-4">
                Jose Luis
              </div>
              <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
  </div>

</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "GatosView",
  components: {ToolBar}
}
</script>

<style scoped>

</style>