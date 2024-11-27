import { expect, Locator, Page } from '@playwright/test';

export class EServiceDescription {

    readonly page: Page
    readonly serviceNameText: Locator
    readonly startApplicationBtn: Locator


    constructor (page: Page){
        this.page = page
        this.startApplicationBtn = page.getByText(' Start Application ')
        this.serviceNameText = page.locator('xpath=//p[contains(text(),"Registration of Society")]')

    }

    async startApplication(){

        await expect(this.serviceNameText).toBeVisible()
        await expect(this.startApplicationBtn).toBeVisible({timeout:70000})
      //  await expect(this.startApplicationBtn).toBeEnabled({timeout:70000})
       // await expect(this.startApplicationBtn).toBeEditable({timeout:70000})

        await this.startApplicationBtn.click()


    }
    


}