<template>
  <div>
    <ToolBar/>
    <v-container>
      <SearchBar/>
      <v-card
          class="mx-auto"
      >
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left blue--text text--darken-4">
                Contacto
              </th>
              <th class="text-left blue--text text--darken-4">
                Localización
              </th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in transitos"
                :key="item.name"
            >
              <td class="text-left blue--text text--darken-4">{{ item.name }}</td>
              <td class="text-left blue--text text--darken-4">{{ item.location }}</td>
              <td> <v-btn icon><v-icon :color="grey">
                mdi-message-plus-outline
              </v-icon> </v-btn> </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
import SearchBar from "@/components/SearchBar";
export default {
  name: "TransitosView",
  components: {SearchBar, ToolBar},
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