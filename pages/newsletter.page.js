class NewsletterPage {
    get emailField() {return $('#form-field-emailAddress')}
    get dropDown() {return $('#form-field-country')}
    get checkBox() {return $('//*[@id="FormControl--_R_e9b9b_"]/span/span')}
    get subscribeBtn() {return $('button=Subscribe')}

    async clickOnCheckBox() {
        await this.checkBox.click()
    }

    async clickOnDropDown() {
        await this.dropDown.selectByVisibleText('Ukraine')
    }

    async clickOnSubBtn() {
        await this.subscribeBtn.click()
    }
}

export default new NewsletterPage()