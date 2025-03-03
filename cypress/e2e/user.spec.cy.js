import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = { 
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    buttonField: '.oxd-button',
    infoButton: '[href="/web/index.php/pim/viewMyDetails"]',

    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericDataField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: ".oxd-button",
    radioButton: ".oxd-radio-wrapper"
  }


  it.only('User Infor Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.buttonField).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') //verificar se o texto está correto para nao usar mesma classe
    cy.get(selectorsList.infoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('NameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmpIdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriveTest')
    cy.get(selectorsList.genericDataField).eq(0).clear().type('2025-01-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.radioButton).eq(0).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
  it('Login fail', () => {
    cy.visit('auth/login')
    cy.get("[name='username']").type('Admins')
    cy.get("[name='password']").type('admin123s')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text')
  })
})