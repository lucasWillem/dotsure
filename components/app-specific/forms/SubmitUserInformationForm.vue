<template>
  <v-container>
    <CheckBox
      label-text="Accept"
      :is-checked-value="submissionAccepted"
      @on-check="checkSubmissionAccepted"
    />
    <SubmissionButton
      relevant-screen="finalizeInfo"
      button-text="Finalize"
      @on-submit-info="onClick"
    />
    <span class="notification error" v-if="errMessageToUser.length > 0">{{
      errMessageToUser
    }}</span>
    <span class="notification success" v-if="successMessageToUser.length > 0">{{
      successMessageToUser
    }}</span>
  </v-container>
</template>

<script>
import CheckBox from "@/components/app-agnostic/CheckBox";
import SubmissionButton from "@/components/app-agnostic/SubmissionButton";

export default {
  components: {
    CheckBox,
    SubmissionButton,
  },
  created() {
    this.submissionAccepted = this.$store.getters.submissionAccepted;
  },
  updated() {
    this.submissionAccepted = this.$store.getters.submissionAccepted;
  },
  data() {
    return {
      submissionAccepted: false,
      defaultState: {
        recentlySick: false,
        submissionAccepted: false,
        selectedItem: "",
        firstName: "",
        lastName: "",
        cellPhone: "",
        email: "",
        height: "",
        weight: "",
      },
      errMessageToUser: "",
      successMessageToUser: "",
    };
  },

  methods: {
    checkSubmissionAccepted(value) {
      this.submissionAccepted = value;
      this.$store.dispatch("setSubmissionAccepted", this.submissionAccepted);
    },
    async onClick() {
      const formData = {
        gender: this.$store.getters.selectedItem,
        firstName: this.$store.getters.firstName,
        lastName: this.$store.getters.lastName,
        cellPhone: this.$store.getters.cellPhone,
        email: this.$store.getters.email,
        height: this.$store.getters.height,
        weight: this.$store.getters.weight,
        recentlySick: this.$store.getters.recentlySick,
        acceptedSubmission: this.$store.getters.submissionAccepted,
      };

      if (formData.acceptedSubmission === true) {
        this.$store.dispatch("resetState", this.defaultState);
        this.successMessageToUser =
          "Thank you, your information has been received";
        this.errMessageToUser = "";
      }

      try {
        if (formData.acceptedSubmission === false) {
          throw new Error("Please accept the submission of your information");
        }

        await this.$axios.$post(
          // eslint-disable-next-line no-undef
          `${process.env.BASE_URL}/api/users`,
          formData
        );

        setTimeout(() => this.$router.push("view_all_users"), 1000);
      } catch (err) {
        //alert(err.message);
        this.errMessageToUser = err.message;
        this.successMessageToUser = "";
      }
    },
  },
};
</script>
