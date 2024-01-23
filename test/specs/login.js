
const LoginPage = require('../pageObjects/login.page')
//const credentials= require('../credentials')

describe('Login', () => {

    it('Successful Login Test', async () => {

        await browser.url('/login')
        await browser.pause(5000)
        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()
        await expect($('#flash')).toHaveText(expect.stringContaining('You logged into a secure area!'))

    })
})