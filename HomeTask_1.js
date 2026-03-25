import { browser, expect } from '@wdio/globals'

describe("WebdriverIO_API_page_testing", () => {
    //Перевірка наявності тексту "Introduction" на сторінці API 
    xit('Should contain "Introduction" text', async () => {
        await browser.url('https://webdriver.io/docs/api')

        //Отримуєм значення елементу h1 і заносим його в змінну 
        const titleValue = await $('h1').getText() 
        console.log("Текст заголовку: " + titleValue);

        //Перевіряєм чи заголовок містить текст який ми отримали
        await expect(titleValue).toBe("Introduction")
        })


    //Перевірка URL для елементу "WebDriver"
    it('Should contain valid URL', async () => {
        await browser.url('https://webdriver.io/docs/api')

        //Отримуєм значення елементу "WebDriver" і заносим його в змінну
        const elementUrl = await $('=WebDriver').getProperty('href')
        console.log('URL елементу: ' + elementUrl)

        //Перевіряєм чи відповідає посилання тому що ми бачим на сторінці
        await expect(elementUrl).toBe("https://webdriver.io/docs/api/webdriver")
    })
}) 

