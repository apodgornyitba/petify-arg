<template>
  <div>
    <v-container>
      <SearchBar/>
      <v-card
          class="mx-auto"
      >
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left blue--text text--darken-4">Usuarios
              </th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in users"
                :key="item"
            >
              <td class="text-left blue--text text--darken-4"> <v-btn text style="text-transform: none" class="text-left blue--text text--darken-4" to="/RefugiosAnswerView">{{ item }}</v-btn></td>
              <td> <v-btn @click="show = !show" icon><v-icon style="color: lightblue;">
                {{!show ? 'mdi-heart-outline' : 'mdi-heart' }}
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

import SearchBar from "@/components/SearchBar";
export default {
  name: "RefugiosUser",
  components: {SearchBar},
  data: () => ({
    users: ["Sol Anselmo", "Andres Podgorny", "Juan Pablo Arias", "Camila Sierra", "Magdalena Flores", "Mateo Menghini"],
    spacer: "\t\t\t",
    show: false
  }),
}
</script>

<style scoped>

</style>