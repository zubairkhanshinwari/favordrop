const user = require('../../fixtures/user.json')
class LoginPage{
   constructor(){}
    visit(){
       
        cy.visit('http://172.104.180.223:4001/#/login');
    }

    fillEmail(value){
        const field =cy.get(user.mail)
        field.clear()
        field.type(value)
        field.invoke('attr', 'placeholder').should('contain', 'Email')
        return this
    }

    fillPassword(password){
        const field = cy.get(user.password)
        field.clear()
        field.type(password)
        field.invoke('attr', 'placeholder').should('contain', 'Password')
       
        return this
    }
    clickSubmit(){
        const button = cy.get(user.loginbtn)
        button.click()
        return this
    }

}
export default LoginPage
