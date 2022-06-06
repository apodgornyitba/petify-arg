<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <SelectFields label="Nombre del refugio" :items=refugios />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <SelectFields label="Nombre del animal" :items="animales" />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <SelectFields :items=tipos label="Tipo de ayuda"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <TextFields label="Número de teléfono" :rules="phoneRules" />
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
  name: "DonateAnimalLowerBody",
  components: {SelectFields, TextFields},
  data: () => ({
    valid: true,
    phoneRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres",
      v => (v.length > 0 && /^[0-9]+$/.test(v)) || "Ingrese un teléfono válido (solo números).",
    ],
    refugios: ["Patitas al rescate", "Colita Feliz", "La patita feliz", "La patita feliz", "Salvando sus vidas", "Zaguates"],
    animales: ["Boris", "Nala" , "Sebastian", "Roma" ,"Mariana", "Tai" ,"Laura", "Mate" , "Jose Luis", "Salta"],
    tipos: ["QUIERO TRANSITAR", "QUIERO TRASPORTAR", "QUIERO DONAR ALIMENTO", "QUIERO DONAR UTILES"],
  })
}
</script>

<style scoped>

</style>