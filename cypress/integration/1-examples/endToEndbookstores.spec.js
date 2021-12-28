/// <reference types="cypress" />

import Login  from '../../support/Pages/Login'
import Profile from '../../support/Pages/Profile'

describe("Bookstores-End to End",function(){
    before(function(){
        cy.fixture('register').then(function(data){
            this.data=data      
        })
        cy.visit(Cypress.env("url")+"/login")
    })
    it("Login",function(){
      const login=  new Login()
      const profile =new Profile()
        login.getUserName().type(this.data.uname)
        login.getPassword().type(this.data.pwd)
        login.doSigin()
        profile.getHeading().should('have.text','Profile')
        profile.clickGoToStore()

    })
})