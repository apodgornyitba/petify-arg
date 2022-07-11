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
            {{pet.name}}
          </div>
          <a>
                <v-img :src="pet.imgLink" max-width="200px" height="200px" @click="setId(idx)"/>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>

import {collection, query, where, getDocs } from "firebase/firestore"
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