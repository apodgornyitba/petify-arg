<!--COMENTARIO: claramente aca faltan un millon de cosas, lo hice mas visual-->

<template>
  <div>
    <tool-bar/>
    <v-container>
      <v-row align="center">
        <v-col>
          <h2>Sus notificaciones:</h2>
          <h3>-Patitas al rescate ha aceptado su solicitud de Tránsito para Nala.</h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "NotificacionesView",
  components: {ToolBar}
}
</script>

<style scoped/>
