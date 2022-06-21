class payment
{
  getNameOnCard()
  {
     return cy.get("input[name='name_on_card']")
  } 
  getCardNumber()
  {
     return cy.get("input[name='card_number']")
  }
  getNameOnCard()
  {
     return cy.get("input[name='name_on_card']")
  }
  getCvcNum()
  {
     return cy.get("input[name='cvc']")
  }
  getExpireMonth()
  {
     return cy.get("input[placeholder='MM']")
  }
  getExpireYear()
  {
     return cy.get("input[placeholder='YYYY']")
  }
  clickPayAndConfirm()
  {
    return cy.get('#submit')
  }
  getOrderPlacedMsg()
  {
    return cy.get("h2[class='title text-center'] b")
  }

}
export default payment