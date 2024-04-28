class HomePage {
    get homeData() {
        return cy.get(".oxd-layout");
    }

    shouldBeVisible() {
        this.homeData.should("be.visible");
    }

    shouldNotBeVisible() {
        this.homeData.should("not.exist");
    }
}

export default new HomePage();
