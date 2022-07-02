/// <reference types="Cypress" />
const LoginPage = require('../PageObject/LoginPage');
const user = require('../../fixtures/user.json')


describe('Login', function(){
    const login = new LoginPage()
   
    it('valid user name and invalid password', function(){
        login.visit()
        login.fillEmail(user.user1)
        login.fillPassword(user.pass1)
        login.clickSubmit()
    })
    it('invalid user name and valid password', function(){
        login.visit()
        login.fillEmail(user.user2)
        login.fillPassword(user.pass2)
        login.clickSubmit()
    })
    it('invalid user name and  invalid password', function(){
        login.visit()
        login.fillEmail(user.user3)
        login.fillPassword(user.pass3)
        login.clickSubmit()
    })
    it('Empty user name and  password and click login', function(){
        login.visit()
        login.fillEmail(user.user4)
        login.fillPassword(user.pass4)
        login.clickSubmit()
    })
    it('Empty user name and fill valid password and click login', function(){
        login.visit()
        login.fillEmail(user.user5)
        login.fillPassword(user.pass5)
        login.clickSubmit()
    })

    it('Empty user name and fill invalid password and click login', function(){
        login.visit()
        login.fillEmail(user.user6)
        login.fillPassword(user.pass6)
        login.clickSubmit()
    })
    
    it('Enter valid user name and Empty password and click login', function(){
        login.visit()
        login.fillEmail(user.user7)
        login.fillPassword(user.pass7)
        login.clickSubmit()
    })

    it('Enter invalid user name and Empty password and click login', function(){
        login.visit()
        login.fillEmail(user.user8)
        login.fillPassword(user.pass8)
        login.clickSubmit()
    })
    it('valid user name and valid password', function(){
        login.visit()
        login.fillEmail(user.user9)
        login.fillPassword(user.pass9)
        login.clickSubmit()
    })
})