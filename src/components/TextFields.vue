<template>
    <v-text-field
        outlined
        filled
        :v-model="this.data"
        :label="this.label"
        :rules="this.rules"
        required
    ></v-text-field>
</template>

<script>
export default {
  name: "TextFields",
  props: {
    data: String,
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