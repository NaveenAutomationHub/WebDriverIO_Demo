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
        return $('#flash')    }

       async login(username,password){

            await this.userNameTextbox.setValue(username)
            await this.passwrodTestbox.setValue(password)
            
            await this.loginButton.click()
        }

        async checkMessage(msg){

            await expect(this.loginMessage).toHaveTextContaining(msg)
        }
}

module.exports=new LoginPage()