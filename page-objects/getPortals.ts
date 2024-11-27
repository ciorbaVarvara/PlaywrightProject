import { Locator, Page, Browser, BrowserContext } from '@playwright/test';
import { data } from './data';

let eServicesPage;

export class GetPortals {

    readonly page: Page;
    readonly browser: Browser;
    readonly context: BrowserContext;
    url = "https://societyapi.test.gsb.gov.zm/components?type=page&name=servicePassportPage&parameters.ServiceID=71";

    constructor (page: Page){
     this.page = page
    }

    async beforeToOpen() {
        await this.page.route(this.url, async (route) => {
            await route.fulfill({
                body: JSON.stringify(data),
            });
        });
    }

    async society_UI_test (){

        await this.page.goto('https://society.test.gsb.gov.zm/services');

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
