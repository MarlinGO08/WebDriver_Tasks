class PricingPage {
    get freeTrialBtn() {return $('//a[text()="Start a free trial"]')}
    get compareLink() {return $('a[href="#compare-features"]')}
    get headerText() {return $('h1="Compare features"')}

    async clickOnTrialBtn() {
        await this.freeTrialBtn.click()
    }

    async clickOnCompareLink() {
        await this.compareLink.scrollIntoView()
        await this.compareLink.click()
    }
}

export default new PricingPage()