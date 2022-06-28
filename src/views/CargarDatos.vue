<template>
  <div>
    <ToolBar/>
    <v-container class="justify-center text-center align-center">
      <v-row style="margin-top: 10px" class="text-center">
        <v-col>
        <h2> INGRESE A SUS ANIMALES </h2>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="text-center">
      <v-col>
        <h4> Solo puede ingresar de a uno </h4>
      </v-col>
        </v-row>
      <v-row class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
          <TextFields label="Nombre"></TextFields>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
          <TextFields label="Link a imagen"></TextFields>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
          <TextFields label="Descripcion"></TextFields>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
          <TextFields label="Salud"></TextFields>
        </v-col>
      </v-row>
      <v-row style="margin-top: -30px" class="align-center justify-center text-center">
        <v-col class="align-center justify-center text-center" cols="6">
          <SelectFields label="Tipo de animal" :items=tipos></SelectFields>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import SelectFields from "@/components/SelectFields";
import TextFields from "@/components/TextFields";
import ToolBar from "@/components/Toolbar";
export default {
  name: "CargarDatos",
  components: {ToolBar, SelectFields, TextFields},
  data: () => ({
    tipos: ["PERRO", "GATO"]
  }),
}
</script>

<style scoped>

</style>