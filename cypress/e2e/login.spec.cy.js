import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = { 
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    buttonField: '.oxd-button'
  }


  it('Login successful', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.buttonField).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') //verificar se o texto está correto para nao usar mesma classe
  })
  it('Login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admins')
    cy.get("[name='password']").type('admin123s')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text')
  })
})