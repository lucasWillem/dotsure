<template>
  <v-container>
    <TextInput
      placeholder-text="Cellphone Number"
      variant="text"
      @on-input="onCellphoneChanged"
      :value="cellPhone"
    />

    <span
      class="notification error"
      v-if="$v.cellPhone.$invalid && $v.cellPhone.$dirty"
      >Please provide a valid cellphone number
    </span>

    <TextInput
      placeholder-text="Email Address"
      variant="email"
      @on-input="onEmailChanged"
      :value="email"
    />
    <span class="notification error" v-if="$v.email.$invalid && $v.email.$dirty"
      >Please provide a valid email address
    </span>

    <SubmissionButton
      :inputs-valid="inputsValid"
      relevant-screen="contactInfo"
      button-text="submit contact information"
      @on-validate-contact-info="onClick"
    />
  </v-container>
</template>

<script>
import {
  numeric,
  email,
  required,
  maxLength,
  minLength,
  and,
} from "vuelidate/lib/validators";

import SubmissionButton from "@/components/app-agnostic/SubmissionButton";
import TextInput from "@/components/app-agnostic/TextInput";

export default {
  components: {
    SubmissionButton,
    TextInput,
  },
  created() {
    this.cellPhone = this.$store.getters.cellPhone;
    this.email = this.$store.getters.email;
  },
  data() {
    return {
      cellPhone: "",
      email: "",
      inputsValid: null,
    };
  },
  validations: {
    cellPhone: {
      numeric: and(numeric, minLength(10), maxLength(10)),
    },
    email: {
      required,
      email,
    },
  },

  methods: {
    onCellphoneChanged(value) {
      this.cellPhone = value.trim().replace(/\s/g, "");
      this.$store.dispatch("setCellPhone", this.cellPhone);
    },
    onEmailChanged(value) {
      this.email = value.trim();
      this.$store.dispatch("setEmail", this.email);
    },
    onClick() {
      this.$v.email.$touch();
      this.$v.cellPhone.$touch();

      if (this.$v.email.$invalid || this.$v.cellPhone.$invalid) {
        this.inputsValid = false;
      } else {
        this.inputsValid = true;
      }
    },
  },
};
</script>
