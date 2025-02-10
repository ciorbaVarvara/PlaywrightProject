import { Locator, Page, expect } from '@playwright/test';
import { copyFileSync } from 'fs';
import { PageOfTheStep } from './page';

export class ApplicantDetails extends PageOfTheStep  {
   
    private stepNames: Locator;
    readonly applicantDetailsFormName: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly identityDocumentNo: Locator

    constructor (page: Page){
        super(page);

        this.stepNames = this.container.locator(`//h4[contains(text(),"Applicant Details")]`)

    }

    async validateApplicantDetails (){

        await this.stepNames.waitFor({state: "visible"});
        if (await this.stepNames.isVisible()){
        }return "No Data Found";
    }

}