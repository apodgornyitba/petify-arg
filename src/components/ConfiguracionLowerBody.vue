<template>
  <div>
    <v-container class="justify-center align-center">
      <v-form ref="form" v-model="valid" lazy-validation>
      <v-row style="margin-bottom: -30px"> <v-col> <h3>Nuevo email</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields
              v-model="newEmail"
              label="ejemplo@gmail.com"
              :rules="emailRules"
              required
          ></TextFields>
        </v-col>
      </v-row>

      <v-row style="margin-bottom: -30px"> <v-col> <h3>Cambiar contraseña</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields
              v-model="newPassword"
              label="Nueva contraseña"
              :rules="passwordRules"
              :type="show3 ? 'text' : 'password'"
              required
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show3 = !show3"
          ></TextFields>
        </v-col>
        <v-col>
          <TextFields
              label="Confirmar contraseña"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
              required
              :type="show4 ? 'text' : 'password'"
              :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show4 = !show4"
          ></TextFields>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col>
          <v-btn
              padless color="#2A537A"
              class="white--text"
              @click="updateEmailAndPassword"
              :disabled="!valid"
          >
            Cambiar
          </v-btn>
        </v-col>
      </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>

import TextFields from "@/components/TextFields";
import {getAuth, updateEmail, updatePassword} from 'firebase/auth';

export default {
  name: "ConfiguracionLB",
  components: {TextFields},
  data: () => ({
    valid: true,
    auth: getAuth(),
    newEmail: '',
    newPassword: '',
    emailRules: [
      v => !!v || "Ingrese su mail.",
      v => /.+@.+/.test(v) || "Email inválido."
    ],
    passwordRules: [v => !!v || "Ingrese una contraseña."],
    confirmPasswordRules: [v => !!v || "Ingrese una contraseña."],
    show3: false,
    show4: false,
  }),
  methods: {
    updateEmailAndPassword() {
      const user = this.auth.currentUser;
      updateEmail(user, this.newEmail).then(() => {
        // setTimeout(() => this.$router.push('/signin'), 1000);
      }).catch((error) => {
        console.log(error.message);
        return error.code;
      });
      updatePassword(user, this.newPassword).then(() => {
      }).catch((error) => {
        console.log(error.message);
        return error.code;
      });
    },
  }
}
</script>

<style scoped>

</style>