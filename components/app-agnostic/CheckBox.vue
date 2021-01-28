<template>
  <v-container>
    <v-checkbox v-model="isChecked" :label="labelText"></v-checkbox>
  </v-container>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
    },
    isCheckedValue: {
      type: Boolean,
    },
  },

  data() {
    return {
      isChecked: this.isCheckedValue,
    };
  },
  watch: {
    isChecked() {
      this.$emit("on-check", this.isChecked);
    },
  },
};
</script>
<style scoped></style>
