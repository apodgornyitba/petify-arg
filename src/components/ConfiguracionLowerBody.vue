<template>
  <div>
    <v-container class="justify-center align-center">
      <v-row style="margin-bottom: -30px"> <v-col> <h3>Nuevo email</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields
              v-model="newEmail"
              label="ejemplo@gmail.com"
          ></TextFields>
        </v-col>
      </v-row>

      <v-row style="margin-bottom: -30px"> <v-col> <h3>Cambiar contraseña</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <TextFields
              v-model="newPassword"
              label="Nueva contraseña"
          ></TextFields>
        </v-col>
        <v-col>
          <TextFields label="Confirmar contraseña"></TextFields>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col>
          <v-btn
              padless color="#2A537A"
              class="white--text"
              @click="updateEmailAndPassword"
          >
            Cambiar
          </v-btn>
        </v-col>
      </v-row>
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
    auth: getAuth(),
    newEmail: '',
    newPassword: '',
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