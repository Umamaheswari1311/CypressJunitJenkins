/// <reference types="cypress" />
class Login
{
getUserName()
{
return cy.get('#userName')

}
getPassword()
{
    return  cy.get('#password')   
}

doSigin()
{
    cy.get('#login').click()
return this
}
}
export default Login