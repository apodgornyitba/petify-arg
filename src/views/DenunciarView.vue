<template>
  <!--  COMENTARIO: hacer esto mejor-->
  <div>
    <ToolBar/>
    <v-container>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
        <v-row class="align-center" style="margin-top: 50px">
          <v-col>
            <h2>
              Formulario para denunciar comportamiento extraño de un refugio
            </h2>
            <v-divider/>
            <h4>
              <v-icon>mdi-information</v-icon>
              Tu denuncia es anónima y es muy importante para nosotros, esto nos ayuda a mantener la seguridad de los
              animales. En caso de una emergencia, recomendamos llamar a la policía, no esperes.
            </h4>
          </v-col>
        </v-row>
        <v-row class="align-center text-center justify-center">
          <template>
            <div class="form">
              <form ref="form" onsubmit="sendEmail()">
                <label>Contanos lo que queres denunciar y el motivo:</label>
                <textarea
                    name="mesage"
                    v-model="message"
                    cols="30" rows="5"
                    placeholder="Mensaje"
                    class="input"
                />
                <v-row>
                  <v-col>
                    <v-btn
                        padless color="#2A537A"
                        class="white--text"
                        @click="sendEmail()"

                    >
                      {{ enviar ? 'Enviar' : 'Enviado' }}
                    </v-btn>
                    <!--        <v-btn @click="clear">-->
                    <!--          Vaciar-->
                    <!--        </v-btn>-->
                  </v-col>
                </v-row>
              </form>
            </div>
          </template>
        </v-row>
      </v-form>
    </v-container>

  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
import emailjs from 'emailjs-com';
export default {
  name: "DenunciarView",
  components: {ToolBar},
  data: () => ({
    enviar: true,
    valid: true,
    message: '',
    motivoRules: [
      v => !!v || "Este campo es obligatorio.",
    ],
    motivo: '',
    select_motivo: ["Actividad sospechosa", "Maltrato", "Información falsa", "Otro"],

  }),
  methods: {
    sendEmail() {
      this.enviar = !this.enviar;
      try {
        // let msg = document.querySelector(".message");
        // sendmail(msg.value);
        emailjs.send('service_l002xcc', "template_vmrtpkg", {from_name: 'anonymous user', message: this.message} , "9NintuMJFVoZp7lWB");
      } catch (error) {
        console.log({error});
      }
      setTimeout(() => {
        this.enviar = !this.enviar;
        this.message = '';
      }, 2000);
    },
  }
}

// function sendmail(msg) {
//   emailjs.send("service_l002xcc", "template_vmrtpk", {
//     message: msg
//   });
// }

</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

</style>