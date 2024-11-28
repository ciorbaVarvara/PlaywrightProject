import { Locator, Page, Browser, BrowserContext, expect, chromium } from '@playwright/test';
import { data } from './data';
import * as fs from 'fs';


export class GetPortals {

    readonly page: Page;
    readonly browser: Browser;
    readonly context: BrowserContext;
    private responseJson: unknown;
    urlTest_UI = "https://society.test.gsb.gov.zm/services";
    urlTest_WEB = "https://srs.test.gsb.gov.zm/services";
    apiTest = "https://societyapi.test.gsb.gov.zm/components/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=";
    //https://societyapi.test.gsb.gov.zm/components/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=
    

    constructor (page: Page){
       this.page = page
        
    }
    
    async open() {
        const responsePromise = this.page.waitForResponse(
            (response) =>
                response.url().endsWith(this.urlTest_UI) &&
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
        
        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        //const responsePromise = page.waitForResponse((response) => response.url().includes(this.apiTest));
        await this.page.goto(this.urlTest_UI);
        await this.page.waitForLoadState('load');
        //const response = await responsePromise;
        //const responseBody = await response.json();
        //fs.writeFileSync('response.json', responseBody, 'utf-8');
        //console.log('Response saved to response.json');


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
