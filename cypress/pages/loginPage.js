class LoginPage {
    
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            buttonField: '.oxd-button',
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
}

export default LoginPage