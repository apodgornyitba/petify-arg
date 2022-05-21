<template>
  <div>
    <ToolBar/>
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
            <SobreMi/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card outlined tile  color="#EFEEF1">
            <AdopcionLowerBody/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card outlined tile  color="#EFEEF1">
            <ConfiguracionLB/>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>


<script>
import ToolBar from "@/components/Toolbar";
import AdopcionLowerBody from "@/components/AdopcionLowerBody";
import SobreMi from "@/components/SobreMiLowerBody";
import ConfiguracionLB from "@/components/ConfiguracionLowerBody";
export default {
  name: "UserProfileView",
  components: {ConfiguracionLB, AdopcionLowerBody, SobreMi, ToolBar},
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Sobre mi', content: 'Tab 1 Content' },
        { tab: 'Perfil de adopción', content: 'Tab 2 Content' },
        { tab: 'Configuración', content: 'Tab 3 Content' },
      ],
    }
  },
}
</script>

<style scoped>
</style>