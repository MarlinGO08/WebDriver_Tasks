import { browser, expect } from '@wdio/globals'

describe('HomeTask_2', () => {
    xit('Go to the API page', async () => {
        await browser.setWindowSize(1440, 1000);
        await browser.url('https://webdriver.io')

        const navApi = await $('nav a[href="/docs/api"]')

        //Check API page navigation button
        console.log('API navigation button is visible: ',await   navApi.isDisplayed())
        console.log('API navigation button is clickable: ',await   navApi.isClickable())

        await expect(navApi.isClickable())
        await expect(navApi.isDisplayed())
        await navApi.click()
        await browser.pause(2000)
    })

    it('Scroll down and check footer link', async () => {
        await browser.setWindowSize(1440, 1000);
        await browser.url('https://webdriver.io/docs/api')

        const footerButton = await $('li a[class="footer__link-item"][href="/docs/api"]')
        await footerButton.scrollIntoView()
        await browser.pause(2000)

        await expect(footerButton.isClickable())
        await expect(footerButton.isDisplayed())

        //Get HTML of the link
        console.log('HTML of the footer link', await footerButton.getHTML())
    })
})