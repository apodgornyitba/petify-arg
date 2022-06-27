<!--ME FALTAN CORREGIR UN PAR DE COSAS, PERO ES POR ACA-->
<template>
  <v-container>
    <v-container>
      <v-row class="align-center text-center justify-center" style="margin-top: 20px; margin-bottom: 20px">
        <v-img :src="require('../assets/petifyLogo.jpeg')" max-width="300px"/>
      </v-row>

<!--          <validation-observer-->
<!--              ref="observer"-->
<!--              v-slot="{ invalid }"-->
<!--          >-->
<!--            <form @submit.prevent="submit">-->
<!--              <v-form-->
<!--                  @submit.prevent="submit"-->
<!--                  v-model="valid"-->
<!--                  lazy-validation-->
<!--              >-->

<!--              <v-form ref="form" v-model="valid" lazy-validation>-->
              <v-row class="align-center text-center justify-center">
                <v-col class="align-center text-center justify-center" cols="3">
              <validation-provider
                  v-slot="{ errors }"
                  name="Este campo"
                  rules="required|email"
              >
                <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="Email"
                    required
                ></v-text-field>
              </validation-provider>

        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
          <v-text-field
              :append-icon="showP ? 'mdi-eye' : 'mdi-eye-off'"
              label="Contraseña"
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="showP ? 'text' : 'password'"
              class="input-group--focused"
              @click:append="showP = !showP"
          ></v-text-field>

        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
          <!-- COMENTARIO: FALTA CODEAR EL BOTON PARA COMPRAR CON LA INFO DE LA BASE DE DATOS Y QUE VUELVA A LA PAGINA PRINCIPAL -->
          <v-btn
              color="#689FD2"
              class="white--text"
              elevation="2"
              large
              raised
              x-large
              @click="signIn"
          >INGRESAR</v-btn>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" style="margin-top: -10px" cols="3">
          <a href="/recuperaciondecuenta">Olvidé mi contraseña</a>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
          <p class="subheading font-weight-regular">
            ¿No tenés cuenta?
            <a href="/register">Registrate aquí</a>
          </p>
        </v-col>
      </v-row>
<!--      </v-form>-->
<!--      </form>-->
<!--      </validation-observer>-->
    </v-container>
  </v-container>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, /*ValidationObserver,*/ ValidationProvider, setInteractionMode } from 'vee-validate'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {mapActions} from "vuex";

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
  name: "SignInView",
  components: {
    ValidationProvider,
    // ValidationObserver,
  },
  data: () => ({
      valid:true,
      password: "",
      // passwordRules: [v => !!v || "Debe ingresar una contraseña"],

    showP: false,


    rules: {
      required: value => !!value || 'Debe ingresar una contraseña.',
      min: v => v.length >= 6 || 'Debe contener 6 caracteres mínimo.',
      emailMatch: () => (`El email o la contraseña son incorrectos.`),
    },

    email: '',
  }),
  methods: {
    ...mapActions("user", {
      $updateUser: "update",
    }),
    ...mapActions("shelter", {
      $updateShelter: "update"
    }),
    async signIn(){
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, this.email, this.password).then((userCred) => {
        if(!this.$store.getters.isShelter) {
          this.$updateUser({user: userCred.user});
        }else {
          this.$updateShelter({shelter: userCred.user});
        }
        this.$store.commit("setIsLoggedIn");
        this.$router.push('/');
      }).catch((error) => {
        console.log(error.message);
        return error.code;
      });
    },
  },
  }
</script>

<style scoped>

</style>