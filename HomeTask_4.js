import { browser, expect } from '@wdio/globals'
import assert from "assert/strict"
import MainPage from './pages/main.page'
import SignUpPage from './pages/sign.up.page'
import mainPage from './pages/main.page'
import pricingPages from './pages/pricing.pages'
import enterprisePage from './pages/enterprise.page'


const BASE_URL = 'https://github.com'

describe('HomeTask_4', ()=> {
    it('GT-004', async () => {
        await browser.url(BASE_URL)

        await MainPage.clickOnSgnUpBtn();
        await browser.pause(5000)

        await SignUpPage.emailField.setValue('test12345@gmail.com')
        await SignUpPage.passwordField.setValue('TestPassword123')
        await SignUpPage.usernameField.setValue('Test_User')
        await browser.pause(5000)

        await SignUpPage.clickOnAccBtn()
        await browser.pause(5000)
    })

    it.only('GT-005', async () => {
        await browser.url(BASE_URL)

        mainPage.clickOnPriceBtn()
        await browser.pause(2000)

        console.log('Header text is visible: ', await mainPage.headerText.isDisplayed())
        await pricingPages.freeTrialBtn.scrollIntoView()
        console.log('Try free trial button is clickable: ', await pricingPages.freeTrialBtn.isClickable())
        pricingPages.clickOnTrialBtn()
        await browser.pause(2000)

        console.log("Header text is avaliable: ", await enterprisePage.headerText.isDisplayed())
        await enterprisePage.enterpriceBtn.scrollIntoView()
        enterprisePage.clickOnEnterpriceBtn()
        await browser.pause(5000)
        expect(browser.url('https://github.com/signup'))
    })
})