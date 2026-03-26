class MainPage {
    get sgnupBtn() {return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}
    get priceBtn() {return $('a[href="https://github.com/pricing"]')}
    get headerText() {return $('/html/body/div[1]/div[5]/main/div[1]/h1')}
    async clickOnSgnUpBtn() {
        await this.sgnupBtn.click()
    }

    async clickOnPriceBtn() {
        await this.priceBtn.click()
    }
}

export default new MainPage()