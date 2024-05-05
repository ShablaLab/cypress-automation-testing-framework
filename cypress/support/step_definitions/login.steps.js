import loginPage from "../pages/login.page.js";

class LoginSteps {
    open() {
        loginPage.visit();
    }

    login(userName, password) {
        loginPage.login(userName, password);
    }
}

export default new LoginSteps();
