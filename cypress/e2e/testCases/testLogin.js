/// <reference types="Cypress" />
const LoginPage = require('../PageObject/LoginPage');
const user = require('../../../AimsCypressScripts-master/cypress/fixtures/user.json');

describe('Login', function(){
    const login = new LoginPage();
   
    it('valid user name and invalid password', function(){
        login.visit();
        login.fillEmail(user.user1);
        login.fillPassword(user.pass1);
      
    });
  
});