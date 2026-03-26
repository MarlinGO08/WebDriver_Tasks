import { browser, expect } from '@wdio/globals'
import assert from "assert/strict"

const BASE_URL = 'https://github.com'

describe('HomeTask_3', () => {
    it('GT-001', async ()=> {
        await browser.setWindowSize(1440, 1000);
        await browser.url(BASE_URL)
        await browser.pause(2000)

        const testData = 'ivalid.format.com'
        const inputWindow = $('#hero_user_email')

        //Filling input field with our test data
        await inputWindow.click()
        await inputWindow.setValue(testData)
        await browser.pause(3000)

        //Clicking the [Sign up for Github] button 
        const button = await $('.Primer_Brand__Button-module__Button___lDruK.Primer_Brand__Button-module__Button--primary___xIC7G.Primer_Brand__Button-module__Button--size-medium___EyCyw.CtaForm-primaryAction.CtaFormControl-button.js-hero-action')
        console.log('The [Sign up for Github] button is clickable: ', await button.isClickable())
        await button.click()
        await browser.pause(5000)
    })
})