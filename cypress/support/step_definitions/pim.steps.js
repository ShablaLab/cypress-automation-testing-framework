import pimPage from "../pages/pim.page.js";

class PimSteps {
    open() {
        pimPage.open();
    }

    searchByName(empName) {
        pimPage.empName(empName);
        pimPage.search();
    }
}
export default new PimSteps();
