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
        <v-col>
          <v-select label="Filtrar" :items="['Más consultados', 'Más cercanos', '...']"/>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-card
          class="mx-auto"
          max-width="700"
      >
        <v-list header>
            <template v-for="(refugio,index) in refugios">
              <v-list-item :key="refugio.name">
            <v-list-item-avatar>
              <v-img
                  :alt="`${refugio.name} avatar`"
                  :src="require(`@/assets/Refugios/${refugio.avatar}`)"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-name v-text="refugio.name"></v-list-item-name>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon :color="grey">
                mdi-message-plus-outline
              </v-icon>
            </v-list-item-icon>
              </v-list-item>
              <v-divider
                  v-if="index< refugios.length - 1"
                  :key="index"
              ></v-divider>
            </template>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
export default {
  name: "RefugiosView",
  components: {ToolBar},
  data: () => ({
    refugios: [
      {
        avatar: 'patitas-al-rescate.png',
        name: 'Patitas al rescate',
      },
        {
        avatar: 'colitaFeliz.png',
        name: 'Colita Feliz',
      },
      {
        avatar: 'la-patita-feliz.png',
        name: 'La patita feliz',
      },
      {
        avatar: 'rescatando-huellitas.png',
        name: 'Rescatando huellitas',
      },
      {
        avatar: 'salvando-sus-vidas.png',
        name: 'Salvando sus vidas',
      },
      {
        avatar: 'zaguates.png',
        name: 'Zaguates',
      },
    ],
  }),
}
</script>

<style scoped>

</style>