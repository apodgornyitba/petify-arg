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
          <TextFields
              v-model="name"
              :rules="nameRules"
              label="Nombre"
              required
          ></TextFields>
        </v-col>

        <v-col>
          <TextFields
              v-model="phoneNumber"
              label="Número de teléfono"
              :rules="phoneRules"
          />
        </v-col>

        <v-col>
          <TextFields
              v-model="email"
              label="E-mail"
              :rules="emailRules"
              required
          ></TextFields>
        </v-col>

        <v-col>
          <SelectFields
              v-model="select2"
              label="Cuán importante considera pasear a su mascota?" :items=items2></SelectFields>
        </v-col>

        <v-col>
          <SelectFields
              v-model="select1"
              label="Tiene mascotas?"  :items=items1></SelectFields>
        </v-col>

        <v-col>
          <SelectFields
              v-model="select1"
              label="El perro dormiría adentro o afuera de la casa?"  :items=items3></SelectFields>
        </v-col>

        <v-col>
          <SelectFields
              v-model="select1"
              label="Tiene patio?"  :items=items1></SelectFields>
        </v-col>

        <v-col>
          <SelectFields
              v-model="select1"
              label="Quien está a cargo de tu vivienda?"  :items=items4></SelectFields>
        </v-col>
      </v-row>

<!--        <v-col cols="2">-->
        <v-row>
          <v-col cols="2">
<!--            COMENTARIO corregir esta grasada SE ME JUNTAN LOS BOTONES NO SE POR QUE-->
          <v-btn
              padless color="#2A537A"
              class="white--text"
              type="submit"
              :disabled="!valid"
          >
            Enviar
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
  <!-- COMENTARIO: si el refufio del perro ingresa un formularioa que ps de enviar en nuetro, ingrese al google forms del mismo -->
</template>


<script>
import ToolBar from "@/components/Toolbar";
import TextFields from "@/components/TextFields";
import SelectFields from "@/components/SelectFields";

export default {
  name: "FormularioAdopcion",
  components: {
    TextFields,
    SelectFields,
    ToolBar,
  },
  data: () => ({
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
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select1 = null
      this.select2 = null
    },
  },
}
</script>

<style scoped>

</style>