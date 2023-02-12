class LoginPage{
    UsernameField(){
        return cy.get('input[name="username"]')
    }
    PasswordField(){
        return cy.get('input[name="password"]')
    }
    LoginBtn(){
        return cy.get('button[type="submit"]')
    }
}
export default LoginPage