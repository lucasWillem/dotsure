<template>
  <div>
    <HeaderBar
      title="Please confirm"
      :backButton="{ visible: true, url: '/add_health_information' }"
    />
    <PageContentContainer>
      <p>
        Your information will be stored in our database after clicking the
        'Finalize' button. Please confirm that this is okay.
      </p>
      <SubmitUserInformationForm />
    </PageContentContainer>
  </div>
</template>

<script>
import HeaderBar from "@/components/app-agnostic/HeaderBar";
import SubmitUserInformationForm from "@/components/app-specific/forms/SubmitUserInformationForm";
import PageContentContainer from "@/components/app-agnostic/PageContentContainer";

export default {
  components: { HeaderBar, SubmitUserInformationForm, PageContentContainer },
};
</script>
