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
<!--        <SelectFields :items=tipos label="Tipo de ayuda"/>-->
        <v-select
            outlined
            filled
            style="width: 500px"
            v-model="help"
            label="Tipo de ayuda"
            :items="tipos"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
<!--        <TextFields label="Número de teléfono" :rules="phoneRules" />-->
        <v-text-field
            outlined
            filled
            style="width: 500px"
            v-model="phoneNumber"
            label="Número de teléfono"
            :rules="phoneRules"
            required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn
            padless color="#2A537A"
            class="white--text"
            :disabled="!valid"
            @click="sendMessage"

        >
          {{ enviar ? 'Enviar mensaje' : 'Enviado' }}
        </v-btn>
      </v-col>
    </v-row>
    </v-form>
  </v-container>
</template>
<script>

// import TextFields from "@/components/TextFields";
// import SelectFields from "@/components/SelectFields";

export default {
  name: "DonateUsLowerBody",
  components: {/*SelectFields, TextFields*/},
  data: () => ({
    enviar: true,
    valid: true,
    phoneNumber: '',
    help: '',
    phoneRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres",
      v => (v.length > 0 && /^[0-9]+$/.test(v)) || "Ingrese un teléfono válido (solo números).",
    ],
    tipos: ["QUIERO DONAR DINERO"],
  }),
  methods: {
    sendMessage(){
      this.enviar = !this.enviar;
      setTimeout(() => {
        this.enviar = !this.enviar;
        this.help = '';
        this.phoneNumber = '';
      }, 2000);

    },
  },
}
</script>

<style scoped>

</style>