/// <reference types="cypress" />
import 'cypress-iframe'

describe('iframe',function(){
  
    beforeEach(function(){
        //URL Launch
        //cy.visit("https://the-internet.herokuapp.com/iframe") 
        cy.visit('http://the-internet.herokuapp.com/nested_frames')
        
        })
        
        it('iframe-jquery',()=>{
            cy.get('#mce_0_ifr').within(($ele)=>{
            const frameContent=$ele.contents().find('body')
            cy.wrap(frameContent)
            .type('Hello')
        })

        })
        it('iframe-plugin',()=>{
            cy.frameLoaded('#mce_0_ifr')
            cy.iframe().clear().type('Uma')         
        })
        it('custom-iframe',()=>{
            cy.getIframeBody("#mce_0_ifr")
            .clear()
            .wait(2000)
            .type('World')
            })
    
   it('NestedFrame-jquery',()=>{
    
            cy.get('frame[name=frame-top]').within(($ele)=>{
            const frameContent=$ele.contents()
            cy.wrap(frameContent).find('frame[name=frame-left]')
            .within(($child)=>{
            const leftFrame=$child.contents().find('body')
            cy.wrap(leftFrame).should('have.text','LEFT') 
            })          
        })
    })
    
    it.only('NestedFrame-customway',()=>{   
    cy.findIframeBody("frame[name=frame-top]","frame[name=frame-middle]")
    .find('div#content').should('have.text','MIDDLE')    
    })
  
           
})