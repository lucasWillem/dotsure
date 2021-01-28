<template>
  <div>
    <HeaderBar
      title="Medical information"
      :backButton="{ visible: true, url: '/add_contact_information' }"
    />
    <PageContentContainer>
      <CaptureHealthInformationForm />
    </PageContentContainer>
  </div>
</template>

<script>
import CaptureHealthInformationForm from "@/components/app-specific/forms/CaptureHealthInformationForm";
import HeaderBar from "@/components/app-agnostic/HeaderBar";
import PageContentContainer from "@/components/app-agnostic/PageContentContainer";

export default {
  components: { CaptureHealthInformationForm, HeaderBar, PageContentContainer },
};
</script>
