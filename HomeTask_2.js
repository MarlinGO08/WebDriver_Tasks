import { browser, expect } from '@wdio/globals'

describe('HomeTask_2', () => {
    it('Go to the API page', async () => {
        await browser.setWindowSize(1440, 1000);
        await browser.url('https://webdriver.io')

        const navApi = await $('nav a[href="/docs/api"]')

        //Check API page navigation button
        console.log('API navigation button is visible: ',await   navApi.isDisplayed())
        console.log('API navigation button is clickable: ',await   navApi.isClickable())

        await expect(navApi.isClickable())
        await navApi.click()
        await browser.pause(2000)
    })
})