import { browser, expect } from '@wdio/globals'

describe("WebdriverIO_API_page_testing", () => {
    //Перевірка наявності тексту "Introduction" на сторінці API 
    it('Should contain "Introduction" text', async () => {
        await browser.url('https://webdriver.io/docs/api')

        //Отримуєм значення елементу h1 і заносим його в змінну 
        const titleValue = await $('h1').getText() 
        console.log("Текст заголовку: " + titleValue);

        await expect(titleValue).toBe("Introduction")
        })



}) 

