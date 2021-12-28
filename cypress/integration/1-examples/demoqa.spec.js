/// <reference types="cypress" />
import 'cypress-iframe'

beforeEach(() => {
    //URL Launch
    cy.visit('https://demoqa.com/')
    cy.url().should('include','demoqa')
    cy.get("img").should('have.length',3)
    
    })
      
   
      
     /* it('Texbox',() => {
         cy.get("svg[viewBox*='0 0 448 512'] > path").click()
      cy.get('span').contains('Text Box').click()
      cy.get('#userName').type("uma@gmail.com")
        }) */
  
    /* it('Checkbox',() => {
        cy.get("svg[viewBox*='0 0 448 512'] > path").click()
        cy.get('span').contains('Check Box').click()
       cy.get("button[title='Toggle']").find('path').click({ force: true })
       cy.get('#tree-node-documents').should('not.be.visible')
       //Check one checkbox
       cy.get('#tree-node-documents').check({ force: true }).should('be.checked').and('have.attr','id','tree-node-documents')
       //Uncheck one checkbox
       cy.get('#tree-node-documents').uncheck({ force: true }).should('not.be.checked')
       //Check multiple checkboxes
       cy.get('input[type*=checkbox]').check({ force: true }).should('be.checked')
       //Uncheck multiple checkboxes
       cy.get("input[type*=checkbox]").uncheck({ force: true }).should('not.be.checked')
 
    }) */
   /* it('Auto Complete',()=>{
    cy.get("svg[viewBox='0 0 24 24']:last-child>path").click({force: true})
    cy.get('span').contains('Auto').click()
    cy.get('#autoCompleteMultipleInput').type('gr')
    cy.get('#react-select-2-option-0').each(($ele,$index,$list)=> {
      if($ele.text().includes('Green'))
      {
          $ele.click()
      }
      cy.get('#autoCompleteMultipleContainer').contains('Green')
    })
    cy.get('#autoCompleteMultipleInput').type('bl')
    cy.get('#react-select-2-option-0').contains('Blue').click()
    cy.get('#autoCompleteMultipleInput').type('ye').type('{enter}')
    cy.get('#autoCompleteMultipleInput').type('i').type('{pagedown}').type('{pagedown}').type('{pagedown}').type('{enter}')
   }) */
    /* it('Radio buttons',()=>{
        cy.get("svg[viewBox*='0 0 448 512'] > path").click()
        cy.get('span').contains('Radio Button').click()
        cy.get('#yesRadio').check({ force: true }).should('be.checked')
        cy.get('#noRadio').should('be.disabled')
    }) */
   
    
    
   /*  it('Alert',function(){
        cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
        cy.get('li>span').contains('Alerts').click()
        //Alert
        cy.get('#alertButton').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('You clicked a button')
        })
        
   //Confirm
   cy.get('#confirmButton').click()
   cy.on('window:confirm',(txt)=>{
       expect(txt).to.equal('Do you confirm action?')
   })
})*/
/* it('Naviagtion',function()
{
    cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
    cy.url().should('include','alert')
    cy.go('back')
    cy.get('h5').contains('Widgets').should('exist')
    cy.go('forward')
    cy.url().should('include','alert')
     cy.go(-1)
     cy.reload()
}) */

/* it('Webtable',()=>{
    cy.get("svg[viewBox*='0 0 448 512'] > path").click()
    cy.get('span').contains('Web Tables').click()
//Static Text finding anywhere from table
    cy.get('.rt-tbody').contains('div','Vega').should('exist')
    cy.get('.rt-tbody').contains('div','Vega').should('be.visible')
//Specific Row and Column value from table
cy.get('div[role=grid] > div:last-child>div:nth-child(2)>div>div:nth-child(3)').contains('45').should('be.visible')
//static value to find next dynamic value
cy.get('div[role=grid] > div:last-child>div:nth-child(2)>div>div:nth-child(3)').next().contains('alden')
//static value to find prev dynamic value
cy.get('div[role=grid] > div:last-child>div:nth-child(2)>div>div:nth-child(3)').prev().contains('Cantrell')

//Iteration of column values
//cy.pause()
cy.get('div[role=grid] > div:last-child div[role=row] >div:first-child').each(($ele,$index,$list)=>{
if(expect($ele.text()).not.to.be.empty)
cy.log($ele.text())
})
}) */
/* it('tooltips',()=>{
    //Invoke jquery text method
    cy.get("svg[viewBox='0 0 24 24']:last-child>path").click({force: true})
    cy.get('span').contains('Tool').click()
    cy.get('#toolTipButton').invoke('text').then(getText=> {
     expect(getText).to.equal('Hover me to see')
    })
   //Invoke jquery show method for hidden element
   cy.get('#toolTipButton').trigger('mouseover').invoke('show')
  cy.contains('You hovered over the Button')    
}) 
 */
 /* it('childwindow',()=>{
    cy.get("svg[viewBox*='0 0 448 512'] > path").click()
    cy.get('span').contains('Links').click()
    cy.get('#dynamicLink').invoke('removeAttr','target').click()
    cy.go('back')


})  */

/* it('getProperty',()=>{
    cy.get("svg[viewBox*='0 0 448 512'] > path").click()
    cy.get('span').contains('Links').click()
    cy.get('#dynamicLink').then(el=>{
        const url=el.prop('href')
        cy.visit(url)
    })
})*/
/* it('iframe',function(){
        cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
        cy.get('li>span').contains('Frames').click()
        cy.getIframeBody("iframe#frame1").find('#sampleHeading').should('have.text','This is a sample page')
 }) */
 /* it('Nested-iframe',function(){
    cy.get("svg[viewBox*='0 0 14 16']> path").click({force: true})
    cy.get('li>span').contains('Nested').click()
    cy.getIframeBody("iframe#frame1").find('iframe').within(($child)=>{
        const inner=$child.contents().find('body')
        cy.wrap(inner).find('p').should('have.text','Child Iframe')
 })
   
})*/
 
