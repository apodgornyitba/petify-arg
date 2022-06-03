<template>
  <div>
    <v-container class="justify-center align-center">
      <v-row style="margin-bottom: -30px"> <v-col> <h3>¿Cuál es tu nombre?</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields
              v-model="user.name"
              label="Nombre"
          ></TextFields>
        </v-col>
        <v-col> <!-- v-if no va si es refugio -->
          <TextFields label="Apellido"></TextFields>
        </v-col>
        <v-col>
          <TextFields
              v-model="user.surname"
              label="Apellido">
          </TextFields>
        </v-col>
      </v-row>

      <!-- v-if si es refugio poner un Donde se encuentran? -->
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
        <v-col cols="4">
          <v-btn padless color="#2A537A" class="white--text">Guardar</v-btn>
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