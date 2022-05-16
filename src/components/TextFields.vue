<template>
    <v-text-field
        outlined
        filled
        :label="this.label"
    ></v-text-field>
</template>

<script>
export default {
  name: "TextFields",
  props: {
    label:{
      type: String,
    },
  }

}
</script>

<style scoped>
.v-text-field{
  width: 500px;
}
</style>