const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 800,
  projectId: "i3bkfz",
  defaultCommandTimeout: 10000,
  reporter: "../node_modules/mochawesome/src/mochawesome.js",

  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },

  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
