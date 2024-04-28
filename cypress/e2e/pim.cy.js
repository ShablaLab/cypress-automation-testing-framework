import pimSteps from "../support/steps/pim.steps.js";

describe("passenger information spec", () => {
    it("able to search with employee name", () => {
        const empName = "anita";

        cy.login();

        pimSteps.open();
        pimSteps.searchByName(empName);
    });
});
