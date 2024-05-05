// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import homeSteps from "./step_definitions/home.steps.js";
import loginSteps from "./step_definitions/login.steps.js";

Cypress.Commands.add("login", () => {
    cy.visit("/");
    cy.fixture("user").then((data) => {
        loginSteps.login(
            data.validUser.username,
            data.validUser.password
        );
        homeSteps.shouldBeDisplayed();
    });
});
