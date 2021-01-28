const bodyParser = require("body-parser");

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Assessment",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/vuelidate"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv",
    "@nuxtjs/fontawesome"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
  ],
  styleResources: {
    scss: [
      "assets/scss/app-agnostic/_animations.scss",
      "assets/scss/app-agnostic/_utilityMixins.scss",
    ],
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
  serverMiddleware: [bodyParser.json(), "~api"],
  fontawesome: {
    icons: {
      solid: [
        'faAngleLeft'
      ]
    }
  }
};
