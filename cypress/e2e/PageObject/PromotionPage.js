const activity = require('../../fixtures/activity.json')
const dayjs = require('dayjs')

class PromotionPage{
   constructor(){}
   

    EnterPromotionDetail(value){
      cy.get(activity.clickPromotion).click()
      cy.get(activity.createPromotion).click()
     

    
        return this
    }
    SelectContact(value){
      cy.get(activity.selectContact).click()
      cy.get(activity.clickNext).click()
    }

    ConfigurePromotion(value){
      cy.get(activity.promotionAmount).type(activity.promotionValue)
      cy.get(activity.expiryTime).click().type('{enter}')
      cy.get(activity.promotionExpiryTime).click().type('{enter}')
      cy.get(activity.promotionMessage).type(activity.promotionMessageText)
     // cy.get(activity.clickNext).click()




    }
    
 
    

}
export default PromotionPage
