/// <reference types="Cypress" />
import 'cypress-wait-until';
const AddUserPage = require('../PageObject/AddUserPage');
const LoginPage = require('../PageObject/LoginPage');
const user = require('../../fixtures/user.json')
describe('Add new User', function(){
    const newUser = new AddUserPage()
    const login = new LoginPage()
   

    it('Login Admin', function(){
        login.visit()
        login.fillEmail(user.user9)
        login.fillPassword(user.pass9)
        login.clickSubmit()
        cy.wait(3000)
    })
    it('Add New User', function(){
       newUser.clickAddUser();   
    })

    it('Search User', function(){
        newUser.searchUser();   
     })

     it('Delete User', function(){
        newUser.deleteUser();
     })

     it('Logout Admin', function(){
        newUser.logout();
     })
    
})