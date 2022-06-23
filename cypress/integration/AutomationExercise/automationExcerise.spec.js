/// <reference types="cypress" />

import card from "../../support/Pages/cart"
import payment from "../../support/Pages/payment"
import product from "../../support/Pages/product"
import signup from "../../support/Pages/Signup"
const sign=new signup()
const prod=new product()
const checkout=new card()
const pay=new payment()

/* Automation Excerise Application TestSuite */
describe("AutomationExercise",function(){

    beforeEach(function(){
        cy.fixture('AutomationExceriseData').then(function(data){
            this.data=data  
            cy.visit(Cypress.env("url")+'/login')  
        })
        
    })
    /* TC001-Register user with Valid Data */
    it("RegisterUser",function(){ 
        cy.log(Cypress.currentTest.title)
        sign.getTitle().should('have.text',this.data.signup)
        cy.register(this.data.uname,this.data.pwd,this.data.day,this.data.month,this.data.year,this.data.firstname,this.data.lname,this.data.addr,this.data.state,this.data.city,this.data.zipcode,this.data.mob)
        cy.get('b').should('have.text',this.data.accountCreated)
        sign.coninue_btn().click()
        sign.CheckUserLogin().should('have.text',this.data.uname)
        
    })
    /* TC002-Login User with incorrect email and password -Error msg [Your email or password is incorrect!] */
    it("InvalidLogin",function(){
       cy.login(this.data.invalid_email,this.data.pwd)
       sign.checkInvalidLogin().should('have.text',this.data.invalid_error)
    })
    /*TC003-Login User before Checkout and Plae the Order sucessfully */
    it("PlaceTheOrder",function(){
        cy.login(this.data.email,this.data.pwd)
        sign.CheckUserLogin().should('have.text',this.data.uname)
        prod.product_btn().click()
        prod.search_field().type(this.data.Product1)
        prod.search_icon().click()
        prod.checkPriceOfProduct().scrollIntoView().should('have.text','Rs. 1000')
        prod.addCart().eq(1).click({ force: true })
        prod.continueShopping().click()
        prod.search_field().clear()
        prod.search_field().type(this.data.Product2)
        prod.search_icon().click()
        prod.addCart().eq(1).click({ force: true })
        prod.continueShopping().click()
        checkout.cart_btn().click({force: true})
        checkout.checkProduct(this.data.Product1).should('have.text',this.data.Product1)
        checkout.checkProduct(this.data.Product2).should('have.text',this.data.Product2)
        checkout.ProceedCheckout().click({force: true})
        checkout.comment().type(Math.random().toString(36).slice(2, 7))
        checkout.ProceedCheckout().click()
        pay.getNameOnCard().type(this.data.uname)
        pay.getCardNumber().type(this.data.cardNumber)
        pay.getCvcNum().type(this.data.cvc)
        pay.getExpireMonth().type(this.data.expire_month)
        pay.getExpireYear().type(this.data.expire_year)
        pay.clickPayAndConfirm().click()
        pay.getOrderPlacedMsg().should('have.text',this.data.orderplaced_msg)
        
    })
})
