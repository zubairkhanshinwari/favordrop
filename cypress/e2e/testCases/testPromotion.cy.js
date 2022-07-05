/// <reference types="Cypress" />
import LoginPage from '../PageObject/LoginPage';
const user = require('../../fixtures/user.json')

const PromotionPage = require('../PageObject/PromotionPage');




describe('LoginActivity', function(){
    const Alogin = new LoginPage()
    const activity = new PromotionPage()
   
    it('valid user name and invalid password', function(){
        Alogin.visit()
        Alogin.fillEmail(user.user1)
        Alogin.fillPassword(user.pass1)
      
     })

     it('Enter the activity Detail', function(){
         activity.EnterPromotionDetail()
     })
   
})