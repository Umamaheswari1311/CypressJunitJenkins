/// <reference types="cypress" />


context('BookStore',function(){  
  beforeEach(function(){ 
     cy.sqlServer("select * from Users").then(function(result)
     {
       this.data=result
     })
   
    })
   specify('Register',function(){
    cy.log(Cypress.currentTest.title)
    //URL Launch
    cy.visit("https://demoqa.com/register")
    cy.log(Cypress.testingType)
    //Cypress.config('pageLoadTimeout',6000 )
    cy.config()
        cy.title().should('eq',"ToolsQA")
        cy.get('#firstname').type(this.data[0][0])
        cy.get('#lastname').type(this.data[0][1])
        cy.get('#userName').type(this.data[0][2])
        cy.get('#password').type(this.data[0][3])
    
        
    })

    
})