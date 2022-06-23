// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import signup from "../support/Pages/Signup"
Cypress.Commands.add('login', (email, password) => { 
  const sign=new signup()  
  sign.loginEmail().type(email)
  sign.loginPwd().type(password)
  sign.login_btn().click()
 })
 Cypress.Commands.add('register',(uname,pwd,day,month,year,firstname,lname,addr,state,city,zipcode,mob) => { 
  const sign=new signup()  
  sign.setUname().type(uname)
        var mail='uma'+Math.floor((Math.random() * 100) + 1)+'@gmail.com'
        sign.setEmail().type(mail)
        sign.doSignup()
        sign.clickRadioButton(1)
        sign.setPwd().type(pwd)
        sign.setDay().select(day).should('have.value',day) 
        sign.setMonth().select(month).should('have.value',month) 
        sign.setYear().select(year).should('have.value',year)
        sign.checkNewsletter().check().should('be.checked').and('have.attr','name','newsletter')
        sign.checkoffer().check().should('be.checked').and('have.attr','name','optin')
        sign.setFname().type(firstname)
        sign.setLname().type(lname)
        sign.setAddress().type(addr)
        sign.setState().type(state)
        sign.setCity().type(city)
        sign.setZipCode().type(zipcode)
        sign.setMobileNum().type(mob)
        sign.clickCreateAccount()
 })






