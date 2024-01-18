
const LoginPage =require('../pageObjects/login.page')
const HomePage =require('../pageObjects/home.page')
const fs =require('fs')
let credentials =JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))

describe('Internet Login', async() => {

    credentials.forEach( ({username,password}) => {  

    it('Login Test', async() => 
    
    {        
         await browser.url("/login")  
         await LoginPage.login(username,password)
         await HomePage.checkMessage('You logged into a secure area!')
         await HomePage.secureMsg()

    })
    
   
})
    
})

