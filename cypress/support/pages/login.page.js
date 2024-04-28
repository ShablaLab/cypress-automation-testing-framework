class LoginPage {
    get txt_userName() {
        return cy.get('input[name="username"]');
    }

    get txt_password() {
        return cy.get('input[name="password"]');
    }

    get btnSubmit() {
        return cy.get('button[type="submit"]');
    }

    visit() {
        cy.visit("/");
    }

    login(username, password) {
        this.txt_userName.type(username);
        this.txt_password.type(password);
        this.btnSubmit.click();
    }
}

export default new LoginPage();
