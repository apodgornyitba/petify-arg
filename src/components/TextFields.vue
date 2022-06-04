<template>
    <v-text-field
        outlined
        filled
        :label="this.label"
        :rules="this.rules"
        required
    ></v-text-field>
</template>

<script>
export default {
  name: "TextFields",
  props: {
    label:{
      type: String,
    },
    rules:{
    },
  }

}
</script>

<style scoped>
.v-text-field{
  width: 500px;
}
</style>