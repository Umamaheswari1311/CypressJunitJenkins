/// <reference types="cypress" />
class product
{
product_btn()
{
    return cy.get("a[href='/products']")
}
search_field()
{
    return cy.get('#search_product')
}
search_icon()
{
    return cy.get('#submit_search')
}
checkPriceOfProduct()
{
    return cy.get(".productinfo > h2")
}
addCart()
{
return cy.get("a[class$='btn btn-default add-to-cart']")
}
continueShopping()
{
    return cy.get('button').contains('Continue')
}
}
export default product