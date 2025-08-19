describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongAlert: "[role='alert']"
  }

  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', "/web/index.php/dashboard/index")
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('AdminTeste')
    cy.get(selectorsList.passwordField).type('admin1222222')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongAlert)
  })
})