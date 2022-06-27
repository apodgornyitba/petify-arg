<template>
  <div>
    <ToolBar/>
      <v-card>

        <v-tabs
            v-model="tab"
            background-color="#EFEEF1"
            color="#2A537A"
            class="black--text"
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
              <DonateLowerBody/>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card outlined tile  color="#EFEEF1">
              <DonateAnimalLowerBody/>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card outlined tile  color="#EFEEF1">
              <DonateUsLowerBody/>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
  </div>
</template>

<script>

import ToolBar from "@/components/Toolbar";
import DonateLowerBody from "@/components/DonateLowerBody";
import DonateAnimalLowerBody from "@/components/DonateAnimalLowerBody";
import DonateUsLowerBody from "@/components/DonateUsLowerBody";
export default {
  name: 'DonateView"',
  components:{DonateUsLowerBody, ToolBar, DonateAnimalLowerBody, DonateLowerBody},
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Refugio', content: 'Tab 1 Content' },
        { tab: 'Animal', content: 'Tab 2 Content' },
        { tab: 'Petify', content: 'Tab 3 Content' },
      ],
    }
  },
}
</script>

<style scoped>

</style>