<template>
  <v-container>
    <v-container>
      <v-row class="align-center text-center justify-center" style="margin-top: 20px; margin-bottom: 20px">
        <v-img :src="require('../assets/petifyLogo.jpeg')" max-width="300px"/>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
        <v-text-field
            v-model="email"
            label="Email"
        ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="3">
          <v-text-field
              v-model="password"
              label="Contraseña"
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
    </v-container>
  </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: "SignInView",
  components: {},
  data: () => ({
    auth: getAuth(),
    email: '',
    password: '',
  }),
  methods: {
    signIn(){
      signInWithEmailAndPassword(this.auth, this.email, this.password);
      //     .then((userCredential) => {
      //
      // }).catch((error) => {
      //   console.log(error.message);
      //   return error.code;
      // });
      setTimeout(() => this.$router.push('/'), 1000);
    }
  },
  }
</script>

<style scoped>

</style>