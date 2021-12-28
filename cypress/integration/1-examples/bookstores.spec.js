/// <reference types="cypress" />


context('BookStore',function(){  
  beforeEach(function(){ 
    cy.fixture('register').then(function(data){
      this.data=data
    })  
   
    })
   specify('Register',function(){
    cy.log(Cypress.currentTest.title)
    //URL Launch
    cy.visit(this.data.url)
    cy.log(Cypress.testingType)
    //Cypress.config('pageLoadTimeout',6000 )
    cy.config()
        cy.title().should('eq',this.data.title)
        cy.get('#firstname').type(this.data.fname)
        cy.get('#lastname').type(this.data.lname)
        cy.get('#userName').type(this.data.uname)
        cy.get('#password').type(this.data.pwd)
        //cy.frameLoaded("iframe[title='reCAPTCHA']")
        //cy.iframe().find('span').click()
        
    })

    specify('login-fixture',function(){
      cy.log(Cypress.currentTest.title)
      //URL Launch
      cy.visit("https://demoqa.com/login")
       cy.login(this.data.uname,this.data.pwd)
       cy.get('#submit').click()
    })

    specify('login-json',function(){
      cy.log(Cypress.currentTest.title)
      //URL Launch
      cy.visit("https://demoqa.com/login")
      cy.loginjson({username :'testuser',password:'San'})
     })
})