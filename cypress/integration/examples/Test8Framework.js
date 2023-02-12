import HomePage from "./pageObject/homePage"
import ProductPage from "./pageObject/ProductPage"
/// <reference types="cypress" />
describe('My Seventh Test Suite',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('My Test Case',function(){
        const homePage = new HomePage()
        const productPage = new ProductPage()
        
        cy.visit(Cypress.env('url')+'/angularpractice/')

        homePage.getNameBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayBinding().should('have.value',this.data.name)
        homePage.getNameBox().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
        productPage.CartButton().click()
        var sum = 0
        productPage.PriceProduct().each(($el,index,$list)=>{
            
            const amount = $el.text()
            var res=amount.split(' ')
            res=res[1].trim()
            sum=Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
        })
        productPage.TotalPriceProduct().then(function(element){
            const amount = element.text()
            var res=amount.split(' ')
            var total=res[1].trim()
            expect(Number(total)).to.be.equal(sum)
        })
        
        productPage.CheckoutButton().click()
        productPage.CountryField().type('indo')
        productPage.SuggestionCountry().click()
        productPage.CheckboxTermsandCondition().click({force: true})
        productPage.PurchaseButton().click()
        productPage.SuccessPurchaseAlert().then(function(element){
            const ActualText = element.text()
            expect(ActualText.includes('Success')).to.be.true
        })
    })
    
    })