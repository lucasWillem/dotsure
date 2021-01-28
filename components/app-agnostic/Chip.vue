<template>
  <div v-if="childComponentGiven" class="caa-chip">
    <p class="caa-chip-text">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: "Chip",
  computed: {
    childComponentGiven() {
      const [childComponent] = this.$slots.default;

      if (childComponent) {
        const { text } = childComponent;
        return text && text.trim().length > 0;
      }

      return false;
    },
  },
};
</script>

<style scoped lang="scss">
$chip-width: 280px;

.caa-chip {
  padding: 5px 8px;
  margin: 5px;
  border: 1px solid #004d40;
  border-radius: 16px;
  background-color: #004d40;
  color: white;
  max-width: $chip-width;
  display: inline-block;

  .caa-chip-text {
    max-width: $chip-width;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.7em;
  }
}
</style>
