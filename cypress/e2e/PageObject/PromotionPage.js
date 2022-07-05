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
      cy.get(activity.promotionAmount).type(activity.promotionAmountValue)

    }
    
 
    

}
export default PromotionPage
