/// <reference types="cypress" />
class signup
{
    
getTitle()
{
  return  cy.get("div[class='signup-form'] h2") 
}
setUname()
{
  return  cy.get("input[placeholder='Name']")
}
setEmail()
{
   return cy.get("input[data-qa='signup-email']")
}
loginEmail()
{
   return cy.get("input[data-qa='login-email']")
}
doSignup()
{
    cy.get("button[data-qa*='signup']").click()
    return this
}
clickRadioButton(index)
{
    cy.get('.radio').eq(index).click()
}
setPwd()
{
  return  cy.get('#password')
}
loginPwd()
{
  return  cy.get("input[data-qa='login-password']")
}
setDay(val)
{
 return cy.get('#days')

}
setMonth(val)
{
 return cy.get('#months')
}
setYear(val)
{
 return cy.get('#years')
}
checkNewsletter()
{
    return cy.get('#newsletter')
}
checkoffer()
{
    return cy.get('#optin')
}
setFname()
{
    return cy.get('#first_name')
}
setLname()
{
    return cy.get('#last_name')
}
setAddress()
{
    return cy.get('#address1')
}
setState()
{
    return cy.get('#state')
}
setCity()
{
   return cy.get('#city')
}
setZipCode()
{   
   return cy.get('#zipcode')

}
setMobileNum()
{
    return cy.get('#mobile_number')
}
clickCreateAccount()
{
cy.get("button[data-qa='create-account']").click()
return this
}
deleteAccountbtn()
{
    return cy.get("a[href='/delete_account']")
}
coninue_btn()
{
    return cy.get("a[data-qa='continue-button']")
}
login_btn()
{
    return cy.get("button[data-qa='login-button']")
}
CheckUserLogin()
{
return cy.get("ul[class='nav navbar-nav'] li a b")
}
checkInvalidLogin()
{
    return cy.get('p').contains('incorrect')
}
}
export default signup