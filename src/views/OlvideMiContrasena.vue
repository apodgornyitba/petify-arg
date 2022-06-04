<template>
  <v-container>
    <v-row/>
    <v-row class="align-center text-center justify-center" style="margin-top: 20px; margin-bottom: 20px">
      <v-img :src="require('../assets/petifyLogo.jpeg')" max-width="300px"/>
    </v-row>

    <v-row class="align-center text-center justify-center">
      <v-col>
        <h2 class="font-weight-medium"> Ingrese su mail para recuperar su contraseña</h2>
      </v-col>
    </v-row>
    <v-row class="align-center text-center justify-center">
      <v-col class="align-center text-center justify-center" cols="5">
        <validation-observer
            ref="observer"
            v-slot="{ invalid }"
        >
        <form @submit.prevent="submit">
          <validation-provider
              v-slot="{ errors }"
              name="Este campo"
              rules="required|email"
          >
            <v-text-field
                v-model="email"
                :error-messages="errors"
                label="ejemplo@email.com"
                required
            ></v-text-field>
          </validation-provider>

          <v-row class="align-center text-center justify-center" style="margin-top: -10px">
            <v-col>
              <h4 class="font-weight-medium"> Recibirás un mail para la recuperación de tu contraseña</h4>
            </v-col>
          </v-row>

          <v-row class="align-center text-center justify-center" style="margin-top: 10px; margin-bottom: 20px">
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
          </v-row>

        </form>
        </validation-observer>
<!--        <v-text-field-->
<!--            label="ejemplo@email.com"-->
<!--        ></v-text-field>-->
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

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
  name: "OlvideMiContrasena",
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    email: '',
    select: null,
    checkbox: null,
  }),

  methods: {
    clear () {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null

    },
  },

}
</script>

<style scoped>

</style>