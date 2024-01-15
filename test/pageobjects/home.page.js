const expectChai = require('chai').expect
class HomePage {

    get loginMessage() {
        return $('#flash')
    }

    get secureMessage() {

        return $('//h2[normalize-space()="Secure Area"]')
    }
   

    async checkMessage(msg) {
       
        console.log(await (await this.loginMessage).getText()) 
       await expectChai(await (await this.loginMessage).getText()).contain(msg)
     
    }
    async secureMsg() {
      
        console.log(await (await this.secureMessage).getText()) 
        await expect(this.secureMessage).toBeDisplayed()

    }
}

module.exports = new HomePage()