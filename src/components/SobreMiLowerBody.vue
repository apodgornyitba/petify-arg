<template>
  <div>
    <v-container class="justify-center align-center">
      <v-row style="margin-bottom: -30px"> <v-col> <h3>¿Cuál es tu nombre?</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields label="Nombre"></TextFields>
        </v-col>
        <v-col>
          <TextFields label="Apellido"></TextFields>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: -30px; margin-top: -30px"> <v-col><h3>¿Dónde vivís?</h3></v-col> </v-row>
      <v-row>
        <v-col>
        <TextFields label="País"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
        <TextFields label="Provincia"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
        <TextFields label="Localidad"></TextFields>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="margin-top: -50px">
        <TextFields label="Código Postal"></TextFields>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import TextFields from "@/components/TextFields";
export default {
  name: "SobreMi",
  components: {TextFields}
}
</script>

<style scoped>

</style>