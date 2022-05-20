<template>
  <div class="about me">
    <v-row style="margin-top: 50px"/>
    <ToolBar/>
    <ProfileToolBar/>
    <v-container>
      <v-row>
        <v-col>
          <h4>Nuevo email</h4>
          <TextFields label="ejemplo@gmail.com"></TextFields>
        </v-col>

      </v-row>
      <v-row>
        <h3>Cambiar contraseña</h3>
      </v-row>
      <v-row>
        <v-col>
          <TextFields label="Nueva contraseña"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TextFields label="Confirmar contraseña"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn padless color="#2A537A" class="white--text">Cambiar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import ToolBar from "@/components/Toolbar";
import ProfileToolBar from "@/components/ProfileToolBar";
import TextFields from "@/components/TextFields";
export default {
  name: "UP_ConfiguracionView",
  components: {ProfileToolBar, ToolBar, TextFields}
}
</script>

<style scoped>

</style>