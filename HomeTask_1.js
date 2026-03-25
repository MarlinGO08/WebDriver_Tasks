import { browser, expect } from '@wdio/globals'

describe("WebdriverIO_API_page_testing", () => {
    //Перевірка наявності тексту "Introduction" на сторінці API 
    it('Should contain "Introduction" text', async () => {
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
        console.log('Повний URL елементу: ' + elementUrl)

        //Перевіряєм чи відповідає посилання тому що ми бачим на сторінці
        await expect(elementUrl).toBe("https://webdriver.io/docs/api/webdriver")
    })

    //All is done
    it('All is done', async () => {
        await browser.url('https://webdriver.io/')
        await browser.pause(2000)

        //Клікаємо SearchBar
        const serchBar = await $('.DocSearch-Button-Placeholder')
        await serchBar.click()
        await browser.pause(2000)

        //Вводимо текст "all is done" в поле 
        const inputField = await $('#docsearch-input')
        await inputField.setValue('all is done')
        await browser.pause(2000)

        console.log(await inputField.getValue())

        //Видаляємо текст з поля 
        const closeButton = await $('.DocSearch-Reset')

        //Клікаємо на кнопку очищення 
        await closeButton.click()
        await browser.pause(2000)
    })
}) 

