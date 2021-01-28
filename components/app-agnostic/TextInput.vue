<template>
  <div class="caa-text-input-container caa-fade-in">
    <input
      v-if="variant === 'text'"
      type="text"
      :placeholder="placeholderText"
      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      @input="handleInput"
      :value="value"
    />

    <input
      v-if="variant === 'email'"
      type="email"
      :placeholder="placeholderText"
      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      @input="handleInput"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholderText: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleInput({ target: { value } }) {
      this.$emit("on-input", value);
    },
  },
};
</script>

<style scoped lang="scss">
.caa-text-input-container {
  padding: 10px 0;
  margin: 10px 0;

  &.caa-fade-in {
    animation-name: fadeIn;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
    transform: translateY(0);
  }
}
</style>
