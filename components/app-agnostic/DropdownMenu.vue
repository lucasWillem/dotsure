<template>
  <v-container>
    <div>
      <div id="attachMenu"></div>
    </div>

    <v-select
      v-model="selectedItem"
      attach="#attachMenu"
      :items="dropdownItems"
      :label="title"
      chips
      outlined
    ></v-select>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ["Male", "Female", "Na"],
    },
    title: {
      type: String,
      default: () => "Gender",
    },
  },
  created() {
    this.selectedItem = this.$store.getters.selectedItem;
  },
  data() {
    return {
      dropdownItems: this.items,
      selectedItem: "",
    };
  },
  watch: {
    selectedItem() {
      this.$emit("on-dropdown-item-selected", this.selectedItem);
    },
  },
};
</script>
<style scoped></style>
