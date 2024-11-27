import { Locator, Page, expect } from '@playwright/test';

export class CaseDetails {

    readonly page: Page
    readonly caseDetailsFormName: Locator
    readonly serviceProvider: Locator
    readonly nextBtn: Locator

    constructor (page: Page){
        this.page = page
        this.caseDetailsFormName = page.locator('xpath=//h4[contains(text(),"Case Details")]')
        this.serviceProvider = page.locator('xpath=(//span[@role="combobox"])[1]')
        this.nextBtn = page.locator('xpath=//button[contains(text()," Next ")]')



    }

    async validateCaseDetails (){

        await expect(this.caseDetailsFormName).toBeVisible();
        const service_provider = await this.serviceProvider.textContent();
        await expect(service_provider).toContain("Registrar of Societies");
        if (service_provider == "Registrar of Societies")
            console.log("ok")
        else console.log(" not ok ")
        await this.nextBtn.click();

    }

}