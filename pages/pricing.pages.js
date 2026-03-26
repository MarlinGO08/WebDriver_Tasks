class PricingPage {
    get freeTrialBtn() {return $('//a[text()="Start a free trial"]')}

    async clickOnTrialBtn() {
        await this.freeTrialBtn.click()
    }
}

export default new PricingPage()