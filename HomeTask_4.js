import { browser, expect } from '@wdio/globals'
import assert from "assert/strict"
import MainPage from './pages/main.page'
import SignUpPage from './pages/sign.up.page'
import signUpPage from './pages/sign.up.page'

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
})