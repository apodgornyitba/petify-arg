<template>
  <div>
    <v-container  class="justify-center align-center">
      <v-row>
      <v-col>
        <v-row style="margin-bottom: -30px "> <v-col>
        <h3>Contanos un poco sobre vos</h3>
        </v-col> </v-row>
        <v-row>
          <v-col>
          <SelectFields label="Mascota deseada" :items=mascota_deseada></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Futuro/s dueño/s" :items=count_owners></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Cantidad de mascota/s actual/es" :items=count_mascotas></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Tipo de mascota/s previa/s" :items=mascota_previa></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Espacio disponible (m2)" :items=espacio_disponible></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Espacio alrededor" :items=espacio_alrededor></SelectFields>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row style="margin-bottom: -30px"> <v-col>
        <h3>Mi mascota ideal</h3>
        </v-col></v-row>
        <v-row>
          <v-col>
          <SelectFields label="Preferencia de edad" :items=edad></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Preferencia de sexo" :items=sexo></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Preferencia de tamaño" :items=size></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Personalidad" :items=personalidad></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Necesidades" :items=necesidades></SelectFields>
          </v-col>
        </v-row>
        <v-row>
          <v-col style="margin-top: -50px">
          <SelectFields label="Adopción con necesidades especiales" :items=especial></SelectFields>
          </v-col>
        </v-row>
        </v-col>
      </v-row>
      <v-row class="justify-center align-center text-center">
        <v-col>
          <v-btn padless color="#2A537A" class="white--text">Guardar</v-btn>
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
  components: {SelectFields},
  data: () => ({
    mascota_deseada: ["Perro", "Gato"],
    count_owners:  ["1", "2", "3", "4", "5 o más"],
    count_mascotas: ["0", "1", "2", "3", "4", "5 o más"],
    mascota_previa: ["Perro", "Gato", "Ambos", "¡Esta será mi primera mascota!"],
    espacio_disponible: ["Menos de 20", "Entre 20 y 50", "Entre 50 y 100", "Más de 100"],
    espacio_alrededor: ["Sí", "No"],
    edad: ["Indiferente", "0-1 años", "2-4 años", "5-7 años", "7 o más"],
    sexo: ["Indiferente", "Macho", "Hembra"],
    size: ["Indiferente","Pequeño", "Mediano", "Grande"],
    personalidad: ["Energético", "Tranquilo", "Solitario", "Cariñoso"],
    necesidades: ["Alimento, paseos, cuidado de salud e higiene", "Alimento, cuidado de salud e higiene", "Alimento"],
    especial: ["Sí", "No"]
  })
}
</script>

<style scoped>

</style>