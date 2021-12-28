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

Cypress.Commands.add('login', (email, password) => { 
     
       cy.get('#userName').type(email)
       cy.get('#password').type(password)
       cy.get('#login').click()
 })
 Cypress.Commands.add('loginjson', (user) => { 
      cy.get('#userName').type(user.username)
      cy.get('#password').type(user.password)
      cy.get('#login').click()
  })

Cypress.Commands.add('getIframeBody', (frame) => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
  .get(frame)
  .its('0.contentDocument.body').should('not.be.empty')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  // https://on.cypress.io/wrap
  .then(cy.wrap)
})
Cypress.Commands.add('findIframeBody', (frame1,frame2) => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
  .get(frame1)
  .its('0.contentDocument.body').should('not.be.empty')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  // https://on.cypress.io/wrap
  .then(cy.wrap).find(frame2)
  .its('0.contentDocument.body').should('not.be.empty')
  .then(cy.wrap)
})



