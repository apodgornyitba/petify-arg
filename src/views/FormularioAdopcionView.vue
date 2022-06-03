<template>
  <div>
    <tool-bar/>
    <v-container>

      <v-row style="margin-top: 20px">

        <v-col>
          <h2>Formulario de Adopción</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h4 class="font-weight-medium">
              Por favor complete el siguiente formulario para iniciar el trámite de adopción de Nala,
              recuerde que el mismo podría ser rechazado de no cumplir con lo requerido.
            </h4>
          </v-col>
        </v-row>

      <v-row class="center">
        <v-col>
      <validation-observer
          ref="observer"
          v-slot="{ invalid }"
      >
        <form @submit.prevent="submit">
          <validation-provider
              v-slot="{ errors }"
              name="El nombre"
              rules="required|max:10"
          >
            <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Nombre"
                required
            ></v-text-field>
          </validation-provider>
          <validation-provider
              v-slot="{ errors }"
              name="El número de teléfono"
              :rules="{
          required: true,
          digits: 10,
          regex: 'd^(11|15)\\d{8}$'
        }"
          >
            <v-text-field
                v-model="phoneNumber"
                :counter="10"
                :error-messages="errors"
                label="Número de teléfono"
                required
            ></v-text-field>
          </validation-provider>
          <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
          >
            <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
            ></v-text-field>
          </validation-provider>
          <validation-provider
              v-slot="{ errors }"
              name="Este campo"
              rules="required"
          >
<!--            <SelectFields label="Tiene mascotas?"></SelectFields>-->
            <v-select
                v-model="select"
                :items="items1"
                :error-messages="errors"
                label="Tiene mascotas?"
                required
            ></v-select>
          </validation-provider>

          <validation-provider
              v-slot="{ errors }"
              name="Este campo"
              rules="required"
          >
            <v-select
                v-model="select"
                :items="items2"
                :error-messages="errors"
                label="Cuán importante considera pasear a su mascota?"
                required
            ></v-select>
          </validation-provider>
<!--          <validation-provider-->
<!--              v-slot="{ errors }"-->
<!--              rules="required"-->
<!--              name="checkbox"-->
<!--          >-->
<!--            <v-checkbox-->
<!--                v-model="checkbox"-->
<!--                :error-messages="errors"-->
<!--                value="1"-->
<!--                label="Option"-->
<!--                type="checkbox"-->
<!--                required-->
<!--            ></v-checkbox>-->
<!--          </validation-provider>-->

          <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
          >
            Enviar
          </v-btn>
          <v-btn @click="clear">
            Vaciar
          </v-btn>
        </form>
      </validation-observer>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- COMENTARIO: si el refufio del perro ingresa un formularioa que ps de enviar en nuetro, ingrese al google forms del mismo -->
</template>


<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import ToolBar from "@/components/Toolbar";

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} debe contener {length} digitos.',
})

extend('required', {
  ...required,
  message: '{_field_} no puede estar vacío',
})

extend('max', {
  ...max,
  message: '{_field_} no puede superar los {length} caracteres',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} no es válido',
})

extend('email', {
  ...email,
  message: 'Ingrese un email válido',
})

export default {
  name: "FormularioAdopcion",
  components: {
    ValidationProvider,
    ValidationObserver,
    ToolBar,
  },
  data: () => ({
    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    items1: [
      'Sí',
      'No',
    ],
    items2: [
      'Indispensable',
      'Solo para que haga sus necesidades',
      'No lo veo necesario',
    ],
    checkbox: null,
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>

<style scoped>

</style>