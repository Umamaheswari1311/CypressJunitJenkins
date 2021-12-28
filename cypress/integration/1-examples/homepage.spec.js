  /// <reference types="cypress" />


  beforeEach(() => {
  //URL Launch
  cy.visit('https://globalsqa.com/angularJs-protractor/BankingProject/#/login')
  cy.title().should('eq','XYZ Bank')
  })
    
 
    
  describe('HomePage-TestSuite',()=>{

  it('CustomerLogin',() => {
 
    
    cy.get("button[ng-click='customer()']").click()
    //Alias
      cy.get('div.box.mainhdr').find('.mainHeading').as('Heading')
      //Text Verification
      cy.get('@Heading').should('have.text','XYZ Bank')
      //store webElement in variables
      //get Text is nt possible in cypress but we achieve by using jquery but need to implement promise
      cy.get('@Heading').then(function(head){
          console.log(head.text())
          cy.log(head.text())
      })
      
      //Drop-down selection
      //Select By Text
      cy.get('#userSelect').select('Albus Dumbledore').should('have.value','4')  
      //Select By Value
      cy.get('#userSelect').select('2').should('have.value','2')  
      //Select By index`  
      cy.get('#userSelect').select(1).should('have.value','1')  

      cy.get("button[type='submit']").click()

      //wait
      cy.wait(1000)
      cy.get("button[ng-click^='withdraw']").click()
      //Input Text field
      cy.get("input[placeholder='amount']").type("200")
         //Clear
      cy.get("input[placeholder='amount']").clear().type("12")  
      cy.focused().clear().type("200")
      cy.get("button[type='submit']").click()
     cy.get("span[ng-show='message']").should('have.text','Transaction successful')
  
     //Dynamic way of clicking button
     cy.get('button').each(($ele,$list,index)=>
     {
     if($ele.text().includes("Deposit"))
     {
       $ele.click()
       cy.get("input[placeholder='amount']").clear().type("12")
     }
     })
     //index
     cy.get('.center').find('button').eq(0).click()
     cy.wait(1000)
     //find element with contains
   cy.get('td>a').contains('Date').click({ force: true })
   cy.get('#anchor0>td:nth-child(2)').should('have.text','200')
   cy.pause()

   })



   


  it('Bank Manager Login',() => {
    cy.contains('Manager').click()
    })
 })
