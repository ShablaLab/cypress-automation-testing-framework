import homeSteps from "../support/steps/home.steps.js";
import loginSteps from "../support/steps/login.steps.js";

describe("login spec", () => {
    let userData;
    before(function () {
        cy.fixture("user").then(function (data) {
            userData = data;
        });
    });
    it("user should be able to login with valid credentials", () => {
        loginSteps.open();
        loginSteps.login(
            userData.validUser.username,
            userData.validUser.password
        );
        homeSteps.shouldBeDisplayed();
    });

    it("user should not be able to login with invalid credentials", () => {
        loginSteps.open();
        loginSteps.login(
            userData.invalidUser.username,
            userData.invalidUser.password
        );
        homeSteps.shouldNotBeDisplayed();
    });
});
