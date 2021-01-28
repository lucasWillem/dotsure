<template>
  <div>
    <HeaderBar title="Basic information" :menuItems="menuItems" />
    <PageContentContainer>
      <CaptureBasicInformationForm />
    </PageContentContainer>
  </div>
</template>

<script>
import CaptureBasicInformationForm from "@/components/app-specific/forms/CaptureBasicInformationForm";
import HeaderBar from "@/components/app-agnostic/HeaderBar";
import PageContentContainer from "@/components/app-agnostic/PageContentContainer";

export default {
  components: { CaptureBasicInformationForm, HeaderBar, PageContentContainer },
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
