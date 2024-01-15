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
   

    async login(username, password) {

        await this.userNameTextbox.setValue(username)
        await this.passwrodTestbox.setValue(password)

        await this.loginButton.click()
    }

}

module.exports = new LoginPage()