class MainPage {
    get sgnupBtn() {return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}


    async clickOnSgnUpBtn() {
        await this.sgnupBtn.click()
    }
}

export default new MainPage()