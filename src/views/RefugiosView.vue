<template>
  <div>
      <ToolBar/>
    <v-container>
      <!-- <SearchBar/>
        <v-col>
          <v-select label="Filtrar" :items="['Más consultados', 'Más cercanos', '...']"/>
        </v-col> -->

      <v-card
          class="mx-auto"
      >
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left blue--text text--darken-4">Refugios
              </th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(shelter, idx) in sheltersArray"
                :key="shelter.name"
            >
              <td class="text-left blue--text text--darken-4">
                <v-btn text style="text-transform: none" class="text-left blue--text text--darken-4"
                       @click="setId(idx)">
                  {{ shelter.name }}
                </v-btn></td>
              <td> <v-btn
                  icon
                  to="/denunciar"
              >
                <v-icon>
                  mdi-message-alert-outline
                </v-icon>
              </v-btn> </td>
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
import {collection, getDocs} from "firebase/firestore";
import db from "@/firebase/initFirebase";
//import SearchBar from "@/components/SearchBar";
export default {
  name: "RefugiosView",
  components: {ToolBar},
  data: () => ({
    sheltersArray: [],
    sheltersId: [],
  }),
  methods: {
    async getShelters(){
      const querySnapshot = await getDocs(collection(db, "shelters"));
      querySnapshot.forEach((doc) => {
        this.sheltersId.push(doc.id);
        this.sheltersArray.push(doc.data());
        console.log(this.sheltersArray)
      });
    },
    setId(idx){
      console.log(this.sheltersId[idx])
      localStorage.setItem("id", this.sheltersId[idx]);
      setTimeout(() => this.$router.push('/PerfilRefugio'), 200);
    }
  },
  watch:{
    $getShelters(){
      this.getShelters();
    }
  },
  beforeMount() {
    this.getShelters();
  }
}
</script>

<style scoped>

</style>