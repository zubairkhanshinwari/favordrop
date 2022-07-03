/// <reference types="Cypress" />
import LoginPage from '../PageObject/LoginPage';
const user = require('../../fixtures/user.json')

const PromotionPage = require('../PageObject/PromotionPage');




describe('LoginActivity', function(){
    const Alogin = new LoginPage();
    const activity = new PromotionPage();
   
    it('valid user name and invalid password', function(){
        Alogin.visit();
        Alogin.fillEmail(user.user1);
        Alogin.fillPassword(user.pass1);
   
       // cy.wait(5000)
     });

     it('Enter the Promotion Detail', function(){
         activity.EnterPromotionDetail();
         //activity.EnterActivtyDetail(false)
     });
   
});