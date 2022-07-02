/// <reference types="Cypress" />

//
describe('AIMS TestCases', () => {

    it.only('Visti AIMS', function () {
        cy.visit('http://172.104.180.223:4001/#/login');
    })


    it('Login', function () {
        cy.get('nz-form-"item:nth-child(1)" > nz-form-control > div > span > nz-input-group > input').invoke('attr', 'placeholder').should('contain', 'Email')
        cy.get('nz-form-item:nth-child(1) > nz-form-control > div > span > nz-input-group > input').type('admin@aims.ss')
        cy.get('nz-form-item:nth-child(2) > nz-form-control > div > span > nz-input-group > input').invoke('attr', 'placeholder').should('contain', 'Password')
        cy.get('nz-form-item:nth-child(2) > nz-form-control > div > span > nz-input-group > input').type('aims.ss')
        cy.get('.login-form-button').click()
    })
    it.skip('Add User', function () {
        cy.get('[routerlink="/users"] > :nth-child(1) > .nav-text').click()
        cy.get(':nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-btn').click()
        cy.get(' nz-row:nth-child(1) > nz-col:nth-child(1) > nz-form-item > nz-form-control > div > span > input').type('zubair')
        cy.get(' nz-row:nth-child(1) > nz-col:nth-child(2) > nz-form-item > nz-form-control > div > span > input').type('21203')
        cy.get(' nz-row:nth-child(1) > nz-col:nth-child(3) > nz-form-item > nz-form-control > div > span > input').type('zubairkhanlkl8338@gmail.com')
        cy.get(' nz-row:nth-child(1) > nz-col:nth-child(4) > nz-form-item > nz-form-control > div > span > input').type('123456')

        cy.get('nz-row:nth-child(1) > nz-col:nth-child(5) > nz-form-item > nz-form-control > div > span > nz-select > div > span > i')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(1)').click()
            })
        cy.wait(2000)
        cy.get(' nz-row:nth-child(1) > nz-col:nth-child(6) > nz-form-item > nz-form-control > div > span > input').type('03055000238')
        cy.get('.ng-tns-c17-33 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(6)').click()
            })

        cy.get('.ng-tns-c17-34 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
            })

        cy.get('.ng-tns-c17-35 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
            })


        cy.get(':nth-child(2) > :nth-child(4) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('District user')

        cy.get('.ng-tns-c17-36 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
            })
        cy.get(':nth-child(7) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('03423432')
        cy.get('.text-right > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ng-star-inserted').click()
    })

    it('Search Created User', function () {
        cy.wait(2000)
        cy.get(':nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-btn').click()
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('zubair').type('{enter}')

    })

    it('Logout admin login user', function () {
        cy.get('.ant-dropdown-trigger').click()
        cy.get('.header-dropdown > :nth-child(3) > a').click()
        cy.get('nz-form-item:nth-child(1) > nz-form-control > div > span > nz-input-group > input').type('zubairkhanlkl8338@gmail.com')
        cy.get('nz-form-item:nth-child(2) > nz-form-control > div > span > nz-input-group > input').type('123456')
        cy.get('.login-form-button').click()
    })

    it('set password', function () {
        cy.wait(3000)
        cy.get(':nth-child(2) > .ant-btn').click()
        cy.wait(3000)
        cy.get('.steps-action > .ant-row > :nth-child(2) > .ant-btn').click()
        cy.get(':nth-child(1) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('123456')
        cy.get(':nth-child(2) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('123456')
        cy.get(':nth-child(3) > .ant-btn').click()

    })
    it('Add Incident', function () {
       cy.get('.ant-btn-background-ghost').click()
       cy.wait(3000)
       cy.get('nz-radio-group > label:nth-child(1) > span.ant-radio > input').check()

       
       
       cy.get('nz-row:nth-child(3) > nz-col.ant-col-16 > nz-form-item > nz-form-control > div > span > nz-select > div > div > div')
       .should('be.visible').then((e) => {
           Cypress.$(e).click();
           cy.get('.ant-select-dropdown-menu > :nth-child(3)').should('be.visible').click()
           cy.get('.ant-select-dropdown-menu > :nth-child(3)').should('be.visible').click().type('{esc}')
           
           
       })
            cy.get('nz-row:nth-child(4) > nz-col:nth-child(2) > nz-form-item > nz-form-control > div > span > nz-select > div > div > div.ant-select-selection__placeholder.ng-tns-c20-95.ng-star-inserted')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()   
            })
           
            cy.get(' div.ant-modal-body.ng-star-inserted > form > div > nz-row:nth-child(4) > nz-col:nth-child(3) > nz-form-item > nz-form-control > div > span > nz-select > div > div > div.ant-select-selection__placeholder.ng-tns-c20-179.ng-star-inserted')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
            })

            cy.get('.ng-tns-c17-25 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
            })

            cy.get('.ng-tns-c17-26 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
            })
            
            cy.get(':nth-child(2) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').clear().type('22')
            cy.get(':nth-child(3) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').clear().type('22')
            cy.get(':nth-child(4) > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').clear().type('22')

            cy.get('.ng-tns-c17-27 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click()
            })

            cy.get('.ng-tns-c17-28 > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
            .should('be.visible').then((e) => {
                Cypress.$(e).click();
                cy.get('.ant-select-dropdown-menu > :nth-child(2)').should('be.visible').click() 
            })

            cy.get('.ant-col-8.ng-star-inserted > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Test Source')
            cy.get(':nth-child(8) > .ant-col-24 > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Terorrism')
            cy.get(':nth-child(9) > .ant-col-24 > .ant-form-item > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('testing Incident')
            cy.get('.ant-modal-footer > .ant-btn-primary').click()
            cy.wait(2000)
    })


    

    it('LogOut user', function () {
        ///logout
        cy.get('.ant-dropdown-trigger').click()
        cy.get('.header-dropdown > :nth-child(3) > a').click()
    })

    it('Login Admin', function () {
        cy.get('nz-form-item:nth-child(1) > nz-form-control > div > span > nz-input-group > input').type('admin@aims.ss')
        cy.get('nz-form-item:nth-child(2) > nz-form-control > div > span > nz-input-group > input').type('aims.ss')
        cy.get('.login-form-button').click()

    })
        it('Incident verification ', function () {
            cy.get('[routerlink="/incidents"] > :nth-child(1) > .nav-text').click()
            cy.wait(3000)
            cy.get(':nth-child(1) > :nth-child(8) > .killed').contains('22')
            cy.get(':nth-child(1) > :nth-child(8) > .injured').contains('22')
            cy.get(':nth-child(1) > :nth-child(8) > .kidnapped').contains('22')
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(4)').contains('Ikotos')
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(5)').contains('Terrorism')
            cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(6)').contains('C4D')
        })
    it('Delete User', function () {
        
        //click user listing
        cy.get('[routerlink="/users"] > :nth-child(1) > .nav-text').click()
        //search
        cy.get(':nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-btn').click()
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('zubair').type('{enter}')
        cy.wait(2000)
        //delete
        cy.get('.action-btn > .anticon > svg').click({ multiple: true })
        cy.get('[nz-popconfirm=""] > .anticon > svg > path').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()

    })
    
///key for access dashobard
///e5606295-f851-4fff-aa0d-a8dc8afba0c1  key 


})