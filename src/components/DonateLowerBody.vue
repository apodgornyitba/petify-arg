<template>
  <v-container>
    <v-row>
      <v-col align="center">
      <SelectFields label="Nombre del refugio" :items=refugios />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <SelectFields :items=tipos label="Tipo de ayuda"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <TextFields label="Número de teléfono"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn padless color="#2A537A" class="white--text">
          Enviar mensaje
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TextFields from "@/components/TextFields";
import SelectFields from "@/components/SelectFields";
export default {
  name: "DonateLowerBody",
  components: {SelectFields, TextFields},
  data: () => ({
    refugios: ["Patitas al rescate", "Colita Feliz", "La patita feliz", "La patita feliz", "Salvando sus vidas", "Zaguates"],
    tipos: ["QUIERO DONAR", "QUIERO DONAR ALIMENTO", "QUIERO DONAR UTILES"]
  })
}
</script>

<style scoped>

</style>