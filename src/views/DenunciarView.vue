<template>
<!--  COMENTARIO: hacer esto mejor-->
  <div>
    <ToolBar/>
    <v-container>
      <v-row class="align-center">
        <v-col>
          <h2>
            Formulario para denunciar comportamiento extraño de un refugio
          </h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "DenunciarView",
  components: {ToolBar}
}
</script>

<style scoped>

</style>