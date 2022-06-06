<template>
  <div>
      <ToolBar/>
    <v-container>
      <SearchBar/>
        <!-- <v-col>
          <v-select label="Filtrar" :items="['Más consultados', 'Más cercanos', '...']"/>
        </v-col> -->
      <v-card
          class="mx-auto"
      >
        <v-list header>
            <template v-for="(refugio,index) in refugios">
              <v-list-item :key="refugio.name">
            <v-list-item-avatar>
              <a href="/PerfilRefugio">
                <v-img
                    :alt="`${refugio.name} avatar`"
                    :src="require(`@/assets/Refugios/${refugio.avatar}`)"
                ></v-img>
              </a>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-name v-text="refugio.name"></v-list-item-name>
            </v-list-item-content>

            <v-list-item-icon>
              <v-btn
                  icon
                  to="/denunciar"
              >
                <v-icon :color="grey">
                  mdi-message-alert-outline
                </v-icon>
              </v-btn>

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
import SearchBar from "@/components/SearchBar";
export default {
  name: "RefugiosView",
  components: {SearchBar, ToolBar},
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