/// <reference types="Cypress" />
const LoginPage = require('../PageObject/LoginPage');
const CreateIncidientPage = require('../PageObject/CreateIncidientPage');
const ActivityPage = require('../PageObject/ActivityPage.cy');
const user = require('../../fixtures/user.json')


describe('AIMS', function(){
    const incidient = new CreateIncidientPage()
    const Ilogin = new LoginPage()
    const activity = new ActivityPage()
   
    it('Login User ', function(){
        Ilogin.visit()
        Ilogin.fillEmail(user.user9)
        Ilogin.fillPassword(user.pass9)
        Ilogin.clickSubmit()
    })

    it('Create Incidient', function(){
        for(let i=0; i<=0; i++){
        incidient.enterIncidientDetail()
        //testing
        }
    })

    // it('Create Activity', function(){
    //     for(let i=0; i<=0; i++){
    //     //activity.EnterActivtyDetail(true)
    // }
    // })
   
    

})
