import { Locator, Page, expect } from '@playwright/test';

export class ApplicationFormRegistrationOfSocietyService {

    readonly page: Page
    readonly nextBtn: Locator
    readonly applicationServcieFormName: Locator

    



    constructor (page: Page){
        this.page = page
        this.applicationServcieFormName = page.locator('//h4[contains(text(),"Service Application Form")]');

    }

    async validateApplicantDetails (){

        await expect(this.applicationServcieFormName).toBeVisible();
        /*
                  //fields

        */
        await this.nextBtn.click();

    }

}