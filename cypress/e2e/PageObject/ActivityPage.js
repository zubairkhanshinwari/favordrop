const activity = require('../../fixtures/activity.json')
const dayjs = require('dayjs')

class ActivityPage{
   constructor(){}
   

    EnterActivtyDetail(value){
      cy.title().should('eq', 'AIMS-Activity and Incident Management System')

       cy.get(activity.clickActivity).click()
       cy.get(activity.activityType).type(value == true ? activity.type[0]:activity.type[1]).type('{enter}')
       cy.get(activity.activityTitle).type(value == true ? activity.title[0]:activity.title[1]).type('{enter}')
       cy.get(activity.activityAim).type(value == true ? activity.aim[0]: activity.aim[1])
       cy.screenshot()
       //cy.wait(2000)
       cy.get(activity.activityCriticality).type(value == true ? activity.criticality[0]: activity.criticality[1]).type('{enter}')
       cy.get(activity.activityOutput).type(value == true ? activity.output[0]: activity.output[1]).type('{enter}')
       cy.get(activity.activityOutcome).type(value == true ? activity.outecome[0]: activity.outecome[1]).type('{enter}')
       cy.get(activity.activityRecivingOffice).type(value == true ? activity.recivingofice[0]: activity.recivingofice[1]).type('{enter}')

       cy.screenshot()
      // cy.wait(1000)
       cy.get(activity.activityProviance).type(value == true ? activity.Proviance[0]: activity.Proviance[1]).type('{enter}')
      //cy.wait(1000)
       cy.get(activity.activityDistrict).type(value == true ? activity.district[0]: activity.district[1]).type('{enter}')
       cy.get(activity.activitysection).type(value == true ? activity.section[0]: activity.section[1]).type('{enter}')
       cy.get(activity.activitySubType).type(value == true ? activity.subType[0]: activity.subType[1]).type('{enter}')
       cy.get(activity.activityDate).type(dayjs().format('MM/DD/YYYY'))
       cy.screenshot()
       cy.get(activity.activityLocation).type(value == true ? activity.location[0]: activity.location[1])
       cy.get(activity.activityCleared).type(value == true ? activity.cleared[0]: activity.cleared[1]).type('{enter}')
       cy.get(activity.activityFocalP).type(value == true ? activity.focalPerson[0]: activity.focalPerson[1])
       cy.get(activity.activityFocalPoint).type(value == true ? activity.focalPoint[0]: activity.focalPoint[1])
       cy.get(activity.activityMedia).type(value == true ? activity.mediaBefore[0]: activity.mediaBefore[1]).type('{enter}')
       cy.get(activity.activityMediaAfter).type(value == true ? activity.mediaAfter[0]: activity.mediaAfter[1]).type('{enter}')
       cy.screenshot()
       cy.get(activity.activityAttand).type(value == true ? activity.attend[0]: activity.attend[1])
       cy.get(activity.activityUnAttend).type(value == true ? activity.unAttend[0]: activity.unAttend[1])
        cy.get(activity.activityAddButton).click()
       cy.get(activity.activityTab).click()
        //cy.wait(5000)
        cy.scrollTo('bottom', { ensureScrollable: false }).window().its('scrollY').should('not.equal', 100);
        
       cy.get(activity.activityId).invoke('text').then(text => {
        const someText = text;
        cy.log(someText);
        cy.get(activity.clickActivity).click()
        cy.get(activity.activityOutcome).clear().type(someText)
      });






        return this
    }
    
 
    

}
export default ActivityPage
