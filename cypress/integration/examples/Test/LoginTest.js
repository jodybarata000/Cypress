import LoginPage from "../Pages/LoginPage"
import HomePage from "../Pages/HomePage"
/// <reference types="cypress" />
describe('Login Test Suite',function(){
    before(function(){
        cy.fixture('Account').then(function(data){
            this.data=data
        })
    })
    it('LoginTest Case',function(){
        const loginPage = new LoginPage()
        const homePage = new HomePage()
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginPage.UsernameField().type(this.data.email)
        loginPage.PasswordField().type(this.data.password)
        loginPage.LoginBtn().click()
        homePage.LogoImage().should('be.visible')
    })
    
    })