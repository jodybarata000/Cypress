const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gpy7hy',
  defaultCommandTimeout:8000,
  env:{
    url : "https://rahulshettyacademy.com"
  },retries:{
    runMode:1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/Test/*.js'
  },
});
