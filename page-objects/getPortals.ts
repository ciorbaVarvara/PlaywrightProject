import { Locator, Page, Browser, BrowserContext, expect } from '@playwright/test';
import { data } from './data';

export class GetPortals {

    readonly page: Page;
    readonly browser: Browser;
    readonly context: BrowserContext;
    private responseJson: unknown;
    

    constructor (page: Page){
       this.page = page
        
    }
    
    async open() {
        const responsePromise = this.page.waitForResponse(
            (response) =>
                response.url().endsWith("https://society.test.gsb.gov.zm/services") &&
                response.status() === 304,
        );
       // await this.page.goto('https://society.test.gsb.gov.zm/services');
       // await super.open();
        // Trigger the request by opening the link page
        // Wait for the response and parse the JSON
        const response = await responsePromise;
        this.responseJson = await response.json();
    }

   /* async beforeToOpen() {
        await this.page.route(this.url, async (route) => {
            await route.fulfill({
                body: JSON.stringify(data),
            });
        });
    }*/

    async society_UI_test (){
        //await expect(this.page)
        await this.page.goto('https://society.test.gsb.gov.zm/services');
        await this.page.waitForLoadState('load');


    }

    async society_WEB_test  (){
        await this.page.goto('https://srs.test.gsb.gov.zm/services');

    }

    async society_UI_stage (){
        await this.page.goto('https://society.stage.gsb.gov.zm/services');

    }

    async society_WEB_stage  (){
        await this.page.goto('https://srs.stage.gsb.gov.zm/services');

    }
}
