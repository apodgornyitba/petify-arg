<template>
  <div>
    <ToolBar/>
    <v-container fluid class="hero">
      <v-row class="text-center" style="margin-top: 100px"  >
        <v-col>
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="150"
                 height="100"
                 to="/perros"
          >
            <v-icon size="40px">mdi-dog</v-icon>
            Perros
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="150"
                 height="100"
                 to="/gatos"
          >
            <v-icon size="40px">mdi-cat</v-icon>
            Gatos</v-btn>
        </v-col>
        <v-col>
          <v-btn class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="150"
                 height="100"
                 to="/refugios"
          ><v-icon size="40px">mdi-home-map-marker</v-icon>
            Refugios</v-btn>
        </v-col>
        <v-col>
          <v-btn
              v-if="!this.$store.getters.isLoggedIn"
              class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="150"
                 height="100"
                 to="/signin"
          ><v-icon size="40px">mdi-heart</v-icon>
            Favoritos</v-btn>
          <v-btn
              v-if="this.$store.getters.isLoggedIn"
              class="white--text"
                 elevation="0"
                 padless color="#2A537A"
                 width="150"
                 height="100"
                 to="/favoritos"
          ><v-icon size="40px">mdi-heart</v-icon>
            Favoritos</v-btn>
        </v-col>
      </v-row>
    </v-container>
      <v-container>
        <h1 class="text-center" >
          En adopción:
        </h1>
        <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
          <v-col
            v-for="(pet, idx) in petsArray"
            :key="pet.name"
          >
            <div class="subheading pt-4">
              {{pet.name}}
            </div>
            <a href="/elijoPerro">
              <v-img :src="pet.imgLink" max-width="250px" height="250px" @click="setId(idx)">
              </v-img>
            </a>
          </v-col>
<!--          <v-col>-->
<!--            <a href="/elijoPerro">-->

<!--              <v-img :src="require('../assets/perrito1.jpg')" max-width="250px">-->
<!--              </v-img>-->
<!--            </a>-->
<!--          </v-col>-->
<!--          <v-col>-->
<!--          <v-img :src="require('../assets/perrito2.jpg')" max-width="250px"/>-->
<!--          </v-col>-->
<!--          <v-col>-->
<!--          <v-img :src="require('../assets/perrito3.jpg')" max-width="250px"/>-->
<!--          </v-col>-->
<!--          <v-col>-->
<!--            <v-img :src="require('../assets/perrito5.jpg')" max-width="250px"/>-->
<!--          </v-col>-->
        </v-row>
      </v-container>
  </div>
</template>
<script>

import ToolBar from "@/components/Toolbar";
import {collection, getDocs} from "firebase/firestore";
import db from "../firebase/initFirebase"

export default {
  name: 'HomeView',

  components: {ToolBar},

  data: () => ({
    fav: false,

    petsArray: [],
    petsId: [],
  }),
  methods: {
    async getPets(){
      const querySnapshot = await getDocs(collection(db, "pets"));
      querySnapshot.forEach((doc) => {
        this.petsId.push(doc.id);
        this.petsArray.push(doc.data());
        console.log(this.petsArray)
      });
    },
    setId(idx){
      localStorage.setItem("id", this.petsId[idx]);
    }
  },
  watch:{
    $getPets(){
      this.getPets();
    }
  },
  beforeMount() {
    this.getPets();
  }
};
</script>

<style scoped>
.hero {
  background: url('../assets/main_img.jpeg');
  background-size: cover;
  background-position: center center;
  height: 447px;
}
</style>

