<template>
  <div>
      <ToolBar/>
    <v-container>

      <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
        <v-col
            v-for="(pet, idx) in petsArray"
            :key="pet.name"
        >
          <div class="subheading pt-4">
            {{pet.name}}
          </div>
          <a>
            <v-img :src="pet.imgLink" max-width="200px" height="200px" @click="setId(idx)"/>
          </a>
        </v-col>

      <!--  <SearchBar/>
      <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
        <v-col>
          <div class="subheading pt-4">
            Nala
          </div>
          <a href="/elijoPerro">
            <v-img :src="require('../assets/perrito1.jpg')" max-width="200px"/>
          </a>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Roma
          </div>
          <v-img :src="require('../assets/perrito2.jpg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Tai
          </div>
          <v-img :src="require('../assets/perrito3.jpg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Mate
          </div>
          <v-img :src="require('../assets/perrito5.jpg')" max-width="200px"/>
        </v-col>
        <v-col>
          <div class="subheading pt-4">
            Salta
          </div>
          <v-img :src="require('../assets/perrito6.jpg')" max-width="200px"/>
        </v-col>-->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from "@/components/Toolbar";
import {collection, getDocs, query, where} from "firebase/firestore";
import db from "@/firebase/initFirebase";
// import SearchBar from "@/components/SearchBar";
export default {
  name: "PerrosView",
  components: {ToolBar},
  data: () => ({
    petsArray: [],
    petsId: [],
  }),
  methods: {
    async getPets(){
      const q = query(collection(db, "pets"), where("type", "==", "PERRO"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.petsId.push(doc.id);
        this.petsArray.push(doc.data());
      });
    },
    setId(idx){
      localStorage.setItem("id", this.petsId[idx]);
      setTimeout(() => this.$router.push('/elijoPerro'), 200);
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
}
</script>

<style scoped>

</style>