<template>
  <div>
    <tool-bar/>
    <v-container>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >

      <v-row style="margin-top: 20px">

        <v-col>
          <h2>Formulario de Adopción</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h4 class="font-weight-medium">
              Por favor complete el siguiente formulario para iniciar el trámite de adopción,
              recuerde que el mismo podría ser rechazado de no cumplir con lo requerido.
            </h4>
          </v-col>
        </v-row>

      <v-row class="center">

        <v-col>
          <v-text-field
              outlined
              filled
              style="width: 500px"
              v-model="name"
              label="Nombre"
              :rules="nameRules"
              required
          ></v-text-field>
        </v-col>

        <v-col>
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

        <v-col>
          <v-text-field
              outlined
              filled
              style="width: 500px"
              v-model="email"
              label="E-mail"
              :rules="emailRules"
              required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-select
              outlined
              filled
              style="width: 500px"
              v-model="select2"
              label="Cuán importante considera pasear a su mascota?"
              :items="items2"
          ></v-select>
        </v-col>

        <v-col>
          <v-select
              outlined
              filled
              style="width: 500px"
              v-model="select1"
              label="Tiene mascotas?"
              :items="items1"
          ></v-select>
        </v-col>

        <v-col>
          <v-select
              outlined
              filled
              style="width: 500px"
              v-model="select3"
              label="El perro dormiría adentro o afuera de la casa?"
              :items="items3"
          ></v-select>
        </v-col>

        <v-col>
          <v-select
              outlined
              filled
              style="width: 500px"
              v-model="select4"
              label="Tiene patio?"
              :items="items1"
          ></v-select>
        </v-col>

        <v-col>
          <v-select
              outlined
              filled
              style="width: 500px"
              v-model="select5"
              label="Quien está a cargo de tu vivienda?"
              :items="items4"
          ></v-select>
        </v-col>
      </v-row>

<!--        <v-col cols="2">-->
        <v-row>
          <v-col cols="2">
<!--            COMENTARIO corregir esta grasada SE ME JUNTAN LOS BOTONES NO SE POR QUE-->
          <v-btn
              padless color="#2A537A"
              class="white--text"
              :disabled="!valid"
              @click="sendMessage"

          >
            {{ enviar ? 'Enviar' : 'Enviado' }}
          </v-btn>
        </v-col>


          <v-col>
          <v-btn
            @click="clear"
            type="clear"
            padless color="#2A537A"
            class="white--text"
          >
            Vaciar
          </v-btn>
          </v-col>

        </v-row>

      </v-form>
    </v-container>
  </div>
</template>


<script>
import ToolBar from "@/components/Toolbar";
// import TextFields from "@/components/TextFields";
// import SelectFields from "@/components/SelectFields";
// import * as emailjs from "emailjs-com";

export default {
  name: "FormularioAdopcion",
  components: {
    /*TextFields,
    SelectFields,*/
    ToolBar,
  },
  data: () => ({
    enviar: true,
    // loader: null,
    // loading: false,
    valid: true,
    nameRules: [
      v => !!v || "Este campo es obligatorio.",
      // v => (v && v.length <= 10) || "Superó el límite de 10 caracteres"
    ],
    phoneRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres",
      v => (v.length > 0 && /^[0-9]+$/.test(v)) || "Ingrese un teléfono válido (solo números).",
    ],
    emailRules: [
      v => !!v || "Ingrese su mail.",
      v => /.+@.+/.test(v) || "Email inválido."
    ],
    name: '',
    phoneNumber: '',
    email: '',
    select1: '',
    select2: '',
    select3: '',
    select4: '',
    select5: '',
    items1: [
      'Sí',
      'No',
    ],
    items2: [
      'Indispensable',
      'Solo para que haga sus necesidades',
      'No lo veo necesario',
    ],
    items3: [
      'Adentro',
      'Afuera',
      'Dependiendo del clima',
    ],
    items4: [
      'Yo',
      'Mi madre/ padre',
      'Otro',
    ],
    //checkbox: null,
  }),

  methods: {
    clear(){
      this.name = '';
      this.phoneNumber = '';
      this.email = '';
      this.select1 = '';
      this.select2 = '';
      this.select3 = '';
      this.select4 = '';
      this.select5 = '';

    },
    sendMessage() {
      this.enviar = !this.enviar;
      setTimeout(() => {
        this.enviar = !this.enviar;
        this.name = '';
        this.phoneNumber = '';
        this.email = '';
        this.select1 = '';
        this.select2 = '';
        this.select3 = '';
        this.select4 = '';
        this.select5 = '';
      }, 2000);
    },
  },


}
</script>

<style scoped>

</style>