<!--COMENTARIO: LAS IMAGENES SON ILUSTRATIVAS, ESTO SE HACE CON INFO DEL BACK-->

<template>
  <div>
    <!-- COMENTARIO: CAMBIAR LAS IMAGENES POR LAS IMAGENES DE LA BASES DE DATOS: HACER UN FOR -->
    <v-container>
      <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
        <v-col
          v-for="(pet, idx) in petsArray"
          :key="pet.name"
        >
          <div class="subheading pt-4">
<!--            {{getName(pet)}}-->
            {{pet.name}}
          </div>
          <a href="/elijoPerro">
<!--            <v-img :src="getImg(pet)" max-width="200px"/>-->
                <v-img :src="pet.imgLink" max-width="200px" height="200px" @click="setId(idx)"/>
          </a>
        </v-col>
<!--        <v-col>-->
<!--          <div class="subheading pt-4">-->
<!--            Nala-->
<!--          </div>-->
<!--            <a href="/elijoPerro">-->
<!--              <v-img :src="require('../assets/perrito1.jpg')" max-width="200px"/>-->
<!--            </a>-->

<!--        </v-col>-->
<!--        <v-col>-->
<!--          <div class="subheading pt-4">-->
<!--            Roma-->
<!--          </div>-->
<!--          <v-img :src="require('../assets/perrito2.jpg')" max-width="200px"/>-->
<!--        </v-col>-->
<!--        <v-col>-->
<!--          <div class="subheading pt-4">-->
<!--            Tai-->
<!--          </div>-->
<!--          <v-img :src="require('../assets/perrito3.jpg')" max-width="200px"/>-->
<!--        </v-col>-->
<!--        <v-col>-->
<!--          <div class="subheading pt-4">-->
<!--            Mate-->
<!--          </div>-->
<!--          <v-img :src="require('../assets/perrito5.jpg')" max-width="200px"/>-->
<!--        </v-col>-->
<!--        <v-col>-->
<!--          <div class="subheading pt-4">-->
<!--            Salta-->
<!--          </div>-->
<!--          <v-img :src="require('../assets/perrito6.jpg')" max-width="200px"/>-->
<!--        </v-col>-->
      </v-row>
    </v-container>
  </div>
</template>



<script>

import {collection, getDocs } from "firebase/firestore"
import db from "../firebase/initFirebase"

export default {
  name: "AdoptaPerros",
  components: {},
  data: () => ({
    petsArray: [],
    petsId: [],
  }),
  methods: {
    async getPets(){
      const querySnapshot = await getDocs(collection(db, "pets"));
      querySnapshot.forEach((doc) => {
        // console.log(doc.data())
        this.petsId.push(doc.id);
        this.petsArray.push(doc.data());
      });
      // console.log(this.petsArray);
      // console.log(this.petsArray);
      // console.log(this.petsId[0]);
      // console.log("pet name:", this.petsArray[0].name);
    },
    setId(idx){
      localStorage.setItem("id", this.petsId[idx]);
      // console.log(localStorage.getItem("id"));
      // this.$store.commit('setPetId', this.petsId[idx]);
      // console.log(this.$store.getters.getPetId);
    }
  },
  computed:{
    getName(index){
      // console.log("index1: ", index);
      return this.petsArray[index].name;
    },
    getImg(index){
      // console.log("index2: ", index);
      return this.petsArray[index].imgLink;
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