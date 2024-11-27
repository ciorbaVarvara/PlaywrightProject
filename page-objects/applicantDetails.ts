import { Locator, Page, expect } from '@playwright/test';
import { copyFileSync } from 'fs';

export class ApplicantDetails {

    readonly page: Page
    readonly nextBtn: Locator
    readonly applicantDetailsFormName: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly identityDocumentNo: Locator

    



    constructor (page: Page){
        this.page = page
        this.applicantDetailsFormName = page.locator('//h4[contains(text(),"Applicant Details")]');
        this.firstName = page.locator('(//input[@type="text"])[1]');
        this.lastName = page.locator('//input[@id="LastName"]');
        this.identityDocumentNo = page.locator('//input[@id="NRC"]');


    }

    async validateApplicantDetails (){

        await expect(this.applicantDetailsFormName).toBeVisible({timeout: 20000});
        const applicantFirstName = await this.firstName.textContent({timeout: 20000});
        const applicantLastName = await this.lastName.textContent({timeout: 20000});
        const identityDocumentNo = await this.identityDocumentNo.textContent({timeout: 20000});
        await expect(applicantFirstName).toContain("Varvara");
        await expect(applicantLastName).toContain("Ciorba");
        await expect(identityDocumentNo).toContain("727110111");
        await this.nextBtn.click();

    }

}