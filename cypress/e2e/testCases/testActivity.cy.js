/// <reference types="Cypress" />
import LoginPage from '../PageObject/LoginPage';
const user = require('../../fixtures/user.json')

const ActivityPage = require('../PageObject/ActivityPage');




describe('LoginActivity', function(){
    const Alogin = new LoginPage()
    const activity = new ActivityPage()
   
    it('valid user name and invalid password', function(){
        Alogin.visit()
        Alogin.fillEmail(user.user9)
        Alogin.fillPassword(user.pass9)
        Alogin.clickSubmit()
       // cy.wait(5000)
     })

     it('Enter the activity Detail', function(){
         activity.EnterActivtyDetail(true)
         //activity.EnterActivtyDetail(false)
     })
   
})