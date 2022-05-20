<template>
  <div>
    <v-container class="justify-center align-center">
      <v-row style="margin-bottom: -30px"> <v-col> <h3>Nuevo email</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields label="ejemplo@gmail.com"></TextFields>
        </v-col>
      </v-row>

      <v-row style="margin-bottom: -30px"> <v-col> <h3>Cambiar contraseña</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields label="Nueva contraseña"></TextFields>
        </v-col>
        <v-col>
          <TextFields label="Confirmar contraseña"></TextFields>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col align="center">
          <v-btn padless color="#2A537A" class="white--text">Cambiar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import TextFields from "@/components/TextFields";
export default {
  name: "ConfiguracionLB",
  components: {TextFields}
}
</script>

<style scoped>

</style>