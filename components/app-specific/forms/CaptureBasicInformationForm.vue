<template>
  <v-container>
    <DropdownMenu @on-dropdown-item-selected="handleDropdownSelected" />
    <span
      class="notification error"
      v-if="$v.selectedItem.$invalid && $v.selectedItem.$dirty"
      >Please select a gender
    </span>
    <TextInput
      placeholder-text="First Name"
      variant="text"
      @on-input="onFirstNameChanged"
      :value="firstName"
    />
    <span
      class="notification error"
      v-if="$v.firstName.$invalid && $v.firstName.$dirty"
      >Please provide a value consisting of [a - z]
    </span>
    <TextInput
      placeholder-text="Last Name"
      variant="text"
      @on-input="onLastNameChanged"
      :value="lastName"
    />
    <span
      class="notification error"
      v-if="$v.lastName.$invalid && $v.lastName.$dirty"
      >Please provide a value consisting of [a - z]
    </span>

    <SubmissionButton
      :inputs-valid="inputsValid"
      relevant-screen="basicInfo"
      button-text="submit basic information"
      @on-validate-basic-info="onClick"
    />
  </v-container>
</template>

<script>
import { helpers, required, alpha, or } from "vuelidate/lib/validators";

import SubmissionButton from "@/components/app-agnostic/SubmissionButton";
import TextInput from "@/components/app-agnostic/TextInput";
import DropdownMenu from "@/components/app-agnostic/DropdownMenu";

export default {
  components: {
    SubmissionButton,
    TextInput,
    DropdownMenu,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      selectedItem: "",
      inputsValid: null,
    };
  },
  created() {
    this.firstName = this.$store.getters.firstName;
    this.lastName = this.$store.getters.lastName;
  },
  validations: {
    firstName: {
      required,
      alpha: or(helpers.regex("alpha", /\s/g, ""), alpha),
    },
    lastName: {
      required,
      alpha: or(helpers.regex("alpha", /\s/g, ""), alpha),
    },
    selectedItem: {
      required,
      alpha,
    },
  },

  methods: {
    onFirstNameChanged(value) {
      this.firstName = value.trim();
      this.$store.dispatch("setFirstName", this.firstName);
    },
    onLastNameChanged(value) {
      this.lastName = value.trim();
      this.$store.dispatch("setLastName", this.lastName);
    },
    handleDropdownSelected(value) {
      this.selectedItem = value;
      this.$store.dispatch("setSelectedItem", this.selectedItem);
    },
    onClick() {
      this.$v.firstName.$touch();
      this.$v.lastName.$touch();
      this.$v.selectedItem.$touch();

      if (
        this.$v.selectedItem.$invalid ||
        this.$v.firstName.$invalid ||
        this.$v.lastName.$invalid
      ) {
        this.inputsValid = false;
      } else {
        this.inputsValid = true;
      }
    },
  },
};
</script>
