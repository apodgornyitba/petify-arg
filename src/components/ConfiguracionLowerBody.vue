<template>
  <div>
    <v-container class="justify-center align-center">
      <v-form ref="form" v-model="valid" lazy-validation>
      <v-row style="margin-bottom: -30px"> <v-col> <h3>EMAIL</h3> </v-col> </v-row>
      <v-row>
        <v-col>
         <h3> {{ email }} </h3>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: -30px"> <v-col> <h3>Cambiar contraseña</h3> </v-col> </v-row>
      <v-row>
        <v-col>
          <v-text-field
              outlined
              filled
              v-model="newPassword"
              label="Nueva contraseña"
              :disabled="!cambiar"
              :rules="passwordRules"
              :type="show3 ? 'text' : 'password'"
              required
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show3 = !show3"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              outlined
              filled
              label="Confirmar contraseña"
              :rules="confirmPasswordRules"
              required
              :disabled="!cambiar"
              :type="show4 ? 'text' : 'password'"
              :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show4 = !show4"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col>
          <v-btn
              padless color="#2A537A"
              class="white--text"
              @click="cambiar = true"
              v-if="!cambiar"
          >
            Editar
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
              padless color="#2A537A"
              class="white--text"
              @click="updateEmailAndPassword"
              :disabled="!valid || !cambiar"
          >
            {{ cambiar? 'Cambiar' : 'Listo' }}
          </v-btn>
        </v-col>
      </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>

import {getAuth, updateEmail, updatePassword} from 'firebase/auth';
import {mapGetters} from "vuex";

export default {
  name: "ConfiguracionLB",
  components: {},
  data: () => ({
    cambiar: true,
    valid: true,
    newEmail: '',
    newPassword: '',
    email: '',
    emailRules: [
      v => !!v || "Ingrese su mail.",
      v => /.+@.+/.test(v) || "Email inválido."
    ],
    passwordRules: [v => !!v || "Ingrese una contraseña."],
    confirmPasswordRules: [v => !!v || "Ingrese una contraseña.",
      v => v === this.newPassword || "Las contraseñas no coinciden."],
    show3: false,
    show4: false,
  }),
  computed:{
    ...mapGetters("user", {
      $getEmail: "getEmail",
    }),
    ...mapGetters("shelter", {
      $getShelterEmail: "getEmail",
    }),
  },
  methods: {
    async updateEmailAndPassword() {
      this.cambiar = !this.cambiar;
      const auth = getAuth();
      const user = auth.currentUser;
      // console.log(user);
      await updateEmail(user, this.newEmail).then(() => {
        // setTimeout(() => this.$router.push('/signin'), 1000);
      }).catch((error) => {
        console.log(error.message);
        return error.code;
      });
      await updatePassword(user, this.newPassword).then(() => {
      }).catch((error) => {
        console.log(error.message);
        return error.code;
      });
    },
    async getEmail() {
      if (!this.$store.getters.isShelter) {
          this.email = this.$getEmail;
      } else if (this.$store.getters.isShelter) {
          this.email = this.$getShelterEmail;
      }
    },
  },
  watch: {
    $getEmail(){
      this.getEmail();
    },
  },
  beforeMount() {
    this.getEmail();
  }
}
</script>

<style scoped>

</style>