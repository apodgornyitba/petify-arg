<template>
  <v-container>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-row>
      <v-col align="center">
        <h3>Les agradecemos las aportaciones a nuestra sitio que quieran hacer.</h3>
        <h3>El dinero recaudado nos ayuda a mantener actualizado el sitio.</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <h5>Nuestros datos de tranferencia: 111 2222 3 4444444444444 5</h5>
        <h5>Nuestros datos de mercadopago: petifyarg@gmail.com</h5>
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
        <v-btn padless color="#2A537A"
               class="white--text"
                type="submit"
                :disabled="!valid"
        >
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
  name: "DonateUsLowerBody",
  components: {SelectFields, TextFields},
  data: () => ({
    valid: true,
    phoneRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres",
      v => (v.length > 0 && /^[0-9]+$/.test(v)) || "Ingrese un teléfono válido (solo números).",
    ],
    tipos: ["QUIERO DONAR DINERO"],
  })
}
</script>

<style scoped>

</style>