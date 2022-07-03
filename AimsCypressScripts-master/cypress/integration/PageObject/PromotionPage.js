const activity = require('../../fixtures/promotion.json')
const dayjs = require('dayjs')

class PromotionPage{
   constructor(){}
   

   EnterPromotionDetail(value){
    cy.get(activity.clickPromotion).click();




      return this
  }
  

  

}
export default PromotionPage
