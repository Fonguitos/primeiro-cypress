import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()



describe('Orange HRM Tests', () => {



  it.only('User Infor Update - Success', () => {
    
    loginPage.accessLoginPage()

    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.pimButtonClick()

    menuPage.infoButtonClick()

    myInfoPage.updateInfoPage()

    }
  )


  it('Login fail', () => {
    cy.visit('auth/login')
    cy.get("[name='username']").type('Admins')
    cy.get("[name='password']").type('admin123s')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text')
  })
})