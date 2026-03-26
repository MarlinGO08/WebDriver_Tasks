class SignUpPage {
    get emailField() {return $('#email')}
    get usernameField() {return $('#login')}
    get passwordField() {return $('#password')}
    get createAccBtn() {return $('//*[@id="signup-form"]/form/div[2]/button/span/span')}

    async clickOnAccBtn(){
        await this.createAccBtn.click()
    }
}

export default new SignUpPage()