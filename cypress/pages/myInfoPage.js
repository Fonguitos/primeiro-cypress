class MyInfoPage {
    selectorsList() {
        const selectors = {
            infoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericDataField: ".oxd-date-input",
            dateCloseButton: ".--close",
            submitButton: ".oxd-button",
            radioButton: ".oxd-radio-wrapper",
            dropField: ".oxd-select-text-input"
        }

        return selectors
    }

    updateInfoPage() {
        cy.get(this.selectorsList().infoButton).click()
        cy.get(this.selectorsList().firstNameField).clear().type('NameTest')
        cy.get(this.selectorsList().lastNameField).clear().type('LastTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('EmpIdTest')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherTest')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriveTest')
        cy.get(this.selectorsList().genericDataField).eq(0).clear().type('2025-01-01')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().radioButton).eq(0).click()
        cy.get(this.selectorsList().dropField).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(20)').click()
        cy.get(this.selectorsList().dropField).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    
    }


}

export default MyInfoPage