
const LoginPage =require('../pages/login.page')

describe('Demo Test', () => {

    it('Login Test', async () => {

         browser.url('https://the-internet.herokuapp.com/login')

         await LoginPage.login('tomsmith','SuperSecretPassword!')
         await LoginPage.checkMessage('You logged into a secure area!')
         await browser.pause(5000)
          //await LoginPage.secureMsg()                
      
         // await  browser.pause(5000)
        // await $('#username').setValue('tomsmith')
        // await $('#password').setValue('SuperSecretPassword!')
        // await $('button[type="submit"]').click()

        // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')
        
    })
    
})