class EnterpricePage {
    get enterpriceBtn() {return $('/html/body/div[1]/div[5]/main/div/div[2]/div/div/div[1]/a/div/div')}
    get headerText() {return $('/html/body/div[1]/div[5]/main/div/div[1]/h1')}
    
    async clickOnEnterpriceBtn() {
        await this.enterpriceBtn.click()
    }
}

export default new EnterpricePage()