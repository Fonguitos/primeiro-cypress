import userData from '../fixtures/user-data.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()



describe('Login Orange HRM Tests', () => {

  it('Login fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })


  it('Login success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })


})