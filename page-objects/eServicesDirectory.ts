import { Locator, Page, expect } from '@playwright/test';

export class EServicesDirectory {

    readonly page: Page
    readonly registrationOfSocietyService: Locator
    readonly btn: Locator
    readonly serviceNameText: Locator



    constructor (page: Page){
        this.page = page
        this.registrationOfSocietyService = page.getByText('Registration of Society')
        this.btn = page.getByText(' Start Application ')
       // this.serviceNameText = page.locator('xpath=//p[contains(text(),"Registration of Society")]')





    }

    async selectServiceFromDirectory (){

        await this.registrationOfSocietyService.waitFor({state: 'visible'});
        await expect(this.registrationOfSocietyService).toBeVisible();
        await expect(this.registrationOfSocietyService).toBeEnabled();

        await this.registrationOfSocietyService.click();


       // await expect(this.serviceNameText).toBeVisible()
       // await expect(this.btn).toBeVisible({timeout:70000});
       // await expect(this.btn).toBeEnabled({timeout:70000});

       // this.btn.click();

    }







}