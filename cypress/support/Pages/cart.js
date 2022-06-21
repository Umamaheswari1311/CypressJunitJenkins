class card
{
cart_btn()
{
    return cy.get('a').contains('Cart')
}
checkProduct(val)
{
    return cy.get('a').contains(val)  
}
ProceedCheckout()
{
    return cy.get('.btn.btn-default.check_out')
}
comment()
{
    return cy.get("textarea[name='message']")
}
placeOrder_btn()
{
    return cy.get('a').contains('Place')
}
}
export default card