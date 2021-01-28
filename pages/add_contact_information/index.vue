<template>
  <div>
    <HeaderBar
      title="Contact information"
      :backButton="{ visible: true, url: '/' }"
    />
    <PageContentContainer>
      <CaptureContactInformationForm />
    </PageContentContainer>
  </div>
</template>
<script>
import CaptureContactInformationForm from "@/components/app-specific/forms/CaptureContactInformationForm";
import HeaderBar from "@/components/app-agnostic/HeaderBar";
import PageContentContainer from "@/components/app-agnostic/PageContentContainer";

export default {
  components: {
    CaptureContactInformationForm,
    HeaderBar,
    PageContentContainer,
  },
};
</script>
