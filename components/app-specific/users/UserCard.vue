<template>
  <div v-if="Object.keys(userData).length > 0" class="cas-user-card">
    <v-card-title>
      {{ userObject.firstName }} {{ userObject.lastName }}
    </v-card-title>
    <Chip> Email: {{ userObject.email }} </Chip>
    <Chip v-if="userObject.cellPhone.length > 0">
      Cell: {{ userObject.cellPhone }}
    </Chip>
    <Chip> Gender: {{ userObject.gender }}</Chip>
    <Chip> Height (cm): {{ userObject.height }} </Chip>
    <Chip v-if="userObject.weight > 0">
      Weight (kg): {{ userObject.weight }}
    </Chip>
    <Chip v-if="userObject.recentlySick">recently sick</Chip>
    <v-btn class="cas-delete-user-button" @click="deleteUser(userObject.id)">
      <v-icon> mdi-delete </v-icon>
    </v-btn>
  </div>
</template>

<script>
import Chip from "@/components/app-agnostic/Chip";

export default {
  name: "UserCard",
  components: { Chip },
  props: {
    userObject: {
      type: Object,
    },
  },
  data() {
    return {
      userData: {},
    };
  },
  created: function () {
    this.userData = this.userObject;
  },
  methods: {
    async deleteUser(id) {
      try {
        // eslint-disable-next-line no-undef
        await this.$axios.$delete(`${process.env.BASE_URL}/api/users/${id}`);
        this.userData = {};
      } catch (err) {
        alert("Oops, something went wrong");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.cas-user-card {
  @include boxShadow(0px, 2px, 5px, 0px, rgba(50, 50, 50, 0.5));
  border: 1px solid #546e7a;
  border-radius: 5px;
  flex-basis: 300px;
  height: 300px;
  margin: 0 10px 20px;
  padding: 10px;
  transition-duration: 150ms;
  transition-timing-function: ease-out;
  background-color: white;
  z-index: 1;
  position: relative;
  top: 0;
  left: 0;

  &:hover {
    transform: scale(1.1);
  }

  .cas-delete-user-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
