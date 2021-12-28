context('Exxon-ViewPort',function(){
    beforeEach(() => {
        cy.visit('https://corporate.exxonmobil.com/')
      })
    specify('HomePage-Pixel-320,480',()=>{
        cy.viewport(320, 480)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get("button[aria-label='Navigation']").should('be.visible')
        cy.get("button[aria-label='Navigation']").click()
    })
    specify('HomePage--ipad-2',()=>{
        cy.viewport('ipad-2')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get("button[aria-label='Navigation']").should('be.visible')
        cy.get("button[aria-label='Navigation']").click()
    })
    specify('HomePage--iphone-8',()=>{
        cy.viewport('iphone-8')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get("button[aria-label='Navigation']").should('be.visible')
        cy.get("button[aria-label='Navigation']").click()
    })
   
})