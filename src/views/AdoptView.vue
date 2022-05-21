<template>
  <div>
    <ToolBar/>
    <v-container>
      <v-row align="center">
      <v-col style="margin-left: 200px" cols="8">
<!--        arreglar para que quede centrado sin esa ilegalidad-->
    <v-text-field
        outlined
        filled
        label="buscar"
        background-color="#689FD2"
        append-icon="mdi-magnify"
        dark
    ></v-text-field>
      </v-col>
      </v-row>
    </v-container>
    <v-card>
      <!--          COMENTARIO: FIJENSE SI EL TAB LES GUSTA MAS GRIS O CON EL COLOR CELESTE QUE ES ESTE "#D1E4F0"-->
      <v-tabs
          v-model="tab"
          background-color="#EFEEF1"
          color="#2A537A"
          centered
          light
          grow
      >
        <v-tab
            v-for="item in items"
            :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card outlined tile color="#EFEEF1">
            <AdoptaPerros/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card outlined tile  color="#EFEEF1">
            <AdoptaGatos/>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
import AdoptaPerros from "@/components/AdoptaPerrosLowerBody";
import AdoptaGatos from "@/components/AdoptaGatosLowerBody";

export default {
  name: "AdoptView",
  components: {AdoptaGatos, AdoptaPerros, ToolBar},
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Perros', content: 'Tab 1 Content' },
        { tab: 'Gatos', content: 'Tab 2 Content' },

      ],
    }
  },
}
</script>

<style scoped>

</style>