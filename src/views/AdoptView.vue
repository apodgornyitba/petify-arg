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
        append-outer-icon="mdi-magnify"
    ></v-text-field>
      </v-col>
      </v-row>
    </v-container>
    <v-card>
      <v-tabs
          v-model="tab"
          background-color="#D1E4F0"
          color="#2A537A"
          class="black--text"
          centered
          dark

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