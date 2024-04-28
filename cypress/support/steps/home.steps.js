import homePage from "../pages/home.page.js";

class HomeSteps {
    shouldBeDisplayed() {
        homePage.shouldBeVisible();
    }

    shouldNotBeDisplayed() {
        homePage.shouldNotBeVisible();
    }
}

export default new HomeSteps();
