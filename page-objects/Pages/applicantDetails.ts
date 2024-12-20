import { Locator, Page, expect } from '@playwright/test';
import { copyFileSync } from 'fs';
import { PageOfTheStep } from './page';

export class ApplicantDetails extends PageOfTheStep  {

    readonly applicantDetailsFormName: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly identityDocumentNo: Locator

    constructor (page: Page){
        super(page);

    }

    async validateApplicantDetails (){

    }

}