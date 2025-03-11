class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
        }
        return selectors
    }

    infoButtonClick() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    pimButtonClick() {
        cy.get(this.selectorsList().pimButton).click()
    }
}

export default MenuPage