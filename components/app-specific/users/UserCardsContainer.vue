<template>
  <div>
    <div class="cas-user-card-container">
      <UserCard :user-object="user" v-for="user in users" :key="user.id" />
    </div>
    <div v-if="pagesCount > 0" class="cas-pager">
      Page:
      <select @change="onPageChanged">
        <option
          v-for="(number, index) in pageNumbersArray"
          :key="index"
          :value="number"
        >
          {{ number }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/app-specific/users/UserCard";

export default {
  components: { UserCard },
  created() {
    this.fetchUsers();
  },
  data() {
    return {
      users: [],
      pagesCount: 0,
    };
  },
  computed: {
    pageNumbersArray() {
      if (this.pagesCount === 0) {
        return [0];
      }

      return [...Array(this.pagesCount + 1).keys()].slice(1);
    },
  },
  methods: {
    onPageChanged({ target: { value } }) {
      this.fetchUsers(value);
    },
    async fetchUsers(page = "1") {
      try {
        const { data } = await this.$axios.$get(
          // eslint-disable-next-line no-undef
          `${process.env.BASE_URL}/api/users/page/${page}`
        );
        this.users = !data.users ? [] : data.users;
        this.pagesCount = !data.pagesCount ? 0 : data.pagesCount;
      } catch (err) {
        alert("Oops, something went wrong");
      }
    },
  },
};
</script>

<style scoped lang="scss">
$break-point-width: 900px;

.cas-user-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media only screen and (max-width: $break-point-width) {
    justify-content: center;
  }
}

.cas-pager {
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px;
  height: 50px;

  @media only screen and (max-width: $break-point-width) {
    position: static;
    text-align: center;
  }
}
</style>
