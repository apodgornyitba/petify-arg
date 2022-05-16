<template>
  <v-row>
    <v-col
        md="6"
        cols="12">
      <v-select
          outlined
          filled
          :label="this.label"
          :items="this.items"
      ></v-select>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "SelectFields",
  props: {
    label:{
      type: String,
      required: false
    },
    items:{
      type: Array,
      required: false
    }
  }
}
</script>

<style scoped>

</style>