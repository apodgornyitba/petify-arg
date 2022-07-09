<template>
  <div>
    <v-container>
      <!-- <SearchBar/> -->
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
                v-for="(user, idx) in usersArray"
                :key="user.name"
            >
              <td class="text-left blue--text text--darken-4">
                <v-btn text style="text-transform: none" class="text-left blue--text text--darken-4"
                       to="/RefugiosAnswerView"
                       @click="setId(idx)">
                {{ user.name }} {{ user.surname }}
              </v-btn></td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>

//import SearchBar from "@/components/SearchBar";
import {collection, getDocs} from "firebase/firestore";
import db from "@/firebase/initFirebase";
export default {
  name: "RefugiosUser",
  components: {},
  data: () => ({
    fav: false,
    usersArray: [],
    usersId: [],
  }),
  methods: {
    async getUsers(){
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        this.usersId.push(doc.id);
        this.usersArray.push(doc.data());
        console.log(this.usersArray)
      });
    },
    setId(idx){
      localStorage.setItem("id", this.usersId[idx]);
    }
  },
  watch:{
    $getUsers(){
      this.getUsers();
    }
  },
  beforeMount() {
    this.getUsers();
  }
}
</script>

<style scoped>

</style>