<template>
  <div v-if="childComponentGiven" class="caa-page-content-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "PageContentContainer",
  computed: {
    childComponentGiven() {
      return !!this.$slots.default;
    },
  },
};
</script>

<style scoped lang="scss">
.caa-page-content-container {
  margin: 100px 50px 10px;
}
</style>
