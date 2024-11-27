import { Locator, Page, expect } from '@playwright/test';

export class GetProfile {

    readonly page: Page;
    readonly personalProfileSelect: Locator
    readonly menuProfiles: Locator

    constructor (page: Page){
     this.page = page
     this.menuProfiles = page.locator('//div[@role="dialog"]').first();
     this.personalProfileSelect = this.menuProfiles.locator('//p[contains(text(),"Personal")]');

    }

    async selectProfile () {

   // await this.menuProfiles.waitFor({timeout: 30000 })
    //await expect(this.menuProfiles).toBeVisible();
   // await this.personalProfileSelect.waitFor({timeout: 30000});
   // await expect(this.personalProfileSelect).toBeVisible();
    await this.menuProfiles;
    await this.menuProfiles.waitFor({state: "visible"});
    await this.personalProfileSelect.click();


    }

    async changetProfileTo () {

        await this.menuProfiles.waitFor({state: 'visible'})
        await this.personalProfileSelect.waitFor()
        await this.personalProfileSelect.click()
    
    
        }


 
    }


    

