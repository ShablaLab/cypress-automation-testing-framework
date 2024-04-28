const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://opensource-demo.orangehrmlive.com",
        setupNodeEvents(on, config) {
            allureCypress(on);
        },
    },
});
