<template>
  <v-container>
  <v-card>
    <v-tabs
        v-model="tab"
        background-color="primary"
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

        <v-card flat>
          <DonateLowerBody/>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <DonateAnimalLowerBody/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-container>
</template>


<script>
import DonateLowerBody from "@/components/DonateLowerBody";
import DonateAnimalLowerBody from "@/components/DonateAnimalLowerBody";
export default {
  name: 'PruebaView',
  components:{DonateAnimalLowerBody, DonateLowerBody},
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Refugio', content: 'Tab 1 Content' },
        { tab: 'Animal', content: 'Tab 2 Content' },
      ],
    }
  },
}
</script>

<style scoped>

</style>