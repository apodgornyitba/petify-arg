<template>
      <v-select
          outlined
          filled
          :label="this.label"
          :items="this.items"
      ></v-select>
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
.v-select {
  width: 500px;
}
</style>