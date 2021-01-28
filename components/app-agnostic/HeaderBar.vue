<template>
  <header class="caa-header-bar caa-slide-down">
    <NuxtLink
      v-if="backButton.visible"
      :to="backButton.url"
      class="caa-back-button"
    >
      <font-awesome-icon :icon="['fa', 'angle-left']" style="font-size: 1em" />
    </NuxtLink>
    <div v-if="title !== ''" class="caa-title">
      {{ title }}
    </div>
    <nav class="caa-nav-container">
      <div v-for="(item, index) in menuItems" :key="index" class="caa-link">
        <NuxtLink :to="item.url"> {{ item.text }} </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
    menuItems: {
      type: Array,
      default() {
        return [];
      },
    },
    backButton: {
      type: Object,
      default() {
        return {
          visible: false,
          url: "/",
        };
      },
    },
  },
};
</script>

<style scoped lang="scss">
$break-point-width: 900px;

.caa-header-bar {
  @include boxShadow(0px, 2px, 5px, 0px, rgba(50, 50, 50, 0.5));
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  min-height: 50px;
  align-items: center;
  background-color: white;
  padding: 5px 15px;

  @media only screen and (max-width: $break-point-width) {
    position: static;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
  }

  &.caa-slide-down {
    animation-name: slideDown;
    animation-duration: 500ms;
    animation-timing-function: ease-in-out;
  }

  .caa-title {
    flex: 2;
    padding: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;

    @media only screen and (max-width: $break-point-width) {
      flex: 1;
      width: 100%;
    }
  }

  .caa-back-button {
    margin-right: 65px;
  }

  .caa-nav-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding: 5px;

    @media only screen and (max-width: $break-point-width) {
      flex: 9;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    .caa-link {
      width: 150px;
      text-align: center;
      text-transform: uppercase;
      font-size: 0.9em;
      color: grey;
      margin: 10px 0;
      opacity: 0.9;
      transition-duration: 150ms;
      transition-timing-function: ease-out;

      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
}
</style>
