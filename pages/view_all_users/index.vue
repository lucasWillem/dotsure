<template>
  <div>
    <HeaderBar title="Users" :menuItems="menuItems" />
    <PageContentContainer>
      <UserCardsContainer />
    </PageContentContainer>
  </div>
</template>

<script>
import HeaderBar from "@/components/app-agnostic/HeaderBar";
import PageContentContainer from "@/components/app-agnostic/PageContentContainer";
import UserCardsContainer from "@/components/app-specific/users/UserCardsContainer";

export default {
  components: { HeaderBar, UserCardsContainer, PageContentContainer },
  data() {
    return {
      menuItems: [
        {
          text: "All users",
          url: "/view_all_users",
        },
        {
          text: "Create user",
          url: "/",
        },
      ],
    };
  },
};
</script>
