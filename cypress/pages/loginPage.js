class LoginPage {
    
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            buttonField: '.oxd-button',
            wrongCredentialAlert: "[role='alert']"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')   
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().buttonField).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage