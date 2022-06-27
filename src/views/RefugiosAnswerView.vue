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
              <body> Mascota deseada: Perro </body>
              <body> Futuro/s dueño/s: 2</body>
              <body> Cantidad de mascota/s actual/es: 0</body>
              <body> Tipo de mascota/s previa/s: ¡Esta será mi primera mascota!</body>
              <body> Espacio disponible (m2): Entre 50 y 100</body>
              <body> Espacio alrededor: No</body>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row style="margin-bottom: -30px"> <v-col>
            <h3>Mi mascota ideal</h3>
          </v-col></v-row>
          <v-row>
            <v-col>
              <body > Preferencia de edad: 0-1 años </body>
              <body> Preferencia de sexo: Indiferente</body>
              <body> Preferencia de tamaño: Mediano</body>
              <body> Personalidad: Enérgico</body>
              <body> Necesidades: Alimento, paseos, cuidado de salud e higiene</body>
              <body> Adopción con necesidades especiales: No </body>
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
export default {
  name: "RefugiosAnswerView",
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