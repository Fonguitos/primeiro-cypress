class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            middleNameField: "[name='middleName']",
            genericField: ".oxd-input--active",
            genericDataField: ".oxd-date-input",
            dateCloseButton: ".--close",
            submitButton: ".oxd-button",
            radioButton: ".oxd-radio-wrapper",
            dropField: ".oxd-select-text-input"
        }

        return selectors
    }


    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorsList().genericDataField).eq(0).clear().type(licenseExpiryDate)
    }

    updateInfoPage() {  

        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().radioButton).eq(0).click()
        cy.get(this.selectorsList().dropField).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(20)').click()
        cy.get(this.selectorsList().dropField).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }

}

export default MyInfoPage