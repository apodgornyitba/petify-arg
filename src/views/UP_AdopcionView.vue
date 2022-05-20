<template>
  <div class="about me">
    <AppHeader/>
    <v-row style="margin-top: 50px"/>
    <ToolBar/>
    <ProfileToolBar/>
    <v-container>
      <v-row>
      <v-col>
        <h3>Contanos un poco sobre vos</h3>
        <v-row></v-row>
        <v-row></v-row>
        <v-row>
          <SelectFields label="Mascota deseada"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Futuro/s dueño/s"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Mascota/s actual/es"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Mascota/s previa/s"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Espacio disponible"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Espacio alrededor"></SelectFields>
        </v-row>
      </v-col>
      <v-col>
        <h3>Mi mascota ideal</h3>
        <v-row></v-row>
        <v-row></v-row>
        <v-row>
          <SelectFields label="Preferencia de edad"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Preferencia de género"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Preferencia de tamaño"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Personalidad"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Necesidades"></SelectFields>
        </v-row>
        <v-row>
          <SelectFields label="Adopción con necesidades especiales"></SelectFields>
        </v-row>
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppHeader from "@/components/Header";
import ToolBar from "@/components/Toolbar";
import ProfileToolBar from "@/components/ProfileToolBar";
import SelectFields from "@/components/SelectFields";
export default {
  name: "UP_AdopcionView",
  components: {ProfileToolBar, ToolBar, AppHeader, SelectFields}
}
</script>

<style scoped>

</style>