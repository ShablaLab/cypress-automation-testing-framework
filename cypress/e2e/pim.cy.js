import pimSteps from "../support/step_definitions/pim.steps.js";

describe("passenger information spec", () => {
    it("able to search with employee name", () => {
        const empName = "anita";

        cy.login();

        pimSteps.open();
        pimSteps.searchByName(empName);
    });
});
