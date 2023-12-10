const expectChai = require('chai').expect
class LoginPage {

    get userNameTextbox() {
        return $('#username')
    }
    get passwrodTestbox() {
        return $('#password')
    }
    get loginButton() {
        return $('button[type="submit"]')
    }
    get loginMessage() {
        return $('#flash')
    }

    get secureMessage() {

        return $('//h2[normalize-space()="Secure Area"]')
    }

    async login(username, password) {

        await this.userNameTextbox.setValue(username)
        await this.passwrodTestbox.setValue(password)

        await this.loginButton.click()
    }

    async checkMessage(msg) {
       
        
       await expect(this.loginMessage).toBeDisplayed(msg)

    }
    async secureMsg() {
      
        await expect(this.secureMessage).toBeDisplayed()

    }
}

module.exports = new LoginPage()