class PimPage {
    get pimMenu() {
        return cy.get("a").contains("PIM");
    }
    get txt_empName() {
        return cy.get("input[placeholder='Type for hints...']").eq(0);
    }
    get btn_Search() {
        return cy.get("button").contains("Search");
    }

    open() {
        this.pimMenu.click();
    }

    empName(name) {
        this.txt_empName.type(name);
        return this;
    }
    search() {
        this.btn_Search.click();
    }
}
export default new PimPage();
