const user = require('../../fixtures/user.json')
class LoginPage{
   constructor(){}
    visit(){
       
        cy.visit('https://dev-partners.favordrop.com/login');
        cy.screenshot()
    }

    fillEmail(value){
        const field =cy.get(user.mail)
        field.clear()
        field.type(value)
        field.invoke('attr', 'placeholder').should('contain', 'Email Address')
        cy.screenshot()
        return this
    }

    fillPassword(password){
        const field = cy.get(user.password)
        field.clear()
        field.type(password).type('{enter}')    
        field.invoke('attr', 'placeholder').should('contain', 'Password')
        cy.screenshot()
        return this
    }
   

}
export default LoginPage
