import { Locator, Page, expect } from '@playwright/test';
import { copyFileSync } from 'fs';
import { PageOfTheStep } from '../../page';
import { LoadHookContext } from 'module';
import { Combobox_ } from '../../components/combobox';
import { Field } from '../../components/field';


export class SocietyNameReservation extends PageOfTheStep  {
    private stepNames: Locator;
    readonly societyNameField: Field;
    readonly societyTypeCombobox: Combobox_;

    constructor (page: Page){
        super(page);
        this.stepNames = this.container.locator(`//h4[contains(text(),"Service Details")]`)
        this.societyNameField = new Field(page, "Name of Society");
        this.societyTypeCombobox = new Combobox_(page, 
            "Type of Society", 0) 
    }

    async verifyStepNames(){
        await this.stepNames.waitFor({state: "visible"});
    }

}