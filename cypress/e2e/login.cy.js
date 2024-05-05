import homeSteps from "../support/step_definitions/home.steps.js";
import loginSteps from "../support/step_definitions/login.steps.js";

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

    it("negative test case for demo purpose", () => {
        loginSteps.open();
        loginSteps.login(
            userData.invalidUser.username,
            userData.invalidUser.password
        );
        homeSteps.shouldBeDisplayed();
    });
});
