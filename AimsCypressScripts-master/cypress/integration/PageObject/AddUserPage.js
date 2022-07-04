const adduser = require('../../fixtures/adduser.json')
/// <reference types="Cypress" />
import 'cypress-wait-until';
class AddUserPage{
   constructor(){}

    clickAddUser(){
            cy.get(adduser.navuser).click()
            cy.get(adduser.newuser).click()
            cy.get(adduser.name).type('zubair')
            cy.get(adduser.cnic).type('21203')
            cy.get(adduser.mail).type('zubairkhanlkl8338@gmail.com')
            cy.get(adduser.password).type('123456')
    
            cy.get(adduser.gender)
                .should('be.visible').then((e) => {
                    Cypress.$(e).click();
                    cy.get(adduser.genderSel).click()
                })
            cy.wait(2000)
            cy.get(adduser.phone).type('03055000238')
            cy.get(adduser.userType)
                .should('be.visible').then((e) => {
                    Cypress.$(e).click();
                    cy.get(adduser.userTypeSel).click()
                })
    
            cy.get(adduser.office)
                .should('be.visible').then((e) => {
                    Cypress.$(e).click();
                    cy.get(adduser.officeSel).should('be.visible').click()
                })
    
            cy.get(adduser.section)
                .should('be.visible').then((e) => {
                    Cypress.$(e).click();
                    cy.get(adduser.sectionSel).should('be.visible').click()
                })
    
            cy.get(adduser.jobTitle).type('District user')
    
            cy.get(adduser.supervisor)
                .should('be.visible').then((e) => {
                    Cypress.$(e).click();
                    cy.get(adduser.supervisorSel).should('be.visible').click()
                })
            cy.get(adduser.callSign).type('03423432')
            cy.get(adduser.addUserBtn).click()
            return this
     
    }
    searchUser(){
        cy.wait(2000)

        cy.get(adduser.clickSearchBtn).click()
        cy.get(adduser.searchName).type('zubair').type('{enter}')
    }


    deleteUser() {
       cy.wait(3000)
       cy.get('table > tbody > tr > td:nth-child(10) > a > i > svg').click({ multiple: true })
       cy.get('#cdk-overlay-116 > div > div > div.ant-popover-inner > div > div > a:nth-child(3) > i > svg').click({force:true})
    }

    logout(){
        cy.get(adduser.logoutDot).click({force: true})
        cy.get(adduser.logoutClick).click()
    }

}
export default AddUserPage







// it('Add User', function () {
//     cy.get('[routerlink="/users"] > :nth-child(1) > .nav-text').click()
//     cy.get(':nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-btn').click()
//     cy.get(' nz-row:nth-child(1) > nz-col:nth-child(1) > nz-form-item > nz-form-control > div > span > input').type('zubair')
//     cy.get(' nz-row:nth-child(1) > nz-col:nth-child(2) > nz-form-item > nz-form-control > div > span > input').type('21203')
//     cy.get(' nz-row:nth-child(1) > nz-col:nth-child(3) > nz-form-item > nz-form-control > div > span > input').type('zubairkhanlkl8338@gmail.com')
//     cy.get(' nz-row:nth-child(1) > nz-col:nth-child(4) > nz-form-item > nz-form-control > div > span > input').type('123456')

//     cy.get(' nz-row:nth-child(1) > nz-col:nth-child(5) > nz-form-item > nz-form-control > div > span > nz-select > div > span > i')
//         .should('be.visible').then((e) => {
//             Cypress.$(e).click();
//             cy.get('.ant-select-dropdown-menu > :nth-child(1)').click()
//         })
//     cy.wait(2000)
//     cy.get(' nz-row:nth-child(1) > nz-col:nth-child(6) > nz-form-item > nz-form-control > div > span > input').type('03055000238')
//     cy.get('.ng-tns-c17-33 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
//         .should('be.visible').then((e) => {
//             Cypress.$(e).click();
//             cy.get('.ant-select-dropdown-menu > :nth-child(6)').click()
//         })

//     cy.get('.ng-tns-c17-34 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
//         .should('be.visible').then((e) => {
//             Cypress.$(e).click();
//             cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
//         })

//     cy.get('.ng-tns-c17-35 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
//         .should('be.visible').then((e) => {
//             Cypress.$(e).click();
//             cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
//         })


//     cy.get(':nth-child(2) > :nth-child(4) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('District user')

//     cy.get('.ng-tns-c17-36 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
//         .should('be.visible').then((e) => {
//             Cypress.$(e).click();
//             cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
//         })
//     cy.get(':nth-child(7) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('03423432')
//     cy.get('.text-right > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ng-star-inserted').click()
// })