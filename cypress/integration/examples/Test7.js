/// <reference types="cypress" />
describe('My Seventh Test Suite',function(){

    it('My Seventh Test case',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.log(url)
        })
    })
    
    
    })