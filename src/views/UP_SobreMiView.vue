<template>
  <div class="about me">
    <v-row style="margin-top: 50px"/>
    <ToolBar/>
    <ProfileToolBar/>
    <v-container>
      <h3>¿Cuál es tu nombre?</h3>
      <v-row/>
      <v-row>
        <v-col>
          <TextFields label="Nombre"></TextFields>
        </v-col>
        <v-col>
          <TextFields label="Apellido"></TextFields>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h3>¿Dónde vivís?</h3>
      <v-row></v-row>
      <v-row></v-row>
      <v-row>
        <TextFields label="País"></TextFields>
      </v-row>
      <v-row>
        <TextFields label="Provincia"></TextFields>
      </v-row>
      <v-row>
        <TextFields label="Localidad"></TextFields>
      </v-row>
      <v-row>
        <TextFields label="Código Postal"></TextFields>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import ToolBar from "@/components/Toolbar";
import ProfileToolBar from "@/components/ProfileToolBar";
import TextFields from "@/components/TextFields";
export default {
  name: "UP_SobreMiView",
  components: {ProfileToolBar, ToolBar, TextFields}
}
</script>

<style scoped>

</style>