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
          <v-btn width="570px" @click="habilitarusuario() " > SOY USUARIO </v-btn>
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
              :rules="confirmPasswordRules"
              :type="show2 ? 'text' : 'password'"
              required
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
      </v-row>
        <v-row class="align-center text-center justify-center">
          <v-col class="align-center text-center justify-center" cols="5">
            <v-select
                style="width: 500px; margin-bottom: 15px"
                v-model="paises[0]"
                label="País"
                :items="paises"
            ></v-select>
          </v-col>
          <v-col class="align-center text-center justify-center" cols="5">
            <v-select
                style="width: 500px; margin-bottom: 15px"
                v-model="provincias[1]"
                label="Provincia"
                :items="provincias"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="align-center text-center justify-center">
          <v-col class="align-center text-center justify-center" cols="5">
            <v-text-field
              v-model="localidad"
              label="Localidad"
              :rules="nameRules"
              required
              style="width: 500px; margin-bottom: 15px"
          ></v-text-field>
          </v-col>
          <v-col class="align-center text-center justify-center" cols="5">
            <v-text-field
              v-model="postal"
              :rules="codigoPostalRules"
              label="Codigo Postal"
              style="width: 500px; margin-bottom: 15px"
              required
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
                    v-model="nameShelter"
                    label="Nombre del Refugio"
                    :rules="nameRules"
                    required
                ></v-text-field>
              </v-col>

            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    v-model="displayNameShelter"
                    label="Nombre de usuario"
                    :counter="10"
                    :rules="nameRules"
                    required
                ></v-text-field>
              </v-col>
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    v-model="emailShelter"
                    label="Email"
                    :rules="emailRules"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="align-center text-center justify-center">
              <v-col class="align-center text-center justify-center" cols="5">
                <v-text-field
                    v-model="passwordShelter"
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
                    v-model="confirmPasswordShelter"
                    label="Confirmar contraseña"
                    :rules="(confirmPasswordRules)"
                    required
                    :type="show4 ? 'text' : 'password'"
                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show4 = !show4"
                ></v-text-field>
              </v-col>
              <v-row class="align-center text-center justify-center">
                <v-col class="align-center text-center justify-center" cols="5">
                  <v-select
                      style="width: 500px; margin-bottom: 15px"
                      v-model="pais"
                      label="País"
                      :items="paises"
                  ></v-select>
                </v-col>
                <v-col class="align-center text-center justify-center" cols="5">
                  <v-select
                      style="width: 500px; margin-bottom: 15px"
                      v-model="provincia"
                      label="Provincia"
                      :items="provincias"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row class="align-center text-center justify-center">
                <v-col class="align-center text-center justify-center" cols="5">
                  <v-text-field
                      v-model="direccion"
                      label="Dirección"
                      :rules="direccionRules"
                      required
                      style="width: 500px; margin-bottom: 15px"
                  ></v-text-field>
                </v-col>
                <v-col class="align-center text-center justify-center" cols="5">
                  <v-text-field
                      v-model="postal"
                      :rules="codigoPostalRules"
                      label="Codigo Postal"
                      style="width: 500px; margin-bottom: 15px"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>
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
    paises: ["Argentina",],
    provincias: ["CABA",],
    codigoPostalRules:[
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 4) || "Superó el límite de caracteres",
      v => (v && /^[0-9]+$/.test(v)) || "Ingrese solo números"
    ],
    valid: true,
    nameRules: [
      v => !!v || "Este campo es obligatorio.",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres"
    ],
    emailRules: [
      v => !!v || "Ingrese su mail.",
      v => /.+@.+/.test(v) || "Email inválido."
    ],
    passwordRules: [v => !!v || "Ingrese una contraseña.", v => v.length >= 6 || 'Debe contener 6 caracteres mínimo.'],
    usuario: true,

    displayNameUser: '',
    nameUser: '',
    surnameUser: '',
    emailUser: '',
    passwordUser: '',
    confirmPasswordUser: '',

    displayNameShelter: '',
    nameShelter: '',
    emailShelter: '',
    passwordShelter: '',
    confirmPasswordShelter: '',

    localidad: '',
    direccion: '',
    postal: '',
    pais: '',
    provincia: '',

    confirmPasswordRules: [v => !!v || "Ingrese una contraseña."],
    direccionRules: [v => !!v || "Ingrese una dirección."],
    show1: false,
    show2: false,
    show3: false,
    show4: false,
  }),

  methods: {
    ...mapActions("user", {
      $updateUser: "update",
    }),
    ...mapActions("shelter", {
      $updateShelter: "update",
    }),
    // passwordConfirmationRule() {
    //   return () =>
    //       this.passwordUser !== this.confirmPasswordUser || "Las contraseñas no coinciden";
    // },
    createUser(usuario){
      const auth = getAuth();
      if(usuario) {
        this.registerUser(auth, this.emailUser, this.passwordUser);
      } else {
        this.registerShelter(auth, this.emailShelter, this.passwordShelter);
      }
    },
    async registerUser(auth, email, password){
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", credentials.user.uid), {
        name: this.nameUser,
        adoptInfo: {
          chosenPet: '',
        },
        surname: this.surnameUser,
        username: this.displayNameUser,
        country: this.pais,
        province: this.provincia,
        localidad: this.localidad,
        postal: this.postal,

      });
      this.$updateUser({user: credentials.user});
      this.$store.commit("setIsLoggedIn");
      setTimeout(() => this.$router.push('/'), 1000);
    },

    async registerShelter(auth, email, password){
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "shelters", credentials.user.uid), {
        name: this.nameShelter,
        username: this.displayNameShelter,
        country: this.pais,
        province: this.provincia,
        address: this.direccion,
        postal: this.postal,

      });
      this.$updateShelter({shelter: credentials.user});
      this.$store.commit("setIsLoggedIn");
      setTimeout(() => this.$router.push('/'), 1000);
    },
    habilitarusuario() {
      this.usuario = true;
      this.$store.commit("setIsShelter", false);
    },
    habilitarrefugio() {
      this.usuario = false;
      this.$store.commit("setIsShelter", true);
    },
  }
}
</script>

<style scoped>

</style>