import { Locator, Page, Browser, BrowserContext, expect, chromium, request, APIRequestContext } from '@playwright/test';
import { data } from './data';
import * as fs from 'fs';
import { User } from './Interfaces/user-info';
import { user } from './Sitemaps/user-info';

export class GetPortals {

    readonly page: Page;
    readonly browser: Browser;
    readonly context: BrowserContext;
    private responseJson: unknown;
    readonly environmnet: string[] = ["test", "stage"];
    readonly baseUrl_Test_UI = `https://society.${this.environmnet[0]}.gsb.gov.zm/`;
    readonly urlTest_WEB = `https://srs.${this.environmnet[0]}.gsb.gov.zm/services`;
    readonly apiTest = `https://societyapi.${this.environmnet[0]}.gsb.gov.zm`;

    constructor(page: Page) {
        this.page = page

    }

    async society_UI_test() {

        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        await this.page.goto(this.baseUrl_Test_UI);
        await this.page.waitForLoadState('load');

        const apiRequestContext: APIRequestContext = await request.newContext();
        const response = await apiRequestContext.get(`${this.baseUrl_Test_UI}favicon.ico`);
        return response.status();

    }

    async launchBrowserWithCache(userDataDir: string) {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            storageState: 'context-storage.json', // Load saved storage state
        });

        const page = await context.newPage();
        await page.goto(this.baseUrl_Test_UI);
        await browser.close();
    }

    async society_WEB_test() {
        await this.page.goto('https://srs.test.gsb.gov.zm/services');

    }

    async society_UI_stage() {
        await this.page.goto('https://society.stage.gsb.gov.zm/services');

    }

    async society_WEB_stage() {
        await this.page.goto('https://srs.stage.gsb.gov.zm/services');

    }
}
