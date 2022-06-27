<template>
  <v-container>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-row>
      <v-col align="center">
      <SelectFields label="Nombre del refugio" :items=refugios  />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <SelectFields :items=tipos label="Tipo de ayuda"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <TextFields
            label="Número de teléfono"
            :rules="phoneRules"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn padless color="#2A537A" class="white--text">
          Enviar mensaje
        </v-btn>
      </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>

<script>
import TextFields from "@/components/TextFields";
import SelectFields from "@/components/SelectFields";
export default {
  name: "DonateLowerBody",
  components: {SelectFields, TextFields},
  data: () => ({
    valid: true,
    phoneRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres",
      v => (v.length > 0 && /^[0-9]+$/.test(v)) || "Ingrese un teléfono válido (solo números).",
    ],
    refugios: ["Patitas al rescate", "Colita Feliz", "La patita feliz", "La patita feliz", "Salvando sus vidas", "Zaguates"],
    tipos: ["QUIERO DONAR DINERO", "QUIERO DONAR ALIMENTO", "QUIERO DONAR UTILES"]
  })
}
</script>

<style scoped>

</style>