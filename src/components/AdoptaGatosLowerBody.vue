<!--COMENTARIO: LAS IMAGENES SON ILUSTRATIVAS, ESTO SE HACE CON INFO DEL BACK-->

<template>
  <div>
    <v-container>

      <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
        <v-col
            v-for="(pet, idx) in petsArray"
            :key="pet.name"
        >
          <div class="subheading pt-4">
            {{pet.name}}
          </div>
          <a href="/elijoPerro">
            <v-img :src="pet.imgLink" max-width="200px" height="200px" @click="setId(idx)"/>
          </a>
        </v-col>

        <!--

  <v-row class="align-left" style="margin-top: 20px; margin-bottom: 20px">
    <v-col>
      <div class="subheading pt-4">
        Boris
      </div>
      <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
    </v-col>
    <v-col>
      <div class="subheading pt-4">
        Sebastian
      </div>
      <v-img :src="require('../assets/gatito2.jpg')" max-width="200px"/>
    </v-col>
    <v-col>
      <div class="subheading pt-4">
        Mariana
      </div>
      <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
    </v-col>
    <v-col>
      <div class="subheading pt-4">
        Laura
      </div>
      <v-img :src="require('../assets/gatito2.jpg')" max-width="200px"/>
    </v-col>
    <v-col>
      <div class="subheading pt-4">
        Jose Luis
      </div>
      <v-img :src="require('../assets/gatito1.jpeg')" max-width="200px"/>
    </v-col> -->
  </v-row>
</v-container>

</div>
</template>

<script>
import {collection, getDocs, query, where} from "firebase/firestore";
import db from "@/firebase/initFirebase";

export default {
name: "AdoptaGatos",
components: {},
data: () => ({
petsArray: [],
petsId: [],
}),
methods: {
async getPets(){
  const q = query(collection(db, "pets"), where("type", "==", "GATO"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    this.petsId.push(doc.id);
    this.petsArray.push(doc.data());
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
}
</script>

<style scoped>

</style>