<template>
  <v-container>
    <v-container>
      <v-row class="align-center text-center justify-center" style="margin-top: 20px; margin-bottom: 20px">
        <v-img :src="require('../assets/petifyLogo.jpeg')" max-width="300px"/>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col>
        <v-btn-toggle
            mandatory
            tile
            color="#2A537A"
            x-large
        >
          <v-btn width="570px" @click="habilitarusuario" > SOY USUARIO </v-btn>
          <v-btn width="570px" @click="habilitarrefugio" > SOY REFUGIO </v-btn>
        </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center">
      <v-card :disabled="!usuario">
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              label="Nombre"
          ></v-text-field>
        </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              label="Apellido"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
          <v-col class="align-center text-center justify-center" cols="5">
            <v-text-field
                label="Nombre de usuario"
            ></v-text-field>
          </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              v-model="emailUser"
              label="Email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              v-model="passwordUser"
              label="Contraseña"
          ></v-text-field>
        </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              label="Confirmar contraseña"
          ></v-text-field>
        </v-col>
      </v-row>
      </v-card>
        </v-col>

        <v-col class="align-center text-center justify-center">
          <v-card :disabled="usuario">
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="10">
                <v-text-field
                    label="Nombre del Refugio"
                ></v-text-field>
              </v-col>

            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Nombre de usuario"
                ></v-text-field>
              </v-col>
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    v-model="emailRefugio"
                    label="Email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    v-model="passwordRefugio"
                    label="Contraseña"
                ></v-text-field>
              </v-col>
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Confirmar contraseña"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="5">
          <!-- COMENTARIO: FALTA CODEAR EL BOTON PARA GUARDAR LA INFO Y QUE VUELVA A LA PAGINA PRINCIPAL -->
          <v-btn
              color="#689FD2"
              class="white--text"
              elevation="2"
              large
              raised
              x-large
              @click="createUser(usuario)"
          >REGISTRAR</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

export default {
  name: "RegisterView",
  components: {},
  data: () => ({
    usuario: true,
    auth: getAuth(),
    displayName: '',
    emailUser: '',
    passwordUser: '',
    emailRefugio: '',
    passwordRefugio: '',
  }),

  methods: {
    createUser(usuario){
      if(usuario) {
        createUserWithEmailAndPassword(this.auth, this.emailUser, this.passwordUser).then((userCredential) => {
          const user = userCredential.user;
          this.emailUser = user.email;
          setTimeout(() => this.$router.push('/signin'), 1000);
        }).catch((error) => {
          console.log(error.message);
          return error.code;
        });
      } else {
        createUserWithEmailAndPassword(this.auth, this.emailRefugio, this.passwordRefugio).then((userCredential) => {
          const refugee = userCredential.user;
          this.emailRefugio = refugee.email;
          setTimeout(() => this.$router.push('/signin'), 1000);
        }).catch((error) => {
          console.log(error.message);
          return error.code;
        });
      }
    },
    habilitarusuario() {
      this.usuario = true;
    },
    habilitarrefugio() {
      this.usuario = false;
    },
  }
}
</script>

<style scoped>

</style>