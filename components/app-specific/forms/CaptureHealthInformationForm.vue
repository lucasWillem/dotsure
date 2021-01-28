<template>
  <v-container>
    <TextInput
      placeholder-text="Height (cm)"
      variant="text"
      @on-input="onHeightChanged"
      :value="height"
    />
    <span
      class="notification error"
      v-if="$v.height.$invalid && $v.height.$dirty"
      >Please provide a valid height
    </span>
    <TextInput
      placeholder-text="Weight (kg)"
      variant="text"
      @on-input="onWeightChanged"
      :value="weight"
    />

    <span
      class="notification error"
      v-if="$v.weight.$invalid && $v.weight.$dirty"
      >Please provide a valid weight
    </span>

    <CheckBox
      label-text="Recently Sick"
      :is-checked-value="recentlySick"
      @on-check="setRecentlySick"
    />

    <SubmissionButton
      :inputs-valid="inputsValid"
      relevant-screen="healthInfo"
      button-text="submit health information"
      @on-validate-health-info="onClick"
    />
  </v-container>
</template>

<script>
import { required, numeric, between } from "vuelidate/lib/validators";

import TextInput from "@/components/app-agnostic/TextInput";
import CheckBox from "@/components/app-agnostic/CheckBox";
import SubmissionButton from "@/components/app-agnostic/SubmissionButton";

export default {
  components: {
    TextInput,
    CheckBox,
    SubmissionButton,
  },
  created() {
    this.height = this.$store.getters.height;
    this.weight = this.$store.getters.weight;
    this.recentlySick = this.$store.getters.recentlySick;
  },
  data() {
    return {
      height: "",
      weight: "",
      recentlySick: false,
      inputsValid: null,
    };
  },
  validations: {
    height: {
      required,
      numeric,
      between: between(1, 230),
    },
    weight: {
      numeric,
      between: between(1, 200),
    },
  },

  methods: {
    onHeightChanged(value) {
      this.height = value.trim();
      this.$store.dispatch("setHeight", this.height);
    },
    onWeightChanged(value) {
      this.weight = value.trim();
      this.$store.dispatch("setWeight", this.weight);
    },
    setRecentlySick(value) {
      this.recentlySick = value;
      this.$store.dispatch("setRecentlySick", this.recentlySick);
    },
    onClick() {
      this.$v.height.$touch();
      this.$v.weight.$touch();

      if (this.$v.height.$invalid || this.$v.weight.$invalid) {
        this.inputsValid = false;
      } else {
        this.inputsValid = true;
      }
    },
  },
};
</script>
