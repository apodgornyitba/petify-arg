<template>
<!--  COMENTARIO: hacer esto mejor-->
  <div>
    <ToolBar/>
    <v-container>
      <v-row class="align-center" style="margin-top: 50px">
        <v-col>
          <h2>
            Formulario para denunciar comportamiento extraño de un refugio
          </h2>
          <v-divider/>
          <h4>
            <v-icon>mdi-information</v-icon>
            Tu denuncia es anónima y es muy importante para nosotros, esto nos ayuda a mantener la seguridad de los animales. En caso de una emergencia, recomendamos llamar a la policía, no esperes.
          </h4>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col cols="8">
          <SelectFields label="Motivo" :items=select_motivo></SelectFields>
        </v-col>
        <v-col cols="8">
          <v-text-field
              name="Motivo"
              label="Más detalles"
              v-model="motivo"
          >
          </v-text-field>
        </v-col>

      </v-row>

      <v-row>
        <v-btn
            class="mr-4"
            type="submit"
        >
          Enviar
        </v-btn>
        <v-btn @click="clear">
          Vaciar
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
import SelectFields from "@/components/SelectFields";
export default {
  name: "DenunciarView",
  components: {SelectFields, ToolBar},
  data: () => ({
    motivo: '',
    select_motivo: ["Actividad sospechosa", "Maltrato", "Información falsa", "Otro"],

  }),
}

</script>

<style scoped>

</style>