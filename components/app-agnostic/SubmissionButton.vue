<template>
  <div>
    <NuxtLink
      v-if="relevantScreen === 'basicInfo' && inputsValid"
      to="/add_contact_information"
    >
      <v-btn @click="validateBasicInformation" elevation="2">{{
        buttonText
      }}</v-btn>
    </NuxtLink>

    <NuxtLink v-if="relevantScreen === 'basicInfo' && !inputsValid" to="#">
      <v-btn @click="validateBasicInformation" elevation="2">{{
        buttonText
      }}</v-btn>
    </NuxtLink>

    <NuxtLink
      v-if="relevantScreen === 'contactInfo' && inputsValid"
      to="/add_health_information"
      ><v-btn @click="validateContactInformation" elevation="2">{{
        buttonText
      }}</v-btn>
    </NuxtLink>

    <NuxtLink v-if="relevantScreen === 'contactInfo' && !inputsValid" to="#"
      ><v-btn @click="validateContactInformation" elevation="2">{{
        buttonText
      }}</v-btn>
    </NuxtLink>

    <NuxtLink
      v-if="relevantScreen === 'healthInfo' && inputsValid"
      to="/accept_submission"
    >
      <v-btn @click="validateHealthInformation" elevation="2">{{
        buttonText
      }}</v-btn>
    </NuxtLink>

    <NuxtLink v-if="relevantScreen === 'healthInfo' && !inputsValid" to="#">
      <v-btn @click="validateHealthInformation" elevation="2">{{
        buttonText
      }}</v-btn>
    </NuxtLink>

    <NuxtLink v-if="relevantScreen === 'finalizeInfo'" to="#">
      <v-btn elevation="2" @click="handleSubmit">{{ buttonText }}</v-btn>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "SubmissionButton",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    relevantScreen: {
      type: String,
      required: true,
    },
    inputsValid: {
      type: [Boolean, null],
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("on-submit-info");
    },
    validateBasicInformation() {
      this.$emit("on-validate-basic-info");
    },
    validateContactInformation() {
      this.$emit("on-validate-contact-info");
    },
    validateHealthInformation() {
      this.$emit("on-validate-health-info");
    },
  },
};
</script>

<style scoped></style>
