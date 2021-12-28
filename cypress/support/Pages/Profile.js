
/// <reference types="cypress" />
class Profile{

    getHeading()
    {
       return cy.get('.main-header')
    }
 clickGoToStore()
 {
    cy.get('#gotoStore').click()
     return this
 }
}
export default Profile