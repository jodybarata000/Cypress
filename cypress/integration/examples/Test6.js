/// <reference types="cypress" />
describe('My Sixth Test Suite',function(){

    it('My Sixth Test case',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('includes','top')
    })
    
    
    })