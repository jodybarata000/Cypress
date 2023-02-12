class ProductPage{
    CartButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    PriceProduct(){
        return cy.get('tr td:nth-child(4) strong')
    }
    TotalPriceProduct(){
        return cy.get('h3 > strong')
    }
    CheckoutButton(){
        return cy.contains('Checkout')
    }
    CountryField(){
        return cy.get('#country')
    }
    SuggestionCountry(){
        return cy.get('.suggestions > ul > li > a')
    }
    CheckboxTermsandCondition(){
        return cy.get('#checkbox2')
    }
    PurchaseButton(){
        return cy.get('.ng-untouched > .btn')
    }
    SuccessPurchaseAlert(){
        return cy.get('.alert')
    }
}
export default ProductPage