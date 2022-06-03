<template>
  <div>
    <ToolBar/>
    <!-- v-if si son un cliente solo ven la info -->
    <v-container>
      <v-row>
      <v-col>
        <SearchBar/>
      </v-col>
      </v-row>
    </v-container>
    <v-card>
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
    <!-- v-if si son un refugio deben cargar la info
    <CargarDatos/> -->
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
//import CargarDatos from "@/components/CargarDatos";
import AdoptaPerros from "@/components/AdoptaPerrosLowerBody";
import AdoptaGatos from "@/components/AdoptaGatosLowerBody";
import SearchBar from "@/components/SearchBar";

export default {
  name: "AdoptView",
  components: {SearchBar, AdoptaGatos, AdoptaPerros, ToolBar},
  //components: {CargarDatos, ToolBar},
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