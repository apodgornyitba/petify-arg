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
              v-model="nameUser"
              label="Nombre"
          ></v-text-field>
        </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              v-model="surnameUser"
              label="Apellido"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
          <v-col class="align-center text-center justify-center" cols="5">
            <v-text-field
                v-model="displayNameUser"
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
              v-model="confirmPasswordUser"
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
                    label="Email"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
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
import {doc, setDoc} from "firebase/firestore";
import db from "../firebase/initFirebase";
import {mapActions} from "vuex";

export default {
  name: "RegisterView",
  components: {},
  data: () => ({
    usuario: true,
    displayNameUser: '',
    nameUser: '',
    surnameUser: '',
    emailUser: '',
    passwordUser: '',
    confirmPasswordUser: '',
  }),

  methods: {
    ...mapActions("user", {
      $update: "update",
    }),
    createUser(usuario){
      const auth = getAuth();
      if(usuario) {
        this.registerUser(auth, this.emailUser, this.passwordUser);
      } else {
        // createUserWithEmailAndPassword(this.auth, this.emailRefugio, this.passwordRefugio).then(() => {
        //   setTimeout(() => this.$router.push('/signin'), 1000);
        // }).catch((error) => {
        //   console.log(error.message);
        //   return error.code;
        // });
      }
    },
    async registerUser(auth, email, password){
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", credentials.user.uid), {
        name: this.nameUser,
        surname: this.surnameUser,
        username: this.displayNameUser,
      });
      this.$update({user: credentials.user});
      await this.$router.push('/')
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