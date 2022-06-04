<!--FALTA PULIR ALGUNAS COSAS DE VALIDACION-->
<template>
  <v-container>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
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
              :rules="nameRules"
              required
          ></v-text-field>
        </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              v-model="surnameUser"
              label="Apellido"
              :rules="nameRules"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
          <v-col class="align-center text-center justify-center" cols="5">
            <v-text-field
                v-model="displayNameUser"
                :counter="10"
                :rules="nameRules"
                label="Nombre de usuario"
                required
            ></v-text-field>
          </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              v-model="emailUser"
              :rules="emailRules"
              label="Email"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center text-center justify-center">
        <v-col class="align-center text-center justify-center" cols="5">

          <v-text-field
              v-model="passwordUser"
              label="Contraseña"
              :rules="passwordRules"
              :type="show1 ? 'text' : 'password'"
              required
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col class="align-center text-center justify-center" cols="5">
          <v-text-field
              v-model="confirmPasswordUser"
              label="Confirmar contraseña"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
              :type="show2 ? 'text' : 'password'"
              required
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show2 = !show2"
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
                    :rules="nameRules"
                    required
                ></v-text-field>
              </v-col>

            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Nombre de usuario"
                    :counter="10"
                    :rules="nameRules"
                    required
                ></v-text-field>
              </v-col>
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Email"
                    :rules="emailRules"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Contraseña"
                    :rules="passwordRules"
                    :type="show3 ? 'text' : 'password'"
                    required
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show3 = !show3"
                ></v-text-field>
              </v-col>
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    label="Confirmar contraseña"
                    :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
                    required
                    :type="show4 ? 'text' : 'password'"
                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show4 = !show4"
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
              type="submit"
              :disabled="!valid"
              @click="createUser(usuario)"
          >REGISTRAR</v-btn>
        </v-col>
      </v-row>
      </v-form>
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
    valid: true,
    nameRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres"
    ],
    emailRules: [
      v => !!v || "Ingrese su mail.",
      v => /.+@.+/.test(v) || "Email inválido."
    ],
    passwordRules: [v => !!v || "Ingrese una contraseña."],
    confirmPasswordRules: [v => !!v || "Ingrese una contraseña."],
    usuario: true,
    displayNameUser: '',
    nameUser: '',
    surnameUser: '',
    emailUser: '',
    passwordUser: '',
    confirmPasswordUser: '',
    show1: false,
    show2: false,
    show3: false,
    show4: false,

    // passwordConfirmationRule: [this.passwordUser === this.confirmPasswordUser || "Las contraseñas no coinciden"],
  }),

  methods: {
    ...mapActions("user", {
      $update: "update",
    }),
    computed: {
      passwordConfirmationRule() {
        return () =>
            this.passwordUser === this.confirmPasswordUser || "Las contraseñas no coinciden";
      }
    },
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