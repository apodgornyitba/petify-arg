<template>
  <div>
    <v-container class="justify-center align-center">
      <v-row>
      <v-col>
        <v-row style="margin-bottom: -30px "> <v-col>
        <h3>Contanos un poco sobre vos</h3>
        </v-col> </v-row>
        <v-row>
          <v-col>
          <SelectFields label="Mascota deseada"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Futuro/s dueño/s"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Mascota/s actual/es"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Mascota/s previa/s"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Espacio disponible"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Espacio alrededor"></SelectFields>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row style="margin-bottom: -30px"> <v-col>
        <h3>Mi mascota ideal</h3>
        </v-col></v-row>
        <v-row>
          <v-col>
          <SelectFields label="Preferencia de edad"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Preferencia de género"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Preferencia de tamaño"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Personalidad"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Necesidades"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Adopción con necesidades especiales"></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn padless color="#2A537A" class="white--text">Guardar</v-btn>
          </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-container>
    <!-- v-if no va si es refugio -->
    <!-- v-if si es un refugio deben aparecer la posibilidad de cargar su formulario -->
    <!--  <v-row style="margin-bottom: -30px; margin-top: -30px"> <v-col><h3>Ingrese el link a su formulario</h3></v-col> </v-row>
      <v-row>
        <v-col>
        <TextFields></TextFields>
        </v-col>
      </v-row> -->
  </div>
</template>

<script>

import SelectFields from "@/components/SelectFields";
export default {
  name: "AdopcionLowerBody",
  components: {SelectFields}
}
</script>

<style scoped>

</style>