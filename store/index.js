import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
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
    mutations: {
      setRecentlySick(state, status) {
        state.recentlySick = status;
      },
      setSubmissionAccepted(state, status) {
        state.submissionAccepted = status;
      },
      setSelectedItem(state, selectedItem) {
        state.selectedItem = selectedItem;
      },

      setFirstName(state, firstName) {
        state.firstName = firstName;
      },
      setLastName(state, lastName) {
        state.lastName = lastName;
      },

      setCellPhone(state, cellPhone) {
        state.cellPhone = cellPhone;
      },

      setEmail(state, email) {
        state.email = email;
      },
      setHeight(state, height) {
        state.height = height;
      },
      setWeight(state, weight) {
        state.weight = weight;
      },
      resetState(state, defaultState) {
        Object.assign(state, defaultState);
      },
    },

    actions: {
      setRecentlySick(vuexContext, status) {
        vuexContext.commit("setRecentlySick", status);
      },
      setSubmissionAccepted(vuexContext, status) {
        vuexContext.commit("setSubmissionAccepted", status);
      },
      setSelectedItem(vuexContext, selectedItem) {
        vuexContext.commit("setSelectedItem", selectedItem);
      },
      setFirstName(vuexContext, firstName) {
        vuexContext.commit("setFirstName", firstName);
      },
      setLastName(vuexContext, lastName) {
        vuexContext.commit("setLastName", lastName);
      },

      setCellPhone(vuexContext, cellPhone) {
        vuexContext.commit("setCellPhone", cellPhone);
      },

      setEmail(vuexContext, email) {
        vuexContext.commit("setEmail", email);
      },
      setHeight(vuexContext, height) {
        vuexContext.commit("setHeight", height);
      },
      setWeight(vuexContext, weight) {
        vuexContext.commit("setWeight", weight);
      },
      resetState(vuexContext, defaultState) {
        vuexContext.commit("resetState", defaultState);
      },
    },
    getters: {
      recentlySick: (state) => {
        return state.recentlySick;
      },
      submissionAccepted: (state) => {
        return state.submissionAccepted;
      },
      selectedItem: (state) => {
        return state.selectedItem;
      },
      firstName: (state) => {
        return state.firstName;
      },
      lastName: (state) => {
        return state.lastName;
      },
      cellPhone: (state) => {
        return state.cellPhone;
      },
      email: (state) => {
        return state.email;
      },
      height: (state) => {
        return state.height;
      },
      weight: (state) => {
        return state.weight;
      },
    },
  });
};

export default createStore;
