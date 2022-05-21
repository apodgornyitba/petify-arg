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
    <v-container fluid class="hero">
      <v-row>
        <v-col style="margin-left: 500px">
          <h3 class="blue--text text--darken-4">Contacto</h3>
        </v-col>
        <v-spacer>
        </v-spacer>
        <v-col style="margin-right: 550px">
          <h3 class="blue--text text--darken-4">Localización</h3>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-card
          class="mx-auto"
          max-width="700"
      >
        <v-list header>
          <template v-for="(transito,index) in transitos">
            <v-list-item :key="transito.name">
              
              <v-list-item-content>
                <v-list-item-name class="blue--text text--darken-4"
                  v-text="transito.name + ' ' +transito.location"/>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon :color="grey">
                  mdi-message-plus-outline
                </v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-divider
                v-if="index< transitos.length - 1"
                :key="index"
            ></v-divider>
          </template>
        </v-list>

        <!--        </v-list>-->
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "TransitosView",
  components: {ToolBar},
  data: () => ({
    transitos: [
      {
        name: 'Guardería Los Carolos',
        location: 'Las Lomas 3200, GBA',
      },
      {
        name: 'Guardería Los Carolos',
        location: 'Las Lomas 3200, GBA',
      },
      {
        name: 'Guardería Los Carolos',
        location: 'Las Lomas 3200, GBA',
      },
      {
        name: 'Guardería Los Carolos',
        location: 'Las Lomas 3200, GBA',
      },
      {
        name: 'Guardería Los Carolos',
        location: 'Las Lomas 3200, GBA',
      },
      {
        name: 'Guardería Los Carolos',
        location: 'Las Lomas 3200, GBA',
      },
      {
        name: 'Guardería Los Carolos',
        location: 'Las Lomas 3200, GBA',
      },
    ],
    spacer: "\t\t\t"
  }),
}
</script>

<style scoped>

</style>